<template>
  <svg v-if="noie11" :class="$style['waterMark']" ref="canvas"></svg>
  <canvas v-else :class="$style['waterMark']" ref="canvas"></canvas>
</template>

<script>
// import debounce from '@utils/debounce';
import loadWaterMark from '@method/loadWaterMark';
import initWaterMark from '@method/initWaterMark';
import paramsFormat from '@method/paramsFormat';
import getWidthAndHeight from '@utils/getWidthAndHeight';
import { canRedraw, drawCanvas, drawSvg } from '@utils/draw';
// import { addEventListen } from '@utils/eventListener';

export default {
  name: 'WaterMark',
  data() {
    return {
      noie11: false
    };
  },
  props: {
    text: {
      type: [String, Number, Array, Object],
      required: true
    },
    zindex: {
      type: Number,
      default: 0
    },
    textstyle: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  beforeCreate: function() {
    // ie11以下不兼容pointer-event,故使用svg
    this.draw = !!window['ActiveXObject'] ? drawSvg : drawCanvas;
  },
  created: function() {
    let params = {};
    // data ie
    this.noie11 = !!window['ActiveXObject'];
    this.ie = !!window['ActiveXObject'] || 'ActiveXObject' in window; // eslint-disable-line
    params.text = this.text;
    this.zindex && (params.zIndex = this.zindex);
    this.options && (params.options = this.options);
    this.textstyle && (params.textStyle = this.textstyle);
    this.data = paramsFormat(params);
    this.noRender = !this.data.text;
    if (this.noRender) {
      this.mounted = () => {};
      return false;
    }
    this.initWaterMark();
    this.loadWaterMark();
  },
  mounted: function() {
    const redraw = canRedraw.bind(this);
    // 监听resize变化来重新渲染
    // addEventListen(
    //   'resize',
    //   debounce(() => {
    //     redraw() && this.waterMark();
    //   }, 200)
    // );
    // setInterval来监听页面宽高变化（暂时用来解决非resize的宽高变化）
    this.clearInterval();
    this.interval = setInterval(() => {
      redraw() && this.waterMark();
    }, 500);
  },
  beforeDestroy: function(){
    typeof this.clearInterval === 'function' && this.clearInterval();
  },
  methods: {
    loadWaterMark: loadWaterMark,
    initWaterMark: initWaterMark('waterMark'),
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
    },
    clearInterval() {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
};
</script>

<style lang="less" module scoped>
@import '~@styles/index.less';
</style>
