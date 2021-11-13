<template>
  <div class="github">
    <a href="https://github.com/gausszhou/vue-drag-resize-rotate" target="__blank">Github</a>
  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.github {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 80px;
  height: 80px;
  display: flex;
  background-image: linear-gradient(
    135deg,
    transparent 0%,
    transparent 50%,
    #409eff77 50%,
    #409eff77 100%
  );
}
.github a {
  font-size: 14px;
  margin-left: 36px;
  margin-top: 36px;
  transform: rotate(-45deg);
  font-weight: 700;
  text-decoration: none;
  color: black;
}
.github a:hover {
  color: green;
}
</style>