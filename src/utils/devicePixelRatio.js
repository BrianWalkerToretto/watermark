/** 方法说明
 *  @method getDevicePixelRatio
 *  @description 获取屏幕比
 *  @param {Canvas.getContext('2d')} [context={}] 回调函数
 *  @return {Number} 比值
 */

export const getDevicePixelRatio = (context = {}) => {
  // 屏幕的设备像素比
  const devicePixelRatio = window.devicePixelRatio || 1;
  // 浏览器在渲染canvas之前存储画布信息的像素比
  const backingStoreRatio =
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
  // canvas的实际渲染倍率
  return devicePixelRatio / backingStoreRatio;
};
