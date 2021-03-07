<template>
  <div class="view-box">
    <div id="toolbar"></div>
    <div class="container">
      <vdrr
        :w="200"
        :h="200"
        :parent="true"
        :x="210"
        :min-width="200"
        :min-height="200"
        :snap="true"
        :snapTolerance="20"
        style="background-color: rgb(174, 213, 129);"
      ></vdrr>
      <vdrr
        :w="200"
        :h="200"
        :parent="true"
        :x="420"
        :min-width="200"
        :min-height="200"
        :snap="true"
        :snapTolerance="20"
        style="background-color: rgb(129, 212, 250);"
      ></vdrr>
    </div>
  </div>
</template>
