/** 方法说明
 *  @method debounce
 *  @description 防抖函数
 *  @param {Number} [func=console.log] 回调函数
 *  @param {Number} [wait = 50] 等待事件
 *  @return {void}
*/

export default function debounce (func = console.log, wait = 500) {
  let lastTime = null;

  return function(){
    if(lastTime !== null) clearTimeout(lastTime);
    lastTime = setTimeout(func, wait);

    // const now = Date.now();
    // if (now - lastTime >= wait) {
    //   func()
    //   lastTime = now;
    // }
  }
}
