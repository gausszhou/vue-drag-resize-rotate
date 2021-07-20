<template>
  <div class="view-box">
    <div id="toolbar"></div>
    <div class="container">
      <vue-drag-resize-rotate :lock-aspect-ratio="true" :parent="true">
        <p>Combine aspect ratio and costrain in parent.</p>
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