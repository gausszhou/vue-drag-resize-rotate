<template>
  <div class="view-box">
    <div id="toolbar">
      Change z-index:
      <input type="number" v-model="z" />
    </div>
    <div class="container">
      <vdrr :z="z" style="background-color:#ccc;">
        <p>
          通过
          <b>:z</b> 属性，控制组件的z-index层级
        </p>
      </vdrr>
      <div
        style="width: 200px; height: 200px; background-color: red; position: absolute; top: 100px; left: 100px; z-index: 1; text-align: center; font-size: 24px"
      >1</div>
      <div
        style="width: 300px; height: 300px; background-color: green; position: absolute; top: 200px; left: 200px; z-index: 9; text-align: center; font-size: 24px"
      >9</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      z: 0
    }
  }
}
</script>

<style>
</style>