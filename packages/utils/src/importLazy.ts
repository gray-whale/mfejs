/**
 * ref:
 * 1. https://rushstack.io/pages/api/node-core-library.import.lazy/
 * 2. https://github.com/microsoft/rushstack/blob/90301e9/libraries/node-core-library/src/Import.ts#L175
 */

/**
 * import-lazy 是一个轻量级的 npm 包，用于按需引入外部库或模块的部分功能。通过使用 import-lazy，我们可以延迟加载模块，从而提高应用程序的性能。
 * npm 包 import-lazy 使用教程：http://www.javascriptcn.com/post/51332
 * npm地址：https://www.npmjs.com/package/import-lazy
 */
import importLazyInternal from 'import-lazy';

export function importLazy(
  moduleName: string,
  requireFn?: (id: string) => unknown,
): any {
  const importLazyLocal: (moduleName: string) => unknown = importLazyInternal(
    requireFn || require,
  );
  return importLazyLocal(moduleName);
}
