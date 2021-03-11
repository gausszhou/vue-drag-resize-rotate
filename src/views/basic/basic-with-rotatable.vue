<template>
  <div class="view-box">
    <div id="toolbar">
      <input type="checkbox" v-model="rotatable" /> Toggle rotatable
    </div>
    <div class="container">
      <vdrr
        :rotatable="rotatable"
        :r="angle"
        @rotating="rotating"
        :resizable="true"
        @resizing="resizing"
        :parent="true"
      >
        <p v-if="rotatable">现在可以旋转，旋转角度为{{angle}}</p>
        <p v-else>现在不可以旋转</p>
      </vdrr>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotatable: true,
      angle: 0
    }
  },
  methods: {
    rotating(val) {
      this.angle = val
    },
    resizing() { }
  },
}
</script>

<style>
</style>