# vue-drag-resize-rotate
 
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE) [![Npm Package](https://img.shields.io/npm/v/@gausszhou/vue-drag-resize-rotate.svg)](https://www.npmjs.com/package/@gausszhou/vue-drag-resize-rotate)

<p align='center'>
<a href="https://github.com/gausszhou/vue-drag-resize-rotate/blob/main/README.md">简体中文</a> | English
</p>

## Tips

> Please detour if the elements dragged at the same time reach more than 50+ businesses


## Online demo

[Chinese online demo address](https://gausszhou.github.io/vue-drag-resize-rotate)

## Getting started

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
    {{ angle }}
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

## Todo list
 
- [x] Fixed some regular judgment problems and 1px error of container size
- [x] Integrate auto-align function
- [x] Integrate and refactor rotation function
   - [x] realizes rotation, can stretch the size when rotating, and does not move to the vertex
   - [x] Rotary handle style follows angle changes
- [x] fix aspect ratio
   - [x] allow external incoming aspect ratio
- [x] fix zoom
- [ ] rebuild code
   - [ ] Extract logic
   - [ ] Optimized performance

> Tip: After turning on the rotation, the grid alignment and parent container restrictions will be invalid, and there will be Breaking Changes to be refactored! ! !

## References

```shell
https://github.com/mauricius/vue-draggable-resizable
https://github.com/gorkys/vue-draggable-resizable-gorkys
https://github.com/tmrcui/vue-draggable-resizable-rotatable   
```