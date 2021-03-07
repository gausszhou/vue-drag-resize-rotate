<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="ratio" /> Toggle Lock Aspect Ratio
    </div>
    <div class="container">
      <vdrr :lock-aspect-ratio="ratio">
        <p>
          Keep aspect ratio using
          <b>:lock-aspect-ratio</b> prop.
        </p>
      </vdrr>
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

<style>
</style>