import defaultProps from '@config/defaultProps';
import textFormat from '@method/format';

function copy(p) {
  let target = {};
  for (let i in p) {
    target[i] = p[i];
  }
  return target;
}

export default function paramsFormat(props) {
  if (Object.prototype.toString.call(props) !== '[object Object]') {
    console.warn('参数错误');
    return defaultProps;
  }
  const { text, length } = textFormat(props.text);
  const params = {
    text,
    length
  };
  params.textStyle = Object.assign(
    copy(defaultProps.textStyle),
    props.textStyle
  );
  params.options = Object.assign(copy(defaultProps.options), props.options);
  const textAlign = {
    left: 'right',
    right: 'left',
    center: 'center'
  };
  params.textStyle.textAlign =
    textAlign[params.textStyle.textAlign] || textAlign['center'];

  return params;
}
