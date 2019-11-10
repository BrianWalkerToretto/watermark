import debounce from '@utils/debounce';
import loadWaterMark from '@method/loadWaterMark';
import initWaterMark from '@method/initWaterMark';
import paramsFormat from '@method/paramsFormat';
import getWidthAndHeight from '@utils/getWidthAndHeight';
import { canRedraw, drawCanvas, drawSvg } from '@utils/draw';
import { addEventListen } from '@utils/eventListener';
import style from '@styles';

function NativeWaterMark(props = {}) {
  if (!props || typeof props !== 'object') {
    return console.warn('error');
  }
  if (this instanceof NativeWaterMark) {
    return this.init(props);
  }
  return new NativeWaterMark(props);
}

NativeWaterMark.prototype = {
  constructor: NativeWaterMark,
  canvas: document.createElement('canvas'),
  initWaterMark: initWaterMark('waterMark'),
  init: function(props) {
    this.canvas.className = style.waterMark;
    document.body.appendChild(this.canvas);
    this.data = paramsFormat(props);
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

    addEventListen(
      'resize',
      debounce(() => {
        redraw() && this.waterMark();
      }, 200)
    );
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

export {
  NativeWaterMark
}
export default NativeWaterMark;
