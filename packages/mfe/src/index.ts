import { IServicePluginAPI, PluginAPI } from '@mfejs/core';

export { run } from './cli/cli';
export { RUNTIME_TYPE_FILE_NAME } from './constants';
// export { defineConfig } from './defineConfig';
export * from './service/service';
export type IApi = PluginAPI & IServicePluginAPI;