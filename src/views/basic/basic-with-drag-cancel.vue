<template>
  <div class="view-box">
    <div id="toolbar">限制禁止拖动的范围</div>
    <div class="container">
      <vdrr style="border: 1px solid black;" :drag-cancel="'.drag-cancel'">
        <div class="drag-cancel">Cannot Drag Here</div>
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