# watermark
canvas/svg水印：可用于 react，vue，原生js 和 其他小程序（小程序平台正在开发）的水印组件

### 使用
##### 1. 安装依赖
```
npm install @brian-walker-toretto/watermark
```

##### 2. 引入组件
react:
```js
import Watermark from "@brian-walker-toretto/watermark";
或
import { ReactWaterMark } from "@brian-walker-toretto/watermark";
```

vue:
```js
// import Watermark from "@brian-walker-toretto/watermark/vue";
// 或
import { VueWaterMark } from "@brian-walker-toretto/watermark";
```

原生:
```js
// import Watermark from "@brian-walker-toretto/watermark/native";
// 或
import { NativeWaterMark } from "@brian-walker-toretto/watermark";
```

##### 3. 具体使用
React:
```jsx
import React, { Component } from "react";
import Watermark from "@brian-walker-toretto/watermark/react";
import "./index.css";

class Avatar extends Component {
	render() {
		return <Watermark
      text="bowen"
      textStyle={{ color: "#fff", fontSize: 20 }}
    />;
	}
}

export default Avatar;
```

原生:
```js
import Watermark from "@brian-walker-toretto/watermark/native";
NativeWaterMark({
  text: ['testUserName', '1234567890']
});
```

### Api(简单说明)

|  属性名    | 类型                | 默认值 | 说明 |
| :-------: | :----------------: | :----: | :-----------------: |
| text    | String(required) |   ""   | 水印的文字，该属性更改后会引起重新渲染 |
| textStyle | Object |   {}   | 水印style |
| options | Object |   {}   | 水印参数 |



### Todo
-   [ ] svg版本修复
-   [ ] README
-   [ ] 实现 react hooks 版本
-   [ ] 拓展更多小程序平台
-   [ ] api 拓展

### 工程TODO
- [❎] 引入typescript/tslint
- [❎] 打包使用rollup
- [❎] 单元测试jest

### 任务 TODO
- [❎] 防删除
- [❎] react/vue/js
- [❎] 暗水印
- [❎] 性能优化