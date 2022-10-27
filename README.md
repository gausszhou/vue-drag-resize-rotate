# vue-drag-resize-rotate
 
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE) [![Npm Package](https://img.shields.io/npm/v/@gausszhou/vue-drag-resize-rotate.svg)](https://www.npmjs.com/package/@gausszhou/vue-drag-resize-rotate)

<p align='center'>
简体中文 | <a href="https://github.com/gausszhou/vue-drag-resize-rotate/blob/master/README.en.md">English</a>
</p>

## 友情提示

> 同时拖动的元素达到50+以上业务的请绕道


## 在线演示

[中文在线演示地址](https://gausszhou.github.io/vue-drag-resize-rotate)

## 快速上手

```bash
npm install  @gausszhou/vue-drag-resize-rotate
```

```vue
<template>
  <div class="container">
    <vue-drag-resize-rotate
      :w="100"
      :h="100"
      :x="0"
      :y="0"
      :parent="true"
      :draggable="true"
      :resizable="true"
      :rotatable="true"
      @resizing="resizing"
      @rotating="rotating"
      :r="0"
    >
    {{angle}}
    </vue-drag-resize-rotate>
  </div>
</template>

<script>
import VueDragResizeRotate from "@gausszhou/vue-drag-resize-rotate";

export default {
  components: {
    VueDragResizeRotate,
  },
  data() {
    return {
      angle: 0,
    };
  },
  methods: {
    resizing(x, y, w, h) {
      console.log(x, y, w, h);
    },
    rotating(angle) {
      console.log(angle)
    },
  },
};
</script>
```

## 代办事项
 
- [x] 修复部分正则判断问题和容器大小的1px误差问题
- [x] 整合自动对齐功能
- [x] 整合并重构旋转功能
  - [x] 实现旋转，旋转时可拉伸大小，且对顶点不动
  - [x] 旋转式手柄样式跟随角度变化
- [x] 修复纵横比
  - [x] 允许外部传入纵横比
- [x] 修复放缩 
- [ ] 重构代码
  - [ ] 抽离逻辑
  - [ ] 优化性能

> 提示: 开启旋转后 网格对齐和父容器限制将失效，待重构代码，会有 Breaking Change！！！

## 参考资料

```shell
https://github.com/mauricius/vue-draggable-resizable
https://github.com/gorkys/vue-draggable-resizable-gorkys
https://github.com/tmrcui/vue-draggable-resizable-rotatable   
```