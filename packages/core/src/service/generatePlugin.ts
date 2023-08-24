import {
  generateFile,
  installDeps,
  logger,
  prompts,
  updatePackageJSON,
} from '@mfejs/utils';
import { Generator, GeneratorType } from './generator';
import { PluginAPI } from './pluginAPI';
import { IServicePluginAPI } from './service';

/**
 * 生成插件模板的插件
 */
export default (api: PluginAPI & IServicePluginAPI) => {
  api.registerCommand({
    name: 'generate',
    alias: 'g',
    details: `
mfe generate
`,
    description: '快速生成代码片段',
    configResolveMode: 'loose',
    async fn({ args }) {
      const [type] = args._;
      const runGenerator = async (generator: Generator) => {
        await generator?.fn({
          args,
          generateFile,
          installDeps,
          updatePackageJSON,
        });
      };

      if (type) {
        const generator = api.service.generators[type];
        if (!generator) {
          throw new Error(`Generator ${type} not found.`);
        }
        if (generator.type === GeneratorType.enable) {
          const enable = await generator.checkEnable?.({
            args,
          });
          if (!enable) {
            if (typeof generator.disabledDescription === 'function') {
              logger.warn(generator.disabledDescription());
            } else {
              logger.warn(generator.disabledDescription);
            }
            return;
          }
        }
        await runGenerator(generator);
      } else {
        const getEnableGenerators = async (
          generators: typeof api.service.generators,
        ) => {
          const questions = [] as { title: string; value: string }[];
          for (const key of Object.keys(generators)) {
            const g = generators[key];
            if (g.type === GeneratorType.generate) {
              questions.push({
                title: `${g.name} -- ${g.description}` || '',
                value: g.key,
              });
            } else {
              const enable = await g?.checkEnable?.({
                args,
              });
              if (enable) {
                questions.push({
                  title: `${g.name} -- ${g.description}` || '',
                  value: g.key,
                });
              }
            }
          }
          return questions;
        };
        const questions = await getEnableGenerators(api.service.generators);
        const { gType } = await prompts({
          type: 'select',
          name: 'gType',
          message: 'Pick generator type',
          choices: questions,
        });
        await runGenerator(api.service.generators[gType]);
      }
    },
  });
};
