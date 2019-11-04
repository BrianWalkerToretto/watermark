export default function drawSvg() {
  // 数据
  const col = this.width / this.w | 0 + 1;
  const row = this.height / this.h | 0 + 1;
  const misId = this.login || '';
  const id = this.code || '';
  // 获取svg 如果该svg不存在，则创建svg 并且设置style
  let svg = document.querySelector('#svgWaterMark');

  if (!svg){
    svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('id', 'svgWaterMark');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('version', '1.1');
  }
  svg.setAttribute('style', `pointer-events:none;position:absolute;top:0;left:0;right:0;bottom:0;z-index:200;font-weight:200;height:${this.height}px;width:100%;`);

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < col; i += 2){
    for (let j = 0; j < row; j += 2){
      const x = String(this.w * i);
      const y = this.h * j;
      // 创建svg文本
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

      text.setAttribute('x', x);
      text.setAttribute('y', String(y + 40));
      text.setAttribute('transform', `rotate(-15 ${x},${y})`);
      text.setAttribute('fill', '#ccc');
      // 创建svg文本的内容
      const misIdText = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');

      misIdText.textContent = misId;
      const idText = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');

      idText.textContent = id;
      idText.setAttribute('x', x);
      idText.setAttribute('y', String(y + 60));
      // append
      text.appendChild(misIdText);
      text.appendChild(idText);
      fragment.appendChild(text);
    }
  }

  svg.innerHTML = '';
  svg.appendChild(fragment);
  document.body.appendChild(svg);
}
