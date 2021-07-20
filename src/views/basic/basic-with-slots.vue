<template>
  <div class="view-box">
    <div id="toolbar">组件插槽</div>
    <div class="container">
      <vue-drag-resize-rotate>
        <p>基本组件内插入表单</p>
        <form @submit.stop.prevent="onSubmit">
          <input type="text" name="input" value="Hello" />
          <button type="submit">Submit</button>
        </form>
      </vue-drag-resize-rotate>
    </div>
  </div>
</template>

<script>

export default {

  methods: {
    onSubmit(e) {
      alert("You just submitted the form!")
    }
  }
}
</script>

<style>
</style>