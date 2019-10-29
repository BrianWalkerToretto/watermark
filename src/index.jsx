import React from 'react';
import style from './index.less';

export default class WaterMark extends React.Component {
  constructor(props){
    super(props);
    this.ratio = 1;
    this.userInfo = {
      login: 'ads',
      code: 1231
    };
    this.canvas = React.createRef();
    const scope = 50;
    /**
     * 注意：只有ie支持ActiveXObject，但是在ie11中window.ActiveXObject 和 typeof ActiveXObject的值为undefined，只能通过"ActiveXObject" in window来判断浏览器为ie
     * 但是可以通过这个特性来区分ie11和其他ie浏览器
     *  */

    this.ie = !!window['ActiveXObject']; // eslint-disable-line
    // window.addEventListener('DOMContentLoaded', () => {

    this.waterMark();
    const waterMark = () => {
      const width = window.innerWidth || document.documentElement.clientWidth || document.documentElement.offsetHeight || document.body.clientWidth;
      const height = window.innerHeight || document.documentElement.clientWidth || document.documentElement.offsetHeight || document.body.clientHeight ;
      const isWidthChange = this.width > width + scope || this.width < width - scope;
      const isHeightChange = this.height > height + scope || this.height < height - scope;

      if (isWidthChange || isHeightChange){
        this.waterMark();
      }
      setTimeout(waterMark, 500);
    };

    setTimeout(waterMark, 500);
    // }, false);
  }

  render() {
    return <canvas className={style.waterMark} ref={this.canvas}></canvas>;
  }

  componentDidMount(){
    this.waterMark();
  }

  waterMark() {
    this.can = this.canvas.current;
    if (!this.can){
      return false;
    }
    const ctx = this.ctx = this.can.getContext('2d'); // eslint-disable-line
    // 屏幕宽高
    this.width = window.innerWidth || document.documentElement.clientWidth || document.documentElement.offsetHeight || document.body.clientWidth;
    this.height = window.innerHeight || document.documentElement.clientWidth || document.documentElement.offsetHeight || document.body.clientHeight ;
    // 每个小块的宽高
    this.w = 100;
    this.h = 80;
    if (this.ie){
      this.drawSvg();

      return false;
    }
    this.ratio = this.getRatio();
    this.can.width = this.width * this.ratio;
    this.can.height = this.height * this.ratio;
    this.can.style.width = this.width + 'px';
    this.can.style.height = this.height + 'px';
    ctx.beginPath();
    ctx.fillStyle = 'transparent';
    ctx.font = '200 14px 微软雅黑';
    ctx.textAlign = 'center';
    ctx.globalAlpha = 0.8;
    ctx.textBaseline = 'middle';
    ctx.fillRect(0, 0, this.width, this.height);
    ctx.fillStyle = '#ccc';
    ctx.scale(this.ratio, this.ratio);
    this.draw();
  }

  draw() {
    const { ctx } = this;
    const col = this.width / this.w | 0 + 1;
    const row = this.height / this.h | 0 + 1;
    const misId = this.userInfo.login || this.userInfo.misId || '';
    const id = this.userInfo.code || this.userInfo.id || '';

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
  drawSvg() {
    // 数据
    const col = this.width / this.w | 0 + 1;
    const row = this.height / this.h | 0 + 1;
    const misId = this.userInfo.login || this.userInfo.misId || '';
    const id = this.userInfo.code || this.userInfo.id || '';
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
  getRatio() {
    const { ctx } = this;
    // 屏幕的设备像素比
    const devicePixelRatio = window.devicePixelRatio || 1;
    // 浏览器在渲染canvas之前存储画布信息的像素比
    const backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
    // canvas的实际渲染倍率

    return devicePixelRatio / backingStoreRatio;
  }
}
