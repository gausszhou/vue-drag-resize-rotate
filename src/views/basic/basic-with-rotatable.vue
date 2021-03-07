<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="rotatable" /> Toggle rotatable
    </div>
    <div class="container">
      <vdrr :rotatable.sync="rotatable">
        <p>Basic component that is {{ rotatable ? 'also' : 'not' }} rotatable.</p>
      </vdrr>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotatable: true
    }
  }
}
</script>

<style>
</style>