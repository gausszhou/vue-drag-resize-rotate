<template>
    <div class="github">
      <a href="https://github.com/gausszhou/vue-drag-resize-rotate" target="__blank">Github</a>
    </div>
</template>

<script>
export default {

}
</script>

<style  lang="less" scoped>
  .github{
    position: fixed;
    right: 0;
    top:0;
    width: 100px;
    height: 100px;
    display: flex;
    background-image: linear-gradient(45deg,transparent 0%,transparent 50%,#409eff 50%,#409eff 100%);
    a{
      margin-left: 1.5rem;
      margin-top: 1.5rem;
      transform: rotate(45deg);
      font-weight: 700;
      text-decoration: none;
      color: black;
      &:hover{
        color:green
      }
    }
  }
</style>