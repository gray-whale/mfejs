import { axios, chalk, fsExtra, logger } from '@mfejs/utils';
import { tar } from '@mfejs/utils';

const unpack = tar.x;

export enum ERegistry {
  npm = 'https://registry.npmjs.com/',
  taobao = 'https://registry.npmmirror.com/',
}

export type MfeTemplate = `@mfejs/${string}-template`;

interface IUnpackTemplateOpts {
  template: MfeTemplate;
  dest: string;
  registry: ERegistry;
}

export const unpackTemplate = async (opts: IUnpackTemplateOpts) => {
  const { template, dest, registry } = opts;

  logger.info(
    `Init a new project with template ${chalk.blue(template)} from npm ...`,
  );

  const tryDownload = async (name: string) => {
    const url = await getNpmPkgTarUrl({ registry, name });
    if (!url) {
      return;
    }
    try {
      return await downloadTar({ dest, url });
    } catch (e) {
      throw new Error(`Download ${name} failed from ${registry}`);
    }
  };

  const nameList: string[] = [];

  const isStartWithMfe = template.startsWith('@mfejs/');
  if (template.endsWith('-template')) {
    // @mfejs/electron-template
    if (isStartWithMfe) {
      nameList.push(template);
    } else {
      // electron-template
      nameList.push(`@mfejs/${template}`);
    }
  } else if (isStartWithMfe) {
    // @mfejs/electron
    nameList.push(`${template}-template`);
  } else {
    // electron
    nameList.push(`@mfejs/${template}-template`);
  }

  for await (const name of nameList) {
    const success = await tryDownload(name);
    if (success) {
      logger.ready(`Init ${chalk.green(name)} success`);
      return success;
    }
  }

  // not found
  throw new Error(
    `Template ${nameList
      .map((i) => chalk.yellow(i))
      .join(', ')} not found from ${registry}`,
  );
};

async function getNpmPkgTarUrl(opts: { registry: string; name: string }) {
  const { registry, name } = opts;
  const nameWithoutScope = name.startsWith('@') ? name.split('/')[1] : name;
  const latestPkgInfoUrl = `${registry}${name}/latest?date=${Date.now()}`;
  const res = await axios.get(latestPkgInfoUrl, { validateStatus: () => true });
  const latestVersion = res?.data?.version;
  if (!latestVersion) {
    return;
  }
  const latestTarUrl = `${registry}${name}/-/${nameWithoutScope}-${latestVersion}.tgz`;
  return latestTarUrl;
}

async function downloadTar(opts: { dest: string; url: string }) {
  const { dest, url } = opts;
  return new Promise<string>(async (resolve, reject) => {
    try {
      const res = await axios.get(url, {
        responseType: 'stream',
      });
      fsExtra.mkdirpSync(dest);
      res.data.pipe(
        unpack({
          C: dest,
          strip: 1,
        }),
      );
      resolve(dest);
    } catch (e) {
      if (fsExtra.existsSync(dest)) {
        fsExtra.removeSync(dest);
      }
      reject(e);
    }
  });
}
