<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="draggable" id="draggable" /> Toggle draggable
    </div>
    <div class="container">
      <vdrr :draggable="draggable">
        <p>Basic component that is {{ draggable ? 'also' : 'not' }} draggable.</p>
      </vdrr>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      draggable: false
    }
  }
}
</script>

<style>
</style>