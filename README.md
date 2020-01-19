# watermark
canvas/svg watermark：Watermark components available for react, vue, native js, and other miniprogram (miniprogram platform under development)  

[中文版](./README-cn.md) | English
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
* Method 2: use globally
```js
// Import in the entry file，Global registration
import Vue from 'vue';
import { VueWaterMark } from '@brian-walker-toretto/watermark';
VueWaterMark.install(Vue);

<template>
  <div id="app">
    <WaterMark :text="text" :options="options" :textstyle="textStyle" />
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
| textStyle | Object | see textStyle props   | watermark style（Use lowercase: textstyle in vue） | N
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
zIndex  |  99   | number  | watermark z-index | N
angle  |  -15   | number  | watermark tilting power | N
alpha  |  0.8(暗水印0.005)   | number  |  watermark transparency | N
x  |  0   | number  | X - axis starting position of watermark | N
y  |  0   | number  | Y - axis starting position of watermark | N
rows  |  0   | number  | watermark lines | N
cols  |  0   | number  | watermark columns | N

### Version and features
+ version 1.2.0 (official version) update time：2020.01.19
  + Repair the default styles: opacity default value from 0.8 to 1;
  + React server render optimization: return Fragment when server side render
+ version 1.1.6 (official version) update time：2020.01.17
  + fixed ie11 anti-deletion bug (replaceChild has delay)
  + compression: reduces size by 1-2k
+ version 1.1.5 (official version) update time：2020.01.09
  + Enhanced anti-delete/anti-hide function
+ version 1.1.2 (official version) update time：2020.01.03
  + fix package.json main: /dist/watermark.js to dist/watermark.js(Cannot find module when rendering on the server side)
  + Please do not use version 0.9.0 as it is the test version
+ version 1.1.1 (official version) update time：2020.01.03
  + fix Packaging file environment issues: webpack output globalObject specified `typeof self !== 'undefined' ? self : this`(globalObject default window)
  + fix Server-side rendering issues: Because there is no window/document environment on the server side，See the package file for details
+ version 1.1.0 (official version) update time：2019.12.31
  + Anti-deletion function optimization: only watermark nodes are processed
  + Style optimization: element stylization to prevent style nodes from being deleted
+ version 1.0.1 (official version) update time：2019.12.23
  + version 0.5.0@beta Update to the official version
+ version 0.5.0@beta update time：2019.12.22
  + add shadow DOM and Anti-deletion function（MutationObserver）
+ version 0.4.3(first official edition) update time：2019.12.20
  + parameter optimization
> notice：React + reaction-router + ie11 has bugs in specific situations，prompt：DOMException NOTFOUNDERR（NOT_FOUND_ERR）
> Example: solution
```js
// You need to outsource a layer div in the WaterMark component
import Routes from './router';
import WaterMark from '@brian-walker-toretto/watermark';
// Routes：react-router
class App extends React.Component {
  constructor(props:any){
    super(props);
  }
  render(){
    // <>Routes + WaterMark</> There may be bugs in ie11 in this case
    return <><Routes />{this.renderWaterMark()}</>;
  }
  renderWaterMark = () => {
    const ie11 = 'ActiveXObject' in window && !window['ActiveXObject']; // ie11
    if(ie11){
      // You need to outsource a layer div in the WaterMark component
      return <div><WaterMark text={['testUserName', 1234567890]} /></div>;
    }
    return <WaterMark text={['testUserName', 1234567890]} />;
  }
}
```

### Todo
-   [ ] Determine page width and height changes
-   [ ] implementation react hooks version
-   [ ] Developing more minprogram platform
-   [ ] The API development
-   [ ] react + react-router + ie11 there is a bug in a specific case, prompt: DOMException NOTFOUNDERR
-   [ ] Anti-deletion function optimization: each watermark component will be updated randomly under the multi-watermark component (target: who changes who updates)

### 工程TODO
- [❎] The introduction of typescript/tslint
- [❎] packaging：rollup
- [❎] Unit testing：jest

### 任务 TODO
- [❎] Dark watermark
- [❎] Performance optimization

