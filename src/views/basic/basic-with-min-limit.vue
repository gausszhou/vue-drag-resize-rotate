<template>
  <div class="view-box">
    <div id="toolbar">
      min Width:
      <input type="number" v-model.number="minWidth" />
      min Height:
      <input type="number" v-model.number="minHeight" />
    </div>
    <div class="container">
      <vdrr :min-width="minWidth" :min-height="minHeight">
        <p>
          基本组件，可以配置
          <b>minWidth</b> 和
          <b>minHeight</b> 属性
        </p>
      </vdrr>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minWidth: 200,
      minHeight: 200
    }
  }
}
</script>