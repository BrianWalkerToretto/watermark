// import debounce from '@utils/debounce';
import loadWaterMark from '@method/loadWaterMark';
import initWaterMark from '@method/initWaterMark';
import paramsFormat from '@method/paramsFormat';
import Monitor from '@method/MutationObserver';
import getWidthAndHeight from '@utils/getWidthAndHeight';
import { canRedraw, drawCanvas, drawSvg, drawShadow } from '@utils/draw';
// import { addEventListen } from '@utils/eventListener';

const isSvg = !!window['ActiveXObject'];

function NativeWaterMark(container, props = {}) {
  if (arguments.length === 0) {
    throw new Error('参数错误');
  }
  if (this instanceof NativeWaterMark) {
    return this.init(container, props);
  }
  if(arguments.length === 1){
    if(Object.prototype.toString.call(container) === '[object Object]'){
      return new NativeWaterMark(document.body, container);
    }
    throw new Error('参数错误');
  }
  if(Object.prototype.toString.call(container) === '[object Object]'){
    return new NativeWaterMark(document.body, container);
  }
  return new NativeWaterMark(container && typeof container.appendChild === 'function' ? container : document.body, props);
}

NativeWaterMark.prototype = {
  constructor: NativeWaterMark,
  environment: 'native',
  initWaterMark: initWaterMark('waterMark'),
  init: function(container, props) {
    this.data = paramsFormat(props);
    this.noRender = !this.data.text;
    // drawShadow
    this.isShadowDom = drawShadow.isShadowDom;
    this.randomId = drawShadow.randomId();
    if(this.isShadowDom){
      const div = document.createElement('div');
      div.id = this.randomId;
      div.style = 'pointer-events: none !important; display: block !important;';
      this.shadowDom = {
        current: div
      };
      drawShadow.renderShadow.call(this);
    }else{
      this.shadowDom = { current: null };
    }
    if (this.noRender) {
      return false;
    }
    this.ie = isSvg || 'ActiveXObject' in window;
    // ie11以下不兼容pointer-event,故使用svg
    this.draw = isSvg ? drawSvg : drawCanvas;
    container.appendChild(this.isShadowDom ? this.shadowDom.current : drawShadow.renderShadow.call(this));
    this.Monitor = Monitor.bind(this, drawShadow),
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
    this.Monitor();
    // 更新屏幕宽高
    const { width, height } = getWidthAndHeight();
    this.width = width;
    this.height = height;
    this.draw();
  }
};

export { NativeWaterMark };
export default NativeWaterMark;
