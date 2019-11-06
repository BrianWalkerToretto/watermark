import debounce from '@utils/debounce';
import requestAnimFrame from '@utils/requestAnimFrame';
import { canRedraw, drawCanvas, drawSvg } from '@utils/draw';
import { getDevicePixelRatio } from '@utils/devicePixelRatio';
import { addEventListen, DOMContentLoaded } from '@utils/eventListener';
import style from '@styles';

function NativeWaterMark(props = {}){
  if(!props || typeof props !== 'object'){
    return console.warn('error');
  }
  if(this instanceof NativeWaterMark){
    return this.init(props);
  }
  return new NativeWaterMark(props);
}
NativeWaterMark.prototype = {
  constructor: NativeWaterMark,
  canvas: document.createElement('canvas'),
  init: function(props){
    document.body.appendChild(this.canvas);
    this.login = props.login;
    this.code = props.code;
    this.ie = !!window['ActiveXObject'] || 'ActiveXObject' in window;
    // ie11以下不兼容pointer-event,故使用svg
    this.draw = !!window['ActiveXObject'] ? drawSvg : drawCanvas;
    this.canvas.className = style.waterMark;
    this.initWaterMark();
    this.loadWaterMark();
  },
  initWaterMark() {
    this.can = this.canvas;
    if (!this.can){
      return requestAnimFrame(() => {
        this.initWaterMark();
      });
    }
    if (this.ctx) return;
    this.ctx = this.can.getContext('2d'); // eslint-disable-line
    this.ratio = getDevicePixelRatio(this.ctx);
    // 每个小块的宽高
    this.w = 100;
    this.h = 80;
    this.waterMark();
  },
  loadWaterMark() {
    let isLoad = true;
    DOMContentLoaded(() => {
      isLoad && this.waterMark()
      isLoad = null;
    });
    addEventListen('load', () => {
      isLoad && this.waterMark();
      isLoad = null;
    });

    const redraw = canRedraw.bind(this);
    addEventListen('resize', debounce(() => {
      redraw() && this.waterMark();
    }, 200))
  },
  waterMark() {
    if (!this.can){
      this.initWaterMark();
      return false;
    }
    // 更新屏幕宽高
    this.width = window.innerWidth || document.documentElement.clientWidth || document.documentElement.offsetHeight || document.body.clientWidth;
    this.height = window.innerHeight || document.documentElement.clientWidth || document.documentElement.offsetHeight || document.body.clientHeight;
    this.draw();
  }
}

export default NativeWaterMark;
