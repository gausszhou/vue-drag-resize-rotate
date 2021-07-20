# vue-drag-resize-rotate.vue
 
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

## Code History

```
https://github.com/mauricius/vue-draggable-resizable
  |-https://github.com/tmrcui/vue-draggable-resizable-rotatable 
  |-https://github.com/gorkys/vue-draggable-resizable-gorkys
  |-https://github.com/gausszhou/vue-drag-resize-rotate
```

## Todo List
 
- [x] 修复部分正则判断问题和容器大小的1px误差问题
- [x] 整合自动对齐功能
- [x] 整合并重构旋转功能
  - [x] 实现旋转，旋转时可拉伸大小，且对顶点不动
  - [x] 旋转式手柄样式跟随角度变化
- [x] 修复纵横比
  - [x] 允许外部传入纵横比
- [x] 修复放缩 

> 提示:开启旋转后 网格对齐和父容器限制将失效

## Live Demo

[中文在线演示地址](https://gausszhou.github.io/vue-drag-resize-rotate)

## Features

 默认情况下，开启拖拽和调整大小，旋转功能请设置`:rotatable=true`并传入旋转角度`:r="0"`

## Getting Started

```shell
npm install  https://github.com/gausszhou/vue-drag-resize-rotate.vue.git
```

```js
// 引入全局自定义组件
import vue-drag-resize-rotate from "@gausszhou/vue-drag-resize-rotate"
Vue.component('vue-drag-resize-rotate', vue-drag-resize-rotate) 
```

```vue
<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="rotatable" /> Toggle rotatable
    </div>
    <div class="container">
      <vue-drag-resize-rotate
        :parent="true"
        :resizable="true"
        @resizing="resizing"
        :rotatable="rotatable"
        @rotating="rotating"
        :r="angle"
      >
        <p v-if="rotatable">现在可以旋转，旋转角度为{{angle}}</p>
        <p v-else>现在不可以旋转</p>
      </vue-drag-resize-rotate>
    </div>
  </div>
</template>

<script>
// 当然你也可以在需要的时候在单个组件内引入
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

| 属性名 | 数据类型 | 默认值 |
| ------ | -------- | ------ |

| `rotatable` | `Boolean`  | `false`    | 

```html
<!-- 定义组件是否支持旋转  -->
<vue-drag-resize-rotate :rotatable="true" />
```
 
| `r`      | `Number`  | ` 0`      |

```html
<!-- 定义初始旋转角度   -->
<vue-drag-resize-rotate :r="0" />
```


| `snapBorder` | `Boolean`  | `false`    |

```html
<!-- 定义组件是否开启元素对齐容器的边。   -->
<vue-drag-resize-rotate :snap-border="true" />
```


| `outsideAspectRatio` | `Number`  | `false`  |

```html
<!-- 定义组件的纵横比   -->
<vue-drag-resize-rotate :lock-aspect-ratio="true" :outsideAspectRatio="1.7777" />
```


| `classNameRotatable` | `String`      | `rotatable` |

```html
<!-- 设置组件允许旋转时的类名   -->
<vue-drag-resize-rotate class-name-rotatable="my-rotatable-class" />
```


|`classNameRotating` | `String` |`rotating`|

```html
<!-- 设置组件旋转时的类名   -->
<vue-drag-resize-rotate class-name-rotating="my-rotating-class" />
```

## 新增 Events

| 事件名 | 何时触发 | 返回值 |
| ------ | -------- | ------ |

|`rotating` | 正在旋转时触发 | 返回当前旋转的角度|

```html
<vue-drag-resize-rotate :rotating="onRotating" />
```

|`rotatestop`| 旋转结束时触发 | 返回当前旋转的角度|
```html
<vue-drag-resize-rotate :rotatestop="onRotateStop" />
```
