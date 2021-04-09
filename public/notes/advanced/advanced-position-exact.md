# 更高精度的对齐

设置`:snap="true"`开启吸附功能  
设置`:snapTolerance="20"`可控制吸附判断距离  
设置`:exact="true"`  
设置`:parentExactWidth="1920"`和`:parentExactHeight="1080"`控制容器对齐参数宽高  

> 请给同一个容器内的`<vdrr>`设置相同的`parentExactWidth`和`parentExactHeight`

```js
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
```