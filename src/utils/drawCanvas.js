export default function drawCanvas() {
  const {
    ctx,
    data: { text, textStyle, options }
  } = this;
  this.can.width = this.width * this.ratio;
  this.can.height = this.height * this.ratio;
  // this.can.style = `width: ${this.width}px;height: ${this.height}px;`;
  // strict 模式下不允许分配到只读属性
  // ie浏览器的滚动栏占用8px
  this.can.setAttribute(
    'style',
    `width: ${
      this.width - (this.ie ? 8 : 0)
    }px;height: ${
      this.height - (this.ie ? 8 : 0)
    }px;pointer-events: none !important;display: block !important;`
  );
  !!(''+options.zIndex) && (this.can.style.zIndex = options.zIndex);
  ctx.beginPath();

  // 背景颜色
  ctx.fillStyle = textStyle.background;
  ctx.font = `${textStyle.fontWeight} ${textStyle.fontSize} ${textStyle.font}`; //'200 14px 微软雅黑';
  ctx.textAlign = textStyle.textAlign;

  ctx.globalAlpha = options.alpha || 0.8;
  ctx.textBaseline = 'middle';

  ctx.globalCompositeOperation = 'none';
  ctx.fillRect(0, 0, this.width * this.ratio, this.height * this.ratio);
  // 字体颜色：fillRect之前为设置背景颜色
  ctx.fillStyle = textStyle.color;
  ctx.scale(this.ratio, this.ratio);

  let row = (this.height / this.h) | (0 + 1);
  let col = (this.width / this.w) | (0 + 1);
  if (options.rows) {
    row = options.rows * this.ratio;
    this.h = this.height / row;
  }
  if (options.cols) {
    col = options.cols * this.ratio;
    this.w = this.width / col;
  }

  const offset = parseFloat(textStyle.fontSize) * textStyle.lineHeight;
  const stratYOffset = this.h / 2 - (offset * text.length) / 2 + offset / 2;

  for (let i = 0; i < col; i += 2) {
    for (let j = 0; j < row; j += 2) {
      ctx.save();
      ctx.translate(options.x + this.w * i, options.y + this.h * j);
      ctx.rotate((options.angle * Math.PI) / 180);
      for (let t = 0; t < text.length; t++) {
        ctx.fillText(text[t], this.w / 2, stratYOffset + offset * t);
      }
      // !i && !j && ctx.fillRect(0,0,this.w,this.h)
      ctx.restore();
    }
  }
}
