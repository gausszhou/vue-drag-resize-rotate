# 已激活和已停用的事件

当组件被激活时，会发出`activated()`事件。 当组件被停用时，会发出`deactivated()`事件。

~~~js
<vdrr :w="200" :h="200" @activated="onActivated" @deactivated="onDeactivated">
  <p v-if="active">The component has been activated.</p>
</vdrr>


<script>
export default () => ({
  [...]

  methods: {
    onActivated () {
      this.active = true
    },
    onDeactivated () {
      this.active = false
    }
  }
})
</script>
~~~

