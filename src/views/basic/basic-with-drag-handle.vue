<template>
  <div class="view-box">
    <div id="toolbar">限制允许拖动的范围</div>
    <div class="container">
      <vdrr style="border: 1px solid black;" :drag-handle="'.drag-handle'">
        <div class="drag-handle">Drag Only Here</div>
      </vdrr>
    </div>
  </div>
</template>

<script>
export default {


}
</script>

<style>
</style>