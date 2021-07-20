<template>
  <div class="view-box">
    <div id="toolbar">具有句柄自定义标记的组件</div>
    <div class="container">
      <vue-drag-resize-rotate class-name-handle="my-handle-class">
        <p>The first child will populate the default slot.</p>
        <div slot="tl">😀</div>
        <div slot="tm">😂</div>
        <div slot="tr">😆</div>
        <div slot="mr">😉</div>
        <div slot="br">😎</div>
        <div slot="bm">😍</div>
        <div slot="bl">😣</div>
        <div slot="ml">😕</div>
      </vue-drag-resize-rotate>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>