import requestAnimFrame from '@utils/requestAnimFrame';
import { getDevicePixelRatio } from '@utils/devicePixelRatio';

export default function initWaterMark(renderName) {
  return function() {
    this.can = (this.canvas && this.canvas.current) || (this.$refs && this.$refs.canvas);
    if (this.canvas && this.canvas.tagName && ['canvas', 'svg'].includes(this.canvas.tagName.toLowerCase())) {
      this.can = this.canvas;
    }
    if (!this.can) {
      return requestAnimFrame(() => {
        this.initWaterMark();
      });
    }
    if (this.ctx) return;
    this.ctx = !!window['ActiveXObject'] ? this.can : this.can.getContext('2d'); // eslint-disable-line
    this.ratio = getDevicePixelRatio(this.ctx);

    // length
    const {
      length,
      text,
      textStyle: { fontSize, lineHeight }
    } = this.data;
    const size = parseFloat(fontSize);
    // 每个小块的宽高
    this.w = length * size;
    this.h = (text.length + 2) * size * lineHeight; // 上（空白）；中（文字）；下（空白）

    typeof this[renderName] === 'function' && this[renderName]();
  };
}
