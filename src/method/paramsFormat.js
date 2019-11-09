import defaultProps from '@config/defaultProps';
import textFormat from '@method/format';

export default function paramsFormat(props) {
  if (Object.prototype.toString.call(props) !== '[object Object]') {
    console.warn('参数错误');
    return defaultProps;
  }
  const { text, length } = textFormat(props.text);
  const params = Object.assign({}, defaultProps, props, {
    text,
    length
  });
  const textAlign = {
    left: 'right',
    right: 'left',
    center: 'center'
  };
  params.textStyle.textAlign = textAlign[params.textStyle.textAlign] || params.textStyle.textAlign;

  return params;
}
