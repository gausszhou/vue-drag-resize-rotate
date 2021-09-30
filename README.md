# vue-drag-resize-rotate
 
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE) [![Npm Package](https://img.shields.io/npm/v/@gausszhou/vue-drag-resize-rotate.svg)](Package)

## TodoList
 
- [x] 修复部分正则判断问题和容器大小的1px误差问题
- [x] 整合自动对齐功能
- [x] 整合并重构旋转功能
  - [x] 实现旋转，旋转时可拉伸大小，且对顶点不动
  - [x] 旋转式手柄样式跟随角度变化
- [x] 修复纵横比
  - [x] 允许外部传入纵横比
- [x] 修复放缩 
- [ ] 重构代码

> 提示:开启旋转后 网格对齐和父容器限制将失效，待重构代码

## LiveDemo

[中文在线演示地址](https://gausszhou.github.io/vue-drag-resize-rotate)

## Features

 默认情况下，开启拖拽和调整大小，如要开启旋转功能，请设置`:rotatable=true`并传入旋转角度比如`:r="0"`

## Started

```shell
npm install  @gausszhou/vue-drag-resize-rotate
```

```js
// 引入全局自定义组件
import vueDragResizeRotate from "@gausszhou/vue-drag-resize-rotate"
Vue.component('vue-drag-resize-rotate', vueDragResizeRotate) 
```

```vue
<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="rotatable" /> Toggle rotatable
    </div>
    <div class="container">
      <vue-drag-resize-rotate
        :w="100"
        :h="100"
        :x="0"
        :y="0"
        :parent="true"
        :draggable="true"
        :resizable="true"
        :rotatable="rotatable"
        @resizing="resizing"
        @rotating="rotating"
        :r="angle"
      >
      </vue-drag-resize-rotate>
    </div>
  </div>
</template>

<script>
import vueDragResizeRotate from "@gausszhou/vue-drag-resize-rotate";
// 当然你也可以在需要的时候在单个组件内引入
export default {
  components: {
    vueDragResizeRotate,
  },
  data() {
    return {
      rotatable: true,
      angle: 0,
    };
  },
  methods: {
    resizing(x, y, w, h) {
      console.log(x, y, w, h);
    },
    rotating(val) {
      this.angle = val;
    },
  },
};
</script>

<style>
#toolbar {
  left: 0;
  top: 0;
  height: 24px;
  padding: 5px;
  border: 1px solid #999;
  border-bottom: none;
  background-color: #CCC;
  z-index: 999;
}

.container {
  width: 100%;
  height: 600px;
  border: 1px solid #000;
  position: relative;
  box-sizing: border-box
}

</style>
```

## CodeReference

```shell
# 主要参考
https://github.com/mauricius/vue-draggable-resizable
# 次要参考
https://github.com/gorkys/vue-draggable-resizable-gorkys
https://github.com/tmrcui/vue-draggable-resizable-rotatable   
```