<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="ratio" /> Toggle Lock Aspect Ratio
    </div>
    <div class="container">
      <vue-drag-resize-rotate :lock-aspect-ratio="ratio">
        <p>
          Keep aspect ratio using
          <b>:lock-aspect-ratio</b> prop.
        </p>
      </vue-drag-resize-rotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ratio: true
    }
  }
}
</script>

