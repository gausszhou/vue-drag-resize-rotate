<template>
  <div class="view-box">
    <div id="toolbar">限制禁止拖动的范围</div>
    <div class="container">
      <vue-drag-resize-rotate style="border: 1px solid black" :drag-cancel="'.drag-cancel'">
        <div class="drag-cancel">Cannot Drag Here</div>
      </vue-drag-resize-rotate>
    </div>
  </div>
</template>
