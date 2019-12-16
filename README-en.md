# watermark
canvas/svg watermark：Watermark components available for react, vue, native js, and other miniprogram (miniprogram platform under development)

[中文版](./README.md) | English

---
* iE9 and above
* Modern browser

### use
##### 1. Install dependencies
```
npm install @brian-walker-toretto/watermark
```

##### 2. Imported components
react:
```js
import Watermark from "@brian-walker-toretto/watermark";
or
import { ReactWaterMark } from "@brian-walker-toretto/watermark";
or
import Watermark from "@brian-walker-toretto/watermark/dist/react";
```

vue:
```js
import { VueWaterMark } from "@brian-walker-toretto/watermark";
or
import Watermark from "@brian-walker-toretto/watermark/dist/vue";
```

native js:
```js
import { NativeWaterMark } from "@brian-walker-toretto/watermark";
or
import Watermark from "@brian-walker-toretto/watermark/dist/native";
```

##### 3. method of application
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
* Method 1: intra-component references
```html
<template>
  <div id="app">
    <VueWaterMark :text="text" :zIndex="zIndex" :options="options" :textStyle="textStyle" />
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
* Method 2: use globally
```js
// Import in the entry file，Global registration
import Vue from 'vue';
import { VueWaterMark } from '@brian-walker-toretto/watermark';
VueWaterMark.install(Vue);

<template>
  <div id="app">
    <WaterMark :text="text" :zIndex="zIndex" :options="options" :textStyle="textStyle" />
  </div>
</template>
```

native js:
```js
import Watermark from "@brian-walker-toretto/watermark/dist/native";
NativeWaterMark({
  text: ['testUserName', '1234567890']
});
// Specify the parent element
NativeWaterMark(document.body, {
  text: ['testUserName', '1234567890']
});
```

### Api

|  property name    | type |  default value  | instructions | required |
| :-------: | :------------: |  :----: | :------------: |:-----: |
| text    |  String/Number... |   ""   | The text of the watermark | Y
| textStyle | Object | see textStyle props   | watermark style | N
| options | Object |  see options props  | Watermark parameters | N
| container | document |  document.body  | native js parameters | N

## textStyle props
property name  |  default value  |  type    |  instructions |  required
:-:    |  :-:    |  :-:    |  :-:       | :-:
color  |  #ccc   | string  | watermark font color | N
fontWeight  |  200  | number  | watermark font weight | N
fontSize  |  14px   | string  | watermark font size | N
font  |  微软雅黑   | string  | watermark font | N
lineHeight  |  1.2   | number  | watermark font line-height | N
textAlign  |  center   | string  | watermark font text-aling | N
background  |  transparent   | string  | watermark background | N

## options props
property name  |  default value  |  type    |  instructions |  required
:-:    |  :-:    |  :-:    |  :-:       | :-:
angle  |  -15   | number  | watermark tilting power | N
alpha  |  0.8(暗水印0.005)   | number  |  watermark transparency | N
x  |  0   | number  | X - axis starting position of watermark | N
y  |  0   | number  | Y - axis starting position of watermark | N
rows  |  0   | number  | watermark lines | N
cols  |  0   | number  | watermark columns | N

### Todo
-   [ ] ie8
-   [ ] Determine page width and height changes
<!-- -   [ ] SVG version fix -->
<!-- -   [ ] README -->
-   [ ] implementation react hooks version
-   [ ] Developing more minprogram platform
-   [ ] The API development

### 工程TODO
- [❎] The introduction of typescript/tslint
- [❎] packaging：rollup
- [❎] Unit testing：jest

### 任务 TODO
- [❎] To prevent delete
<!-- - [❎] react/vue/js -->
- [❎] Dark watermark
- [❎] Performance optimization

