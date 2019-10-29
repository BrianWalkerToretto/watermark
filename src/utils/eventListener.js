export const addEventListen = (() => {
  if(window.addEventListener){
    return addEventListen = (elem, type, fn, capture) => {
      elem.addEventListen(type, fn, capture);
    }
  }
  return addEventListen = (elem, type, fn) => {
    elem.attachEvent('on' + type, fn);
  }
})();

export const removeEventListen = (() => {
  if(window.addEventListener){
    return removeEventListen = (elem, type, fn, capture) => {
      elem.removeEventListener(type, fn, capture);
    }
  }
  return removeEventListen = (elem, type, fn) => {
    elem.detachEvent('on' + type, fn);
  }
})();
