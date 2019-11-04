function bindEvent(elem, event, type, fn, capture){
  return elem[event](type, fn, capture);
}

/** 方法说明
 *  @method addEventListen
 *  @description 事件添加
*/
export const addEventListen = (() => {
  if(window.addEventListener){
    return (elem, type, fn, capture = false) => {
      const isElem = !!(elem && elem.addEventListener);

      bindEvent(isElem ? elem : window, 'addEventListener', isElem ? type : elem, isElem ? fn : type, capture);
    }
  }
  return (elem, type, fn) => {
    const isElem = !!(elem && elem.attachEvent);

    bindEvent(isElem ? elem : window, 'attachEvent', 'on' + isElem ? type : elem, isElem ? fn : type);
  }
})();

/** 方法说明
 *  @method removeEventListen
 *  @description 事件移除
*/
export const removeEventListen = (() => {
  if(window.removeEventListener){
    return (elem, type, fn) => {
      const isElem = !!(elem && elem.removeEventListener);

      bindEvent(isElem ? elem : window, 'removeEventListener', isElem ? type : elem, isElem ? fn : type);
    }
  }
  return (elem, type, fn) => {
    const isElem = !!(elem && elem.detachEvent);

    bindEvent(isElem ? elem : window, 'detachEvent', 'on' + isElem ? type : elem, isElem ? fn : type);
  }
})();

/** 方法说明
 *  @method DOMContentLoaded
 *  @description 监听DOMContentLoaded事件
*/
export const DOMContentLoaded = callback => {
  let fn;
  if(window.addEventListener){
    fn = function() {
      callback && callback();
      removeEventListen('DOMContentLoaded', fn);
    }
    addEventListen('DOMContentLoaded', callback, false);
  }else{ // ie8及以下不支持readystatechange
    fn = function(){
      /* dom加载完成的时候 */
      if(document.readyState=='complete'){
        callback && callback();
        removeEventListen('readystatechange', fn );
      }
    }
    addEventListen('readystatechange', fn);
  }
}
