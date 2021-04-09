# 调整大小和调整事件

调整组件大小时会发出`resizing(x,y,width,height)`事件。 调整大小停止时会发出`resizestop(x,y,width,height)`事件。

```html
<vdrr :w="200" :h="200" :x="0" :y="0" @resizing="onResize" @resizestop="onResizeStop">
  <p>{{ resizing ? 'You are resizing me crazy' : 'This is my favourite shape' }}</p>
</vdrr>
<script>
export default () => ({
  [...]

  methods: {
    onResize: function (x, y, width, height) {
      this.resizing = true
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onResizeStop: function (x, y, width, height) {
      this.resizing = false
    }
  }
})
</script>
```

