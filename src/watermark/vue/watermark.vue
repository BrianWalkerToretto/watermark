<template>
  <div>
  <canvas :class="$style['waterMark']" ref="canvas"/>
  <h1>{{code}}</h1>
  </div>
</template>

<script>
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
  computed: {
    // checked() {
    //   return this.value === this.activeValue;
    // }
  },
  created: function(){
    console.log(this)
  },
  methods: {
    handleChange(value) {
      // this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue)
    }
  }
}
</script>

<style lang="less" module scoped>
@import "~@styles/index.less";
</style>
