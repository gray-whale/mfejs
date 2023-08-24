import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'dotenv';
import { expand } from 'dotenv-expand';

/**
 * 通过dotenv将环境变量中的变量从 .env 或 .env.local 文件加载到 process.env 中
 * @param opts 
 */
export function loadEnv(opts: { cwd: string; envFile: string }) {
  const files = [
    join(opts.cwd, opts.envFile),
    join(opts.cwd, `${opts.envFile}.local`),
  ];
  for (const file of files) {
    if (!existsSync(file)) continue;
    const parsed: Record<string, string> = parse(readFileSync(file)) || {};
    expand({ parsed, ignoreProcessEnv: true });
    for (const key of Object.keys(parsed)) {
      process.env[key] = parsed[key];
    }
  }
}
