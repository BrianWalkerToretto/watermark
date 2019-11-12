export default function drawSvg() {
  const {
    can,
    data: { text, textStyle, options }
  } = this;
  // 获取svg 如果该svg不存在，则创建svg 并且设置style
  let svg = can;
  let isCreateSvg = false;
  if (!svg || svg.tagName.toLowerCase() !== 'svg') {
    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('id', 'svgWaterMark');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('version', '1.1');
    isCreateSvg = true;
  }
  svg.setAttribute(
    'style',
    `z-index:200;
    font-weight:${textStyle.fontWeight};font-size:${
      textStyle.fontSize
    };font-family:${textStyle.font};
    background:${textStyle.background};
    text-align:${textStyle.textAlign};vertical-align:middle;
    opacity:${options.alpha || 0.8};
    width:${this.width - (this.ie ? 8 : 0)}px;
    height:${this.height - (this.ie ? 8 : 0)}px;`
  );

  // col row
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
  // fragment
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < col; i += 2) {
    for (let j = 0; j < row; j += 2) {
      const x = options.x + this.w * i;
      const y = options.y + this.h * j;
      // 创建svg文本
      const svgText = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'text'
      );
      svgText.setAttribute('transform', `rotate(${options.angle} ${x},${y})`); // options.angle
      for (let t = 0; t < text.length; t++) {
        // 创建svg文本的内容
        const svgTspan = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'tspan'
        );
        svgTspan.textContent = text[t];
        svgTspan.setAttribute('x', x + this.w / 2);
        svgTspan.setAttribute('y', y + stratYOffset + offset * t);
        // append
        svgText.appendChild(svgTspan);
      }
      fragment.appendChild(svgText);
    }
  }
  svg.setAttribute('fill', textStyle.color);
  svg.innerHTML = '';
  svg.appendChild(fragment);
  if (isCreateSvg) {
    document.body.appendChild(svg);
  }
}
