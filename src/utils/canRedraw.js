import getWidthAndHeight from '@utils/getWidthAndHeight';
/** 方法说明
 *  @method redraw
 *  @description 判断是否重绘
 *  @param {Number} [scope = 50] height变化阈值
 *  @return {Boolean} 是否重绘
 */

export default function canRedraw(scope = 50) {
  const { width, height } = getWidthAndHeight();
  // 宽度变化立刻响应
  const isWidthChange = this.width !== width; // this.width > width + scope || this.width < width - scope;
  const isHeightChange =
    this.height > height + scope || this.height < height - scope;
  console.log(isWidthChange || isHeightChange);
  return isWidthChange || isHeightChange;
  // if (isWidthChange || isHeightChange){
  //   return true;
  // }
  // return false;
}
