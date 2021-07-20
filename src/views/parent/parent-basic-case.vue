<template>
  <div class="view-box">
    <div id="toolbar">父级容器基本案例</div>
    <div class="container">
      <vue-drag-resize-rotate :parent="true">
        <p>你不能将当前组件拖动或调整大小超过父元素容器</p>
      </vue-drag-resize-rotate>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>