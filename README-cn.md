# watermark
canvas/svg水印：可用于 react，vue，原生js 和 其他小程序（小程序平台正在开发）的水印组件

<!-- watermark-shadowDOM -->
简体中文 | [English](./README.md)
---
* iE9及以上
* 现代浏览器

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
或
import Watermark from "@brian-walker-toretto/watermark/dist/react";
```

vue:
```js
import { VueWaterMark } from "@brian-walker-toretto/watermark";
或
import Watermark from "@brian-walker-toretto/watermark/dist/vue";
```

原生:
```js
import { NativeWaterMark } from "@brian-walker-toretto/watermark";
或
import Watermark from "@brian-walker-toretto/watermark/dist/native";
```

##### 3. 具体使用
React:
```jsx
import React, { Component } from "react";
import Watermark from "@brian-walker-toretto/watermark";
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

Vue:
* 方法一：组件内引用
```html
<template>
  <div id="app">
    <VueWaterMark :text="text" :options="options" :textstyle="textStyle" />
  </div>
</template>
<script>
import { VueWaterMark } from '@brian-walker-toretto/watermark'

export default {
  name: 'App',
  components: {
    VueWaterMark
  },
  data() {
    return {
      text: ['testUserName', 1234567890]
    }
  }
}
</script>
```
* 方法二：全局使用
```js
// 在vue项目入口文件中引入，全局注册
import Vue from 'vue';
import { VueWaterMark } from '@brian-walker-toretto/watermark';
VueWaterMark.install(Vue);
// 在页面中调用
<template>
  <div id="app">
    <WaterMark :text="text" :options="options" :textstyle="textStyle" />
  </div>
</template>
```

原生:
```js
import Watermark from "@brian-walker-toretto/watermark/dist/native";
NativeWaterMark({
  text: ['testUserName', '1234567890']
});
// 指定appendChild元素
NativeWaterMark(document.body, {
  text: ['testUserName', '1234567890']
});
```

### Api(简单说明)

|  属性名    | 类型                |  默认值  | 说明 | 是否必填 |
| :-------: | :------------: |  :----: | :------------: |:-----: |
| text    |  String/Number... |   ""   | 水印的文字，该属性更改后会引起重新渲染 | Y
| textStyle | Object | 见textStyle props   | 水印style（vue中使用小写：textstyle） | N
| options | Object |  见options props  | 水印参数 | N
| container | document |  document.body  | 原生js参数 | N

## textStyle props
字段名  |  默认值  |  类型    |  说明      |  是否必填
:-:    |  :-:    |  :-:    |  :-:       | :-:
color  |  #ccc   | string  | 水印字体颜色 | N
fontWeight  |  200  | number  | 水印字体粗细 | N
fontSize  |  14px   | string  | 水印字体大小 | N
font  |  微软雅黑   | string  | 水印字体 | N
lineHeight  |  1.2   | number  | 水印字体行高 | N
textAlign  |  center   | string  | 水印字体对齐方式 | N
background  |  transparent   | string  | 水印背景样式 | N

## options props
字段名  |  默认值  |  类型    |  说明      |  是否必填
:-:    |  :-:    |  :-:    |  :-:       | :-:
zIndex  |  99   | number  | 水印z-index | N
angle  |  -15   | number  | 水印倾斜度数 | N
alpha  |  0.8(暗水印0.005)   | number  |  水印透明度 | N
x  |  0   | number  | 水印起始位置x轴坐标 | N
y  |  0   | number  | 水印起始位置Y轴坐标 | N
rows  |  0   | number  | 水印行数 | N
cols  |  0   | number  | 水印列数 | N

### 版本及功能
+ version 1.1.5（正式版） 更新时间：2020.01.09
  + 加强防删除/防隐藏功能
+ version 1.1.2（正式版） 更新时间：2020.01.03
  + fix package.json main: /dist/watermark.js 改成 dist/watermark.js（服务器端渲染时无法Cannot find module）
  + 请不要使用0.9.0版本，因为它是测试版本
+ 版本v  1.1.1（正式版） 更新时间：2020.01.03
  + 修复打包文件环境问题：webpack output globalObject指定`typeof self !== 'undefined' ? self : this`(globalObject default window)
  + 修复服务器端渲染问题: 由于服务器端并没有window/document等环境，具体查看打包文件
+ 版本v 1.1.0（正式版） 更新时间：2019.12.31
  + 防删除功能优化：只处理水印节点
  + 样式优化：元素style化，防止样式节点被删除问题
+ 版本v 1.0.1（正式版） 更新时间：2019.12.23
  + 版本v 0.5.0@beta 更新成正式版
+ 版本v 0.5.0@beta 更新时间：2019.12.22
  + 新增 影子dom（shadow dom） 和 防删除功能（MutationObserver）
+ 版本v 0.4.3（第一个正式版）更新时间：2019.12.20
  + 参数优化
> 注：react + react-router + ie11特定情况下有bug，提示：DOMException NOTFOUNDERR（NOT_FOUND_ERR）
> 示例：解决方法
```js
// 需要在WaterMark组件外包一层div
import Routes from './router';
import WaterMark from '@brian-walker-toretto/watermark';
// Routes：路由
class App extends React.Component {
  constructor(props:any){
    super(props);
  }
  render(){
    // <>Routes + WaterMark</> 这种情况下ie11可能有bug
    return <><Routes />{this.renderWaterMark()}</>;
  }
  renderWaterMark = () => {
    const ie11 = 'ActiveXObject' in window && !window['ActiveXObject']; // ie11
    if(ie11){
      // 需要在WaterMark组件外包一层div
      return <div><WaterMark text={['testUserName', 1234567890]} /></div>;
    }
    return <WaterMark text={['testUserName', 1234567890]} />;
  }
}
```

### Todo
-   [ ] 判断网页宽高变化
-   [ ] 实现 react hooks 版本
-   [ ] 拓展更多小程序平台
-   [ ] api 拓展
-   [ ] react + react-router + ie11特定情况下有bug，提示：DOMException NOTFOUNDERR
-   [ ] 防删除功能优化：多watermark组件下会随机更新各个水印组件（目标：谁改动谁更新）

### 工程TODO
- [❎] 引入typescript/tslint
- [❎] 打包使用rollup
- [❎] 单元测试jest

### 任务 TODO
- [❎] 暗水印
- [❎] 性能优化