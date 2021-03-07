<template>
  <div class="view-box">
    <div id="toolbar"></div>
    <div class="container">
      <vdrr class-name="my-class">
        <p>
          你可以给组件设置一个类名，覆盖其默认类名
          <b>class-name</b>
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
</style>