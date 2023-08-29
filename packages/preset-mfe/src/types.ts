
import type {
  IAdd,
  IEvent,
  IModify,
  IRoute as ICoreRoute,
  IServicePluginAPI,
  PluginAPI,
} from '@mfejs/core';
import { Env } from '@mfejs/core';

export type IScript =
  | Partial<{
    async: boolean;
    charset: string;
    content: string;
    crossOrigin: string | null;
    defer: boolean;
    src: string;
    type: string;
  }>
  | string;
export type IStyle =
  | Partial<{
    content: string;
    type: string;
  }>
  | string;
export type ILink = Partial<{
  as: string;
  crossOrigin: string | null;
  disabled: boolean;
  href: string;
  hreflang: string;
  imageSizes: string;
  imageSrcset: string;
  integrity: string;
  media: string;
  referrerPolicy: string;
  rel: string;
  rev: string;
  target: string;
  type: string;
}>;
export type IMeta = Partial<{
  content: string;
  'http-equiv': string;
  name: string;
  scheme: string;
}>;
export type IApiMiddleware = {
  name: string;
  path: string;
};
export type IEntryImport = {
  source: string;
  specifier?: string;
};
export type IRoute = ICoreRoute;
export type IFileInfo = Array<{ event: string; path: string }>;
export interface IOnGenerateFiles {
  files?: IFileInfo | null;
  isFirstTime?: boolean;
}
export interface IUIMenu {
  path: string;
  url: string;
  icon: string;
  name: string;
}
export interface IUIModule {
  name: string;
  menus?: IUIMenu[];
  [key: string]: any;
}
export type GenerateFilesFn = (opts: IOnGenerateFiles) => Promise<void>;
export type OnConfigChangeFn = (opts: {
  generate: GenerateFilesFn;
}) => void | Promise<void>;

export type IApi = PluginAPI &
  IServicePluginAPI & {
    addApiMiddlewares: IAdd<null, IApiMiddleware>;
    addBeforeBabelPlugins: IAdd<null, any>;
    addBeforeBabelPresets: IAdd<null, any>;
    addEntryCode: IAdd<null, string>;
    addEntryCodeAhead: IAdd<null, string>;
    addEntryImports: IAdd<null, IEntryImport>;
    addEntryImportsAhead: IAdd<null, IEntryImport>;
    addExtraBabelPlugins: IAdd<null, any>;
    addExtraBabelPresets: IAdd<null, any>;
    addHTMLHeadScripts: IAdd<null, IScript>;
    addHTMLLinks: IAdd<null, ILink>;
    addHTMLMetas: IAdd<null, IMeta>;
    addHTMLScripts: IAdd<null, IScript>;
    addHTMLStyles: IAdd<null, IStyle>;
    addLayouts: IAdd<null, { file: string; id: string }>;
    addPolyfillImports: IAdd<null, { source: string; specifier?: string }>;
    addRuntimePlugin: IAdd<null, string>;
    addRuntimePluginKey: IAdd<null, string>;
    addTmpGenerateWatcherPaths: IAdd<null, string>;
    addUIModules: IAdd<null, IUIModule[]>;
    
    modifyBabelPresetOpts: IModify<any, null>;
    modifyEntry: IModify<Record<string, string>, null>;
  
    modifyHTMLFavicon: IModify<string[], {}>;
    modifyRendererPath: IModify<string, {}>;
    modifyRoutes: IModify<Record<string, IRoute>, {}>;
    modifyServerRendererPath: IModify<string, {}>;
    modifyTSConfig: IModify<Record<string, any>, {}>;
    
    onBeforeCompiler: IEvent<{ compiler: 'vite' | 'webpack'; opts: any }>;
    
    onBuildHtmlComplete: IEvent<{}>;
    
    onCheckConfig: IEvent<{
      config: Record<string, any>;
      userConfig: Record<string, any>;
    }>;
    onCheckPkgJSON: IEvent<{
      current: Record<string, any>;
      origin?: Record<string, any>;
    }>;
   
    onGenerateFiles: IEvent<IOnGenerateFiles>;
    onPatchRoute: IEvent<{
      route: IRoute;
    }>;
    onPkgJSONChanged: IEvent<{
      current: Record<string, any>;
      origin: Record<string, any>;
    }>;
    
    restartServer: () => void;
    writeTmpFile: (opts: {
      content?: string;
      context?: Record<string, any>;
      noPluginDir?: boolean;
      path: string;
      tpl?: string;
      tplPath?: string;
    }) => void;
  };
