import React from 'react';
// import debounce from '@utils/debounce';
import loadWaterMark from '@method/loadWaterMark';
import initWaterMark from '@method/initWaterMark';
import paramsFormat from '@method/paramsFormat';
import getWidthAndHeight from '@utils/getWidthAndHeight';
import { canRedraw, drawCanvas, drawSvg } from '@utils/draw';
// import { addEventListen } from '@utils/eventListener';
import style from '@styles';
// 保证script的native使用
export default class WaterMark extends (typeof React === 'object'
  ? React.PureComponent
  : Object) {
  loadWaterMark = loadWaterMark;
  initWaterMark = initWaterMark('waterMark');
  constructor(props) {
    super(props);
    this.data = paramsFormat(props);
    this.noRender = !this.data.text;
    if (this.noRender) {
      this.componentDidMount = () => {};
      this.render = () => null;
      return false;
    }

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
    if (window['ActiveXObject']) {
      return <svg className={style.waterMark} ref={this.canvas}></svg>;
    }
    return <canvas className={style.waterMark} ref={this.canvas}></canvas>;
  }

  componentDidMount() {
    const redraw = canRedraw.bind(this);
    // 监听resize变化来重新渲染
    // addEventListen(
    //   'resize',
    //   debounce(() => {
    //     redraw() && this.waterMark();
    //   }, 200)
    // );
    // setInterval来监听页面宽高变化（暂时用来解决非resize的宽高变化）
    this.componentWillUnmount();
    this.interval = setInterval(() => {
      redraw() && this.waterMark();
    }, 500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
    this.interval = null;
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
