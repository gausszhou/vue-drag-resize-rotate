 <h1 align="center">vue-drag-resize-rotate</h1>
 
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

## 提示

目前不开启旋转时的限制策略为，不能超出父容器边界，大小不能超过父容器大小  
开启旋转时，中心点不能超出父容器边界，大小不能超过父容器大小  
如果要修改策略请调整`calcResizeLimits()` 和 `calcDragLimits()`


## 计划

- [x] 修复bug，稳定一个版本
- [ ] 添加测试
- [ ] 优化演示界面

## 代码历史
```
https://github.com/mauricius/vue-draggable-resizable
  |-https://github.com/tmrcui/vue-draggable-resizable-rotatable 
  |-https://github.com/gorkys/vue-draggable-resizable-gorkys
  |-https://github.com/gausszhou/vue-drag-resize-rotate
```

## 在线示例

[在线演示地址](https://gausszhou.github.io/vue-drag-resize-rotate/#/basic/basic-with-rotatable)


## 特性说明
 默认情况下，开启拖拽和调整大小，旋转功能请设置`:rotatable=true`并传入旋转角度`:r="0"`

## 基本使用

```js
// 引入全局自定义组件
import vdrr from "./components/vue-drag-resize-rotate"
import vdr from "./components/vue-drag-resize"
Vue.component('vdr', vdr) 
Vue.component('vdrr', vdrr) 
```

```vue
<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="rotatable" /> Toggle rotatable
    </div>
    <div class="container">
      <vdrr
        :rotatable="rotatable"
        :r="angle"
        @rotating="rotating"
        :resizable="true"
        @resizing="resizing"
        :parent="true"
      >
        <p v-if="rotatable">现在可以旋转，旋转角度为{{angle}}</p>
        <p v-else>现在不可以旋转</p>
      </vdrr>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotatable: true,
      angle: 0
    }
  },
  methods: {
    rotating(val) {
      this.angle = val
    },
    resizing() { }
  },
}
</script>

```
## 新增 Porps 
### rotatable
类型: `Boolean`  
必须: `false`  
默认: `true`  

定义组件是否支持旋转

```html
<vdrr :rotatable="true">
```
### r
类型: `Number`  
必须: `false`  
默认: `0`  

定义初始旋转角度

```html
<vdrr :r="0">
```

### snapBorder

类型: `Boolean`  
必需: `false`  
默认: `false`  

定义组件是否开启元素对齐容器的边。

```html
<vdrr :snap-border="true" />
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

## 不太重要的

###  classNameRotatable 
类型: `String`  
必须: `false`  
默认: `rotatable`  

设置组件允许旋转时的类名
```html
<vdrr class-name-rotatable="my-rotatable-class">
```
### classNameRotating
类型: `String`  
必须: `false`  
默认: `rotating`  

设置组件旋转时的类名

```html
<vdrr class-name-rotating="my-rotating-class">
```

