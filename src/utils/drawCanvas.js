export default function drawCanvas() {
  const { ctx } = this;
  this.can.width = this.width * this.ratio;
      this.can.height = this.height * this.ratio;
      // this.can.style = `width: ${this.width}px;height: ${this.height}px;`;
      // strict 模式下不允许分配到只读属性
      this.can.style.width = `${this.width - (this.ie ? 8 : 0)}px`;
      this.can.style.height = `${this.height - (this.ie ? 8 : 0)}px`;
      ctx.beginPath();
      ctx.fillStyle = 'transparent';
      ctx.font = '200 14px 微软雅黑';
      ctx.textAlign = 'center';
      ctx.globalAlpha = 0.8;
      ctx.textBaseline = 'middle';
      // ctx.globalCompositeOperation = 'none'
      ctx.fillRect(0, 0, this.width, this.height);
      ctx.fillStyle = '#ccc';
      ctx.scale(this.ratio, this.ratio);

  const col = this.width / this.w | 0 + 1;
  const row = this.height / this.h | 0 + 1;
  const misId = this.login || '';
  const id = this.code || '';

  for (let i = 0; i < col; i += 2){
    for (let j = 0; j < row; j += 2){
      ctx.save();
      ctx.translate(this.w * i, this.h * j);
      ctx.rotate(-15 * Math.PI / 180);
      ctx.fillText(misId, this.w / 2, 36);
      ctx.fillText(id, this.w / 2, 54);
      ctx.restore();
    }
  }
}
