<template>
  <canvas :class="$style['waterMark']" ref="canvas"></canvas>
</template>

<script>
import debounce from '@utils/debounce';
import loadWaterMark from '@method/loadWaterMark';
import initWaterMark from '@method/initWaterMark';
import getWidthAndHeight from '@utils/getWidthAndHeight';
import { canRedraw, drawCanvas, drawSvg } from '@utils/draw';
import { addEventListen } from '@utils/eventListener';

export default {
  name: 'WaterMark',
  data() {
    return {};
  },
  props: {
    login: {
      type: [String, Number, Array, Object],
      required: true
    },
    code: {
      type: [String, Number],
      default: ''
    }
  },
  beforeCreate: function() {
    this.ie = !!window['ActiveXObject'] || 'ActiveXObject' in window; // eslint-disable-line
    // ie11以下不兼容pointer-event,故使用svg
    this.draw = !!window['ActiveXObject'] ? drawSvg : drawCanvas;
  },
  created: function() {
    this.initWaterMark();
    this.loadWaterMark();
  },
  mounted: function() {
    const redraw = canRedraw.bind(this);

    addEventListen(
      'resize',
      debounce(() => {
        redraw() && this.waterMark();
      }, 200)
    );
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
    }
  }
};

</script>

<style lang="less" module scoped>
@import '~@styles/index.less';
</style>
