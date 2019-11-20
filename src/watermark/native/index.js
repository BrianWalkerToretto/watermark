// import debounce from '@utils/debounce';
import loadWaterMark from '@method/loadWaterMark';
import initWaterMark from '@method/initWaterMark';
import paramsFormat from '@method/paramsFormat';
import getWidthAndHeight from '@utils/getWidthAndHeight';
import { canRedraw, drawCanvas, drawSvg } from '@utils/draw';
// import { addEventListen } from '@utils/eventListener';
import style from '@styles';

function NativeWaterMark(container, props = {}) {
  if (!props || typeof props !== 'object') {
    return console.warn('error');
  }
  if (this instanceof NativeWaterMark) {
    return this.init(container, props);
  }
  if(!container || typeof container.appendChild !== 'function'){
    return new NativeWaterMark(document.body, props);
  }
  if(Object.prototype.toString.call(container) === '[object Object]'){
    return new NativeWaterMark(document.body, container);
  }
  return new NativeWaterMark(container, props);
}

NativeWaterMark.prototype = {
  constructor: NativeWaterMark,
  canvas: document.createElement('canvas'),
  initWaterMark: initWaterMark('waterMark'),
  init: function(container, props) {
    this.canvas.className = style.waterMark;
    !window['ActiveXObject'] && document.body.appendChild(this.canvas);
    this.data = paramsFormat(props);
    if(container && container.appendChild){
      this.data.container = container;
    }
    this.noRender = !this.data.text;
    if (this.noRender) {
      return false;
    }
    this.ie = !!window['ActiveXObject'] || 'ActiveXObject' in window;
    // ie11以下不兼容pointer-event,故使用svg
    this.draw = window['ActiveXObject'] ? drawSvg : drawCanvas;

    this.initWaterMark();
    this.loadWaterMark();
  },
  loadWaterMark() {
    loadWaterMark.bind(this);

    const redraw = canRedraw.bind(this);

    // 监听resize变化来重新渲染
    // addEventListen(
    //   'resize',
    //   debounce(() => {
    //     redraw() && this.waterMark();
    //   }, 200)
    // );
    // setInterval来监听页面宽高变化（暂时用来解决非resize的宽高变化）
    this.clearInterval();
    this.interval = setInterval(() => {
      redraw() && this.waterMark();
    }, 500);
  },
  clearInterval() {
    clearInterval(this.interval);
    this.interval = null;
  },
  waterMark() {
    if (!this.can) {
      this.initWaterMark();
      return false;
    }
    // 更新屏幕宽高
    const { width, height } = getWidthAndHeight();
    this.width = width;
    this.height = height;
    this.draw();
  }
};

export { NativeWaterMark };
export default NativeWaterMark;
