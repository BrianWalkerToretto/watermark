// 导入组件，组件必须声明 name
import VueWaterMark from './watermark';

// 为组件提供 install 安装方法，供按需引入
VueWaterMark.install = function(Vue) {
  Vue.component(VueWaterMark.name, VueWaterMark);
};
const install = (component => {
  return function(Vue, opts = {}) {
    Vue.component(component.name, component);
  };
})(VueWaterMark);

// 支持使用标签的方式引入
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
// 默认导出组件
export default VueWaterMark;

export { install, VueWaterMark };
