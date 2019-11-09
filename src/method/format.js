export function getStringLength(str) {
  let realLength = 0;
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) {
      // 数字 英文 等等
      realLength += 0.7;
    } else {
      // 中文等等
      realLength += 1;
    }
  }

  return realLength;
}

export const getForamt = (data = { length: 0 }) => {
  return value => {
    let val = '';

    if (value === null) {
      val = 'null';
    } else if (value === undefined) {
      val = 'undefined';
    } else {
      val = value.toString();
    }
    const realLength = getStringLength(val);
    data.length < realLength && (data.length = realLength);
    return val;
  };
};

export default function textFormat(param) {
  // 排除：undefined，null，空字符串
  if (!param && !(param === 0 || param === false)) {
    let length = { length: 0 };
    const text = getForamt(length)(param);

    return {
      text: [text],
      length: (text.length / 2) | (0 + 1)
    };
  }
  if (
    Array.isArray(param) ||
    Object.prototype.toString.call(param) === '[object Object]'
  ) {
    let length = { length: 0 };
    const text = Object.values(param).map(getForamt(length));

    return {
      text,
      length: length.length
    };
  }
  const text = param.toString();
  // 基本类型
  return {
    text: [text],
    length: text.length
  };
}
