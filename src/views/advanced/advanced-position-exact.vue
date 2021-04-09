<template>
  <div class="view-box">
    <div id="toolbar">更高精度的对齐</div>
    <div class="container display-flex">
      <div class="flex_1 drag-container">
        <template v-for="(element,index) in elements">
        <vdrr
        :key="index"
        :snap="true"
        :snapTolerance="10"
        :parent="true"
        :grid="[.1,.1]"
        :min-width="200"
        :min-height="200"
        :x="element.position.x"
        :y="element.position.y"
        :w="element.position.w"
        :h="element.position.h"
        :style="element.style"
        @activated="onActivate(index)"
        @deactivated="onDeactivate(index)"
        @resizing="onResize"
        @resizestop="onResizeStop"
        @dragging="onDrag"
        @dragstop="onDragStop"
        @rotating="onRotating"
        @rotatestop="onRotateStop"
      ></vdrr>  
      </template>
      </div>
      <div class="form-container">
        <div v-for="(form,index) in elements" :key="index">
          <h3>{{index}}</h3>
          <hr>
          <br>
        <el-form   :model="form" ref="form"  label-width="auto" :inline="false" size="mini">
        <el-form-item label="x">
          <el-input v-model="form.position.x"></el-input>
        </el-form-item>
        <el-form-item label="y">
          <el-input v-model="form.position.y"></el-input>
        </el-form-item>
        <el-form-item label="w">
          <el-input v-model="form.position.w"></el-input>
        </el-form-item>
        <el-form-item label="h">
          <el-input v-model="form.position.h"></el-input>
        </el-form-item>
      </el-form>    
        </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
 data(){
   return{
      activeIndex:0,
      elements:[
      {
          index:0,
          style:"background-color: rgb(174, 213, 129);",
          position:{
            x:210,
            y:0,
            w:200,
            h:200
          }
      },
      {
          index:1,
          style:"background-color: rgb(129, 212, 250);",
          position:{
            x:420,
            y:0,
            w:200,
            h:200
          }
      },
      ],
      form:{
          index:0,
          style:"background-color: rgb(174, 213, 129);",
          position:{
            x:210,
            y:0,
            w:200,
            h:200
          }
      }
   }
 },
 watch:{
   activeIndex(newV){
      console.log(newV)
   },
 },
 created() {
 },
 methods:{
    onActivate(val){
      this.activeIndex = val
    },
    onDeactivate(val){
      this.activeIndex = val
    },
    onResize(x, y, w, h){
      this.elements[this.activeIndex].position = {x,y,w,h}
    },
    onResizeStop(x, y, w, h){
      this.elements[this.activeIndex].position = {x,y,w,h}
    },
    onDrag(x, y){
      this.elements[this.activeIndex].position.x = x
      this.elements[this.activeIndex].position.y = y
    },
    onDragStop(x,y){
      this.elements[this.activeIndex].position.x = x
      this.elements[this.activeIndex].position.y = y
    },
    onRotating(angle){
      console.log(angle)
    },
    onRotateStop(angle){
      console.log(angle)
    },
 },
}
</script>

<style lang="less" scoped>
  .drag-container{
        border-right:1px solid #000;
  }
  .form-container{
    padding: 10px;
  }
</style>



