<template>
  <div class="view-box">
    <div id="toolbar">
      <p :style="style">
        I turn red when
        <i>onDragStart</i>
        is called. Callback then prevents activation.
      </p>
    </div>
    <div class="container">
      <vue-drag-resize-rotate :on-drag-start="onDragStart"></vue-drag-resize-rotate>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: {
        color: "black"
      }
    };
  },
  methods: {
    onDragStart(e) {
      this.style.color = "red";
      return false;
    }
  }
};
</script>
