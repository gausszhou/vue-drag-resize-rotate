<template>
  <div class="view-box">
    <div id="toolbar">具有自定义类名称句柄的组件</div>
    <div class="container">
      <vue-drag-resize-rotate class-name-handle="my-handle-class">
        <p>
          You can provide a default class name for the handle using the
          <b>class-name-handle</b> prop.
        </p>
      </vue-drag-resize-rotate>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style >
</style>