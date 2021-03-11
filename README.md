 <h1 align="center">vue-drag-resize-rotate</h1>
 
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

## 注意

**目前，此组件在某些选项同时启用时，存在严重问题，暂未修复，请谨慎使用**

## 计划

- [ ] 暂时去除对齐栅格功能(实在没想好旋转后和栅格对其功能如何组合)
- [ ] 修复bug，稳定一个版本
- [ ] 添加测试
- [ ] 优化演示界面
- [ ] 补齐栅格对其功能(可能尝试给定一个父盒子的旋转角度，来实现对齐)

### 代码历史
```
https://github.com/mauricius/vue-draggable-resizable
  |-https://github.com/tmrcui/vue-draggable-resizable-rotatable 
  |-https://github.com/gorkys/vue-draggable-resizable-gorkys
  |-https://github.com/gausszhou/vue-drag-resize-rotate
```

### 在线示例

[在线演示地址](https://gausszhou.github.io/vue-drag-resize-rotate/#/basic/basic-with-rotatable)


### 特性说明
 默认情况下，开启拖拽和调整大小，旋转功能请设置`:rotatable=true`并传入旋转角度`:r="0"`

### 基本使用

```js
// 引入全局自定义组件
import vdrr from "./components/vue-drag-resize-rotate"
Vue.component('vdrr', vdrr) 
```

```vue
<template>
  <div style="height: 500px; width: 500px; border: 1px solid red; position: relative;">
    <vdrr :w="100" :h="100"  @dragging="onDrag" @resizing="onResize" :parent="true">
      <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>
    </vdrr>
  </div>
</template>

<script>
export default {
  components:{
    vdrr
  },
  data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y
    }
  }
}
</script>
```
### 新增 Porps 

####  classNameRotatable 
类型: `String`  
必须: `false`  
默认: `rotatable`  

设置组件允许旋转时的类名
```html
<vdrr class-name-rotatable="my-rotatable-class">
```
#### classNameRotating
类型: `String`  
必须: `false`  
默认: `rotating`  

设置组件旋转时的类名

```html
<vdrr class-name-rotating="my-rotating-class">
```

#### rotatable
类型: `Boolean`  
必须: `false`  
默认: `true`  

定义组件是否支持旋转

```html
<vdrr :rotatable="true">
```

#### r
类型: `Number`  
必须: `false`  
默认: `0`  

定义初始旋转角度

```html
<vdrr :r="0">
```

#### snap 
类型: `Boolean`  
必需: `false`  
默认: `false`  

定义组件是否开启元素对齐。

```html
<vdrr :snap="true" />
```
#### snapBorder

类型: `Boolean`  
必需: `false`  
默认: `false`  

定义组件是否开启元素对齐容器的边。

```html
<vdrr :snap-border="true" />
```

#### snapTolerance
类型: `Number`  
必需: `false`  
默认: `5`  

当调用snap时，定义组件与元素之间的对齐距离，以像素(px)为单位。

```html
<vdrr :snap="true" :snap-tolerance="10" />
```

### 新增 Events

#### rotating
必须: `false`  
返参:
* `rotate` 旋转的角度

旋转时触发
```html
<vdrr :rotating="onRotating">
```

#### rotatestop
必须: `false`  
返参:
* `rotate` 旋转的角度

旋转结束时触发

```html
<vdrr :rotatestop="onRotateStop">
```
