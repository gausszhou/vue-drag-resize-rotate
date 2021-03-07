<template>
  <div class="view-box">
    <div id="toolbar">
      Max Width:
      <input type="number" v-model.number="maxWidth" />
      Max Height:
      <input type="number" v-model.number="maxHeight" />
    </div>
    <div class="container">
      <vdrr :max-width="maxWidth" :max-height="maxHeight">
        <p>
          基本组件，可以配置
          <b>maxWidth</b> 和
          <b>maxHeight</b> 属性
        </p>
      </vdrr>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      maxWidth: 300,
      maxHeight: 300
    }
  }
}
</script>