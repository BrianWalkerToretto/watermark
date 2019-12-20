import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Vue from 'vue';
// components
import Index, { VueWaterMark, NativeWaterMark } from '.';
// 注册组件库
Vue.config.productionTip = false;
// window['ActiveXObject']=true
new Vue({
  el: '#app',
  // render: h => h(VueWaterMark),
  components: { VueWaterMark },
  data() {
    return {
      value: true,
      options: {
        angle: -15
      },
      textStyle: {
        textAlign: 'center'
      },
      text: ['testUserName', '1234567890']
    };
  }
});
NativeWaterMark(document.body, {
  text: ['testUserName', '1234567890']
});
const render = (() => {
  const root = document.querySelector('#root');
  const renderFn = root.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

  return Component => {
    renderFn(
      <AppContainer>
        <Component
          text={['testUserName', '1234567890']}
          textStyle={{ color: 'red' }}
        />
      </AppContainer>,
      root
    );
  };
})();

render(Index);
if (module.hot) {
  module.hot.accept('.', () => {
    const NextApp = require('.').default;

    render(NextApp);
  });
}
// new Promise((resolve, reject)=>{
//   setTimeout(() => {
//     resolve(true);
//   }, 1000);
// }).then(res => {
//   // const a = 15n;
//   const a= '  12 3   '
//   console.log('promise', res,`a${a}a`, `a${a.trimRight()}a`);
//   // document.getElementById('root').innerHTML = '12334e12';
//   ReactDOM.render(<Test />, document.getElementById('root'));
// });
