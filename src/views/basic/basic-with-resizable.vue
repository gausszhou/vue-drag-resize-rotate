<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="resizable" /> Toggle resizable
    </div>
    <div class="container">
      <vdrr :resizable.sync="resizable">
        <p>Basic component that is {{ resizable ? 'also' : 'not' }} resizable.</p>
      </vdrr>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resizable: false
    }
  }
}
</script>

<style>
</style>