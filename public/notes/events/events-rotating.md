# 旋转角度和旋转事件

```js
<template>
  <div class="view-box">
    <div id="toolbar"></div>
    <div class="container">
      <vdrr :w="200" :h="200" :x="0" :y="0" :rotatable="true" @rotating="onRotating" @rotatestop="onRotateStop">
        <p>
          {{ rotating ? '你正在旋转' : '这个角度刚刚好' }}
          <br />
          Rotate: {{rotate}}
        </p>
      </vdrr>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotating: false,
      x: 0,
      y: 0,
      width: 200,
      height: 200,
      rotate: 0
    }
  },
  methods: {
    onRotating: function (degree) {
      this.resizing = true
      this.rotate = degree
    },
    onRotateStop: function () {
      this.resizing = false
      this.rotate = degree
    }
  }
}
</script>

```