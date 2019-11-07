import requestAnimFrame from '@utils/requestAnimFrame';
import { getDevicePixelRatio } from '@utils/devicePixelRatio';

export default function initWaterMark(renderName) {
  return function() {
    this.can = (this.canvas && this.canvas.current) || (this.$refs && this.$refs.canvas);
    if(this.canvas && this.canvas.tagName === 'CANVAS'){
      this.can = this.canvas;
    }
    if (!this.can) {
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
    typeof this[renderName] === 'function' && this[renderName]();
  };
}
