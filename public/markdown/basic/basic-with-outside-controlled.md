# 基本控制组件

一个基本的受控组件，<b>`x` </b>，<b>`y` </b>，<b>`w` </b>和<b>`h` </b> 控制组件的位置和大小。 你也应该
提供回调以将状态与父进程同步。

```html
<template>
  <vue-drag-resize-rotate :x="x" :y="y" :w="w" :h="h" @resizing="onResize" @dragging="onDrag">
    <p>Basic controlled component.</p>
  </vue-drag-resize-rotate>
</template>

<script>

export default {
  data() {
    return {
      x: 0,
      y: 0,
      w: 0,
      h: 0
    }
  },
  methods: {
    onDrag(left, top) {
      this.x = left
      this.y = top
    },
    onResize(left, top, width, height) {
      this.x = left
      this.y = top
      this.w = width
      this.h = height
    }
  }
}

</script>
```

