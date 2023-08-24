export const MIN_NODE_VERSION = 14;
export const DEV_COMMAND = 'dev';
//框架名
export const FRAMEWORK_NAME = process.env.FRAMEWORK_NAME || 'mfe';
//默认配置文件路径
export const DEFAULT_CONFIG_FILES = [
  `.${FRAMEWORK_NAME}rc.ts`,
  `.${FRAMEWORK_NAME}rc.js`,
  'config/config.ts',
  'config/config.js',
];

export const RUNTIME_TYPE_FILE_NAME = 'runtimeConfig.d.ts';
