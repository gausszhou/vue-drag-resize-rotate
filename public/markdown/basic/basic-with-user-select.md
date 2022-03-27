# 阻止用户选中组件内文本

```js
<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="disableUserSelect" /> Toggle disableUserSelect
    </div>
    <div class="container">
      <vue-drag-resize-rotate :parent="true" :disableUserSelect="disableUserSelect">
        <p>
          You can {{ disableUserSelect ? 'not' : '' }} select text inside the component by putting
          <b>:disableUserSelect</b>
          prop equal to {{ disableUserSelect }}.
        </p>
      </vue-drag-resize-rotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disableUserSelect: false,
    }
  }
}
</script>

<style>
</style>
```
