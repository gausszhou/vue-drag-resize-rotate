# 冲突检测

开启冲突检测时，各个可拖拽组件之间不可重叠，冲突后当前元素回到原来的位置

```js
<template>
  <div class="view-box">
    <div id="toolbar"></div>
    <div class="container">
      <vue-drag-resize-rotate
        :w="200"
        :h="200"
        :parent="true"
        :x="210"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        style="background-color: rgb(174, 213, 129);"
      ></vue-drag-resize-rotate>
      <vue-drag-resize-rotate
        :w="200"
        :h="200"
        :parent="true"
        :x="420"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        style="background-color: rgb(129, 212, 250);"
      ></vue-drag-resize-rotate>
    </div>
  </div>
</template>

```