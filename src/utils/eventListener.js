export const addEventListen = (() => {
  if(window.addEventListener){
    return (elem, type, fn, capture = false) => {
      elem.addEventListener(type, fn, capture);
    }
  }
  return (elem, type, fn) => {
    elem.attachEvent('on' + type, fn);
  }
})();

export const removeEventListen = (() => {
  if(window.addEventListener){
    return removeEventListen = (elem, type, fn) => {
      elem.removeEventListener(type, fn);
    }
  }
  return removeEventListen = (elem, type, fn) => {
    elem.detachEvent('on' + type, fn);
  }
})();
