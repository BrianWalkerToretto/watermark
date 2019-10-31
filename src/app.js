import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Index from '.';

const render = (() => {
  const root = document.querySelector('#root');
  const renderFn = root.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

  return Component => {
    renderFn(
      <AppContainer>
        <Component login="testUserName" code="1234567890"/>
      </AppContainer>,
      root,
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
