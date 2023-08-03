import { isAbsolute, join } from 'path';

/**
 *  获取项目的根路径
 * @returns 
 */
export function getCwd() {
  // process.cwd()方法返回 Node.js 进程当前工作的目录
  const cwd = process.cwd();
  const appRoot = process.env.APP_ROOT;
  if (appRoot) {
    return isAbsolute(appRoot) ? appRoot : join(cwd, appRoot);
  }
  return cwd;
}
