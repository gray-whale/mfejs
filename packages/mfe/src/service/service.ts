import { Service as CoreService } from '@mfejs/core';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { DEFAULT_CONFIG_FILES, FRAMEWORK_NAME } from '../constants';
import { getCwd } from './cwd';

/**
 * 继承 Service 微内核
 */
export class Service extends CoreService {
  constructor(opts?: any) {
    //当前工程的文件夹
    process.env.MFE_DIR = dirname(require.resolve('../../package'));
    const cwd = getCwd();
    // Why?  后面再研究一下
    // plugin import from umi but don't explicitly depend on it
    // and we may also have old umi installed
    // ref: https://github.com/umijs/umi/issues/8342#issuecomment-1182654076
    //require('./requireHook');

    super({
      ...opts,
      env: process.env.NODE_ENV,  //env
      cwd, //当前工程路径
      defaultConfigFiles: opts?.defaultConfigFiles || DEFAULT_CONFIG_FILES, //默认配置文件
      frameworkName: opts?.frameworkName || FRAMEWORK_NAME,  //框架名mfe
      presets: [require.resolve('@mfejs/preset-mfe'), ...(opts?.presets || [])],  //作用是预设一些插件，它通常用来注册一批 presets 和 plugins
      plugins: [  //插件
        existsSync(join(cwd, 'plugin.ts')) && join(cwd, 'plugin.ts'),
        existsSync(join(cwd, 'plugin.js')) && join(cwd, 'plugin.js'),
      ].filter(Boolean),
    });
  }

  async run2(opts: { name: string; args?: any }) {
    console.log('----------------run2----------------');
    let name = opts.name;
    if (opts?.args.version || name === 'v') {
      name = 'version';
    } else if (opts?.args.help || !name || name === 'h') {
      name = 'help';
    }

    // TODO
    // initWebpack

    return await this.run({ ...opts, name });
  }
}
