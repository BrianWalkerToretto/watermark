export default {
  // 水印的文字，该属性更改后会引起重新渲染
  text: null, // string/number/[]/{}
  // 水印文字的 style 属性
  textStyle: {
    color: '#ccc', // 水印字体颜色
    fontWeight: 200,
    fontSize: '14px', // 水印字体大小
    font: '微软雅黑', // 水印字体
    lineHeight: 1.2,
    textAlign: 'center',
    background: 'transparent'
  },
  // 水印参数
  options: {
    angle: -15, // 水印倾斜度数
    alpha: 0.8, // 水印透明度；暗水印0.005
    x: 0, // 水印起始位置x轴坐标
    y: 0, // 水印起始位置Y轴坐标
    rows: 0, // 水印行数
    cols: 0 // 水印列数
    // width: 100, // 水印宽度
    // height: 80, // 水印高度
  }
};
