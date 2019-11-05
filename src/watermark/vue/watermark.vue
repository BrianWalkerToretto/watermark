<template>
  <canvas :class="$style['waterMark']" ref="canvas"></canvas>
</template>

<script>
import debounce from '@utils/debounce';
import { canRedraw, drawCanvas, drawSvg } from '@utils/draw';
import { getDevicePixelRatio } from '@utils/devicePixelRatio';
import { addEventListen, DOMContentLoaded } from '@utils/eventListener';

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback){
  window.setTimeout(callback, 1000 / 60);
};

export default {
  name: 'WaterMark',
  data() {
    return {}
  },
  props: {
    login: {
      type: [String, Number, Array, Object],
      required: true
    },
    code: {
      type: [String, Number],
      default: '',
    },
  },
  beforeCreate: function(){
    this.ie = !!window['ActiveXObject'] || 'ActiveXObject' in window; // eslint-disable-line
    // ie11以下不兼容pointer-event,故使用svg
    this.draw = !!window['ActiveXObject'] ? drawSvg : drawCanvas;
  },
  created: function(){
    let isLoad = true;
    DOMContentLoaded(() => {
      isLoad && this.waterMark()
      isLoad = null;
    });
    addEventListen('load', () => {
      isLoad && this.waterMark();
      isLoad = null;
    });
  },
  mounted: function(){
    const redraw = canRedraw.bind(this);

    // this.waterMark();
    addEventListen('resize', debounce(() => {
      redraw() && this.waterMark();
    }, 200))
  },
  methods: {
    initWaterMark() {
      this.can = this.$refs.canvas; // this.$el; $el = name
      if(!this.can){
        return requestAnimationFrame(() => {
          this.initWaterMark();
        });
      }
      if (this.ctx) return;
      this.ctx = this.can.getContext('2d'); // eslint-disable-line
      this.ratio = getDevicePixelRatio(this.ctx);
      // 每个小块的宽高
      this.w = 100;
      this.h = 80;
      this.waterMark();
    },
    waterMark() {
      if (!this.can){
        this.initWaterMark();
        return false;
      }
      // 更新屏幕宽高
      this.width = window.innerWidth || document.documentElement.clientWidth || document.documentElement.offsetHeight || document.body.clientWidth;
      this.height = window.innerHeight || document.documentElement.clientWidth || document.documentElement.offsetHeight || document.body.clientHeight;
      this.draw();
    },
  }
}
</script>

<style lang="less" module scoped>
@import "~@styles/index.less";
</style>
