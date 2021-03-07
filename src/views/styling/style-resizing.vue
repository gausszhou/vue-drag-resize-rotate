<template>
  <div class="view-box">
    <div id="toolbar"></div>
    <div class="container">
      <vdrr class-name-resizing="my-resizing-class" class-name="my-class">
        <p>
          同样组件处于被拉伸时，设置类名
          <b>class-name-resizing</b> prop.
        </p>
      </vdrr>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.my-class {
  border: 1px solid red;
  -webkit-transition: background-color 200ms linear;
  -ms-transition: background-color 200ms linear;
  transition: background-color 200ms linear;
}
.my-resizing-class {
  background-color: blue;
  border: 1px solid black;
  color: white;
}
</style>