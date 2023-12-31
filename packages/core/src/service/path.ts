import { winPath } from '@mfejs/utils';
import { existsSync, statSync } from 'fs';
import { join } from 'path';
import { Env } from '../types';

function winJoin(...args: string[]) {
  return winPath(join(...args));
}

/**
 * 获取相关绝对路径，获取项目目录结构中 node_modules、dist、src、pages 等文件夹的绝对路径。
 * @param opts 
 * @returns 
 */
export function getPaths(opts: { cwd: string; prefix: string; env: Env }) {
  const cwd = opts.cwd;
  const src = winJoin(cwd, 'src');
  const absSrcPath = existsSync(src) && statSync(src).isDirectory() ? src : cwd;
  const absPagesPath = winJoin(absSrcPath, 'pages');
  const absApiRoutesPath = winJoin(absSrcPath, 'api');
  const tmp =
    opts.env === Env.development
      ? `.${opts.prefix}`
      : `.${opts.prefix}-${opts.env}`;
  const absTmpPath = winJoin(absSrcPath, tmp);
  const absNodeModulesPath = winJoin(cwd, 'node_modules');
  const absOutputPath = winJoin(cwd, 'dist');
  return {
    cwd,
    absSrcPath,
    absPagesPath,
    absApiRoutesPath,
    absTmpPath,
    absNodeModulesPath,
    absOutputPath,
  };
}

export type Paths = ReturnType<typeof getPaths>;
