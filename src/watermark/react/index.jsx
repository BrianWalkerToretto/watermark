import React from 'react';
import debounce from '@utils/debounce';
import loadWaterMark from '@method/loadWaterMark';
import initWaterMark from '@method/initWaterMark';
import getWidthAndHeight from '@utils/getWidthAndHeight';
import { canRedraw, drawCanvas, drawSvg } from '@utils/draw';
import { addEventListen } from '@utils/eventListener';
import style from '@styles';

/**
 * pages.github.com
 * {
 *  container: dom/selector
 *  text: string/number,[],{}
 *  style: {
 *
 *  }
 *  options = {
 *    x: 20, // 水印起始位置x轴坐标
      y: 20, // 水印起始位置Y轴坐标
      rows: 200, // 水印行数
      cols: 200, // 水印列数
      color: '#000000', // 水印字体颜色
      alpha: 0.005, // 水印透明度
      fontsize: '12px', // 水印字体大小
      font: '微软雅黑', // 水印字体
      width: 200, // 水印宽度
      height: 30, // 水印高度
      angle: 25 // 水印倾斜度数
 *  }
 * }
 */
export default class WaterMark extends React.PureComponent {
  loadWaterMark = loadWaterMark;
  initWaterMark = initWaterMark('waterMark');
  constructor(props) {
    super(props);
    this.login = props.login;
    this.code = props.code;

    this.canvas = React.createRef();
    /**
     * 注意：只有ie支持ActiveXObject，但是在ie11中window.ActiveXObject 和 typeof ActiveXObject的值为undefined，只能通过"ActiveXObject" in window来判断浏览器为ie
     * 但是可以通过这个特性来区分ie11和其他ie浏览器
     **/
    this.ie = !!window['ActiveXObject'] || 'ActiveXObject' in window; // eslint-disable-line
    // ie11以下不兼容pointer-event,故使用svg
    this.draw = window['ActiveXObject'] ? drawSvg : drawCanvas;
    this.initWaterMark();
    this.loadWaterMark();
  }

  render() {
    return <canvas className={style.waterMark} ref={this.canvas}></canvas>;
  }

  componentDidMount() {
    const redraw = canRedraw.bind(this);

    addEventListen(
      'resize',
      debounce(() => {
        redraw() && this.waterMark();
      }, 200)
    );
  }

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
}
