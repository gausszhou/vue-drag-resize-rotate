<template>
  <div class="github-badge">
    <a :href="url" :target="target">Github</a>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ""
    },
    target: {
      type: String,
      default: "__blank"
    }
  }
};
</script>

<style scoped>
.github-badge {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 80px;
  height: 80px;
  display: flex;
  background-image: linear-gradient(135deg, transparent 0%, transparent 50%, #43b984 50%, #43b984 100%);
}

.github-badge a {
  font-size: 16px;
  margin-left: 36px;
  margin-top: 36px;
  transform: rotate(-45deg);
  font-weight: 700;
  text-decoration: none;
  color: black;
}

.github-badge:hover {
  background-image: linear-gradient(135deg, transparent 0%, transparent 50%, #34445c 50%, #34445c 100%);
}
.github-badge:hover a {
  color: #fff;
}
</style>
