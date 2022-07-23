<template>
  <div class="view-box">
    <div id="toolbar">Size: {{ width }} x {{ height }}</div>
    <div class="container">
      <vue-drag-resize-rotate :lock-aspect-ratio="true" :minHeight="100" :minWidth="50" @resizing="onResizing">
        <p>
          Keep aspect ratio and set
          <b>minHeight</b>
          to 100 and
          <b>minWidth</b>
          to 50.
        </p>
      </vue-drag-resize-rotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 200,
      height: 200
    };
  },
  methods: {
    onResizing(x, y, width, height) {
      this.width = width;
      this.height = height;
    }
  }
};
</script>
