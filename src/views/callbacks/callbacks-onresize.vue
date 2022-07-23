<template>
  <div class="view-box">
    <div id="toolbar">
      <p :style="style">
        I turn red when
        <i>onResize</i> is called. Callback then prevents resizing.
      </p>
    </div>
    <div class="container">
      <vue-drag-resize-rotate :on-resize="onResize"></vue-drag-resize-rotate>
    </div>
  </div>
</template>
    

<script> 
export default {
  data() {
    return {
      style: {
        color: 'black'
      }
    }
  },
  methods: {
    onResize(e) {
      this.style.color = 'red'
      return false
    }
  }
}
</script>

<style>
</style>