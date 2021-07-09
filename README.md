# vue-drag-resize-rotate
 
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

```js
// 引入全局自定义组件
import vdrr from "@/components/vdrr"
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
        :parent="true"
        :resizable="true"
        @resizing="resizing"
        :rotatable="rotatable"
        @rotating="rotating"
        :r="angle"
      >
        <p v-if="rotatable">现在可以旋转，旋转角度为{{angle}}</p>
        <p v-else>现在不可以旋转</p>
      </vdrr>
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


| 属性名    | 数据类型 | 是否必须 | 默认值 |
| --------- | -------- | -------- | ------ |
| rotatable | Boolean  | false    | true   |

定义组件是否支持旋转

```html
<vdrr :rotatable="true" />
```

| 属性名 | 数据类型 | 是否必须 | 默认值 |
| ------ | -------- | -------- | ------ |
| r      | Number   | false    | 0      |

定义初始旋转角度

```html
<vdrr :r="0" />
```



| 属性名     | 数据类型 | 是否必须 | 默认值 |
| ---------- | -------- | -------- | ------ |
| snapBorder | Boolean  | false    | false  |


定义组件是否开启元素对齐容器的边。

```html
<vdrr :snap-border="true" />
```

| 属性名             | 数据类型 | 是否必须 | 默认值 |
| ------------------ | -------- | -------- | ------ |
| outsideAspectRatio | Number   | false    | false  |

定义组件的纵横比

```html
<vdrr :lock-aspect-ratio="true" :outsideAspectRatio="1.7777" />
```

| 属性名             | 数据类型 | 是否必须 | 默认值    |
| ------------------ | -------- | -------- | --------- |
| classNameRotatable | String   | false    | rotatable |

设置组件允许旋转时的类名

```html
<vdrr class-name-rotatable="my-rotatable-class" />
```
| 属性名            | 数据类型 | 是否必须 | 默认值   |
| ----------------- | -------- | -------- | -------- |
| classNameRotating | String   | false    | rotating |

设置组件旋转时的类名

```html
<vdrr class-name-rotating="my-rotating-class" />
```

## 新增 Events

| 事件名   | 何时调用       | 是否必须 | 返回值              |
| -------- | -------------- | -------- | ------------------- |
| rotating | 正在旋转时触发 | false    | `rotate` 旋转的角度 |

```html
<vdrr :rotating="onRotating" />
```

| 事件名     | 何时调用       | 是否必须 | 返回值              |
| ---------- | -------------- | -------- | ------------------- |
| rotatestop | 旋转结束时触发 | false    | `rotate` 旋转的角度 |

```html
<vdrr :rotatestop="onRotateStop" />
```
