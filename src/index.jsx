import React from 'react';
import style from './index.less';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className={style.app}>Hello World</div>;
  }
}
