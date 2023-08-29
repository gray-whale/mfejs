/**
 * 是否为Promise
 * @param obj 
 * @returns 
 */
export function isPromise(obj: any) {
  return (
    (typeof obj === 'object' || typeof obj === 'function') &&
    typeof obj.then === 'function'
  );
}

/**
 * 确保参数为Array类型
 * @param item 
 * @returns 
 */
export function makeArray(item: any) {
  return Array.isArray(item) ? item : [item];
}
