<template>
  <div>
    <div class="patternContent">
      <div class="patternLeft">
        <!-- <el-form label-width="auto">
          <el-form-item label="模板选择">
            <el-select size="mini" v-model="cropperTemplateActive" @change="cropperTabHandle">
              <template v-for="(val, key) in cropperTemplateList">
                <el-option :label=" val.name" :value="key" :key="key"></el-option>
              </template>
            </el-select>
          </el-form-item>
        </el-form>-->
        <div class="pattern-contaienr">
          <template v-for="(element, index) in elements">
            <vdrr
              v-if="init"
              ref="mychild"
              class="iconPistion"
              :key="index"
              :dragable="true"
              :resizable="true"
              :rotatable="false"
              :x="dragWX(element.x)"
              :y="dragHY(element.y)"
              :w="dragWX(element.width) || 1"
              :h="dragHY(element.height) || 1"
              :r="element.rotate"
              :parent="true"
              :snap="true"
              :outsideAspectRatio="element.outsideAspectRatio"
              :lockAspectRatio="element.lockAspectRatio"
              @activated="onActivate(element, index)"
              @deactivated="onDeactivate(element, index)"
              @resizing="onResize"
              @resizestop="onResizeStop"
              @dragging="onDrag"
              @rotating="onRotating"
              @rotatestop="onRotateStop"
              :class="patternIndex == index ? 'activePattern' : ''"
            >
              <div class="icon-slot">
                <p
                  class="status"
                  v-show="patternIndex == index"
                >({{showPixel.x}},{{showPixel.y}})[{{showPixel.w}},{{showPixel.h}}]</p>
                <b class="order">{{ parseInt(index) + 1 }}</b>
              </div>
            </vdrr>
          </template>
        </div>
      </div>

      <div class="patternRight">
        <el-form :model="form" ref="form" label-width="auto">
          <el-form-item prop="width" label="纵横比">
            <el-checkbox v-model="elements[patternIndex].lockAspectRatio">锁定纵横比</el-checkbox>
          </el-form-item>
          <el-form-item prop="width" label="宽度">
            <el-slider
              size="mini"
              v-model="showPixel.w"
              :min="1"
              :max="windowSize.width"
              :step="1"
              show-input
              :show-tooltip="true"
            ></el-slider>
          </el-form-item>
          <el-form-item prop="height" label="高度">
            <el-slider
              size="mini"
              v-model="showPixel.h"
              :min="1"
              :max="windowSize.height"
              :step="1"
              show-input
              :show-tooltip="false"
            ></el-slider>
          </el-form-item>
          <el-form-item prop="x" label="水平">
            <el-slider
              size="mini"
              v-model="showPixel.x"
              :min="0"
              :max="windowSize.width - showPixel.w"
              :step="1"
              show-input
              :show-tooltip="false"
            ></el-slider>
          </el-form-item>
          <el-form-item prop="y" label="垂直">
            <el-slider
              size="mini"
              v-model="showPixel.y"
              :min="0"
              :max="windowSize.height - showPixel.h"
              :step="1"
              show-input
              :show-tooltip="false"
            ></el-slider>
          </el-form-item>
          <el-form-item>
            <el-button size="mini" type="danger" @click="patternReset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'demo1',
  props: {
    model: {
      type: [Object, Array, String]
    }
  },
  data() {
    return {
      AspectRatioArray: [
        { label: '1:1', value: 1 },
        { label: '4:3', value: 1.33333 },
        { label: '16:9', value: 1.77777 },
      ],
      init: false,
      visible: true,
      mainWidth: 576,
      mainHeight: 324,
      patternIndex: 0,
      showPixel: {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      },
      elements: [
        {
          x: 0,
          y: 0,
          width: 100,
          height: 100,
          rotate: 90,
          resolution: 1
        }
      ],
      form: {
        name: '',
        width: '',
        height: '',
        x: '',
        y: '',
        rotate: ''
      },
      marks: {
        50: ''
      },
      windowSize: {
        width: 800,
        height: 600
      },
      cropperTemplateList: [],
      cropperTemplateActive: '',
      resetData: {},
      resolution: 1,
      resolutionArray: [
        {
          id: 1,
          label: '1080p',
          value: {
            width: 1920,
            height: 1080
          }
        },
        {
          id: 2,
          label: '720P',
          value: {
            width: 1280,
            height: 720
          }
        }
      ]
    };
  },
  watch: {
    model: {
      handler(newV, oldV) {
        this.model = newV;
      },
      immediate: true
    },
    resolution: {
      handler(newV) {
        this.elements[this.patternIndex].resolution = newV;
      }
    },
    patternIndex: {
      handler(newV) {
        this.showPixel.w = Math.round((this.elements[this.patternIndex].width * this.windowSize.width) / 100);
        this.showPixel.h = Math.round((this.elements[this.patternIndex].height * this.windowSize.height) / 100);
        this.showPixel.x = Math.round((this.elements[this.patternIndex].x * this.windowSize.width) / 100);
        this.showPixel.y = Math.round((this.elements[this.patternIndex].y * this.windowSize.height) / 100);
        this.resolution = this.elements[this.patternIndex].resolution;
      }
    },
    elements: {
      // 像素值跟随百分比改变
      handler(newV) {
        this.showPixel.w = Math.round((this.elements[this.patternIndex].width * this.windowSize.width) / 100);
        this.showPixel.h = Math.round((this.elements[this.patternIndex].height * this.windowSize.height) / 100);
        this.showPixel.x = Math.round((this.elements[this.patternIndex].x * this.windowSize.width) / 100);
        this.showPixel.y = Math.round((this.elements[this.patternIndex].y * this.windowSize.height) / 100);
      },
      deep: true
    },
    showPixel: {
      // 百分比跟随像素改变
      handler(newV) {
        this.elements[this.patternIndex].width = Number(((this.showPixel.w * 100) / this.windowSize.width).toFixed(3));
        this.elements[this.patternIndex].height = Number(((this.showPixel.h * 100) / this.windowSize.height).toFixed(3));
        this.elements[this.patternIndex].x = Number(((this.showPixel.x * 100) / this.windowSize.width).toFixed(3));
        this.elements[this.patternIndex].y = Number(((this.showPixel.y * 100) / this.windowSize.height).toFixed(3));
      },
      deep: true
    }
  },
  created() {
    this.getData();
    this.getTemplate();
  },
  mounted() {
    this.init = true;
  },
  methods: {
    getData() {
      this.$http.getCropperData().then(res => {
        let data = res.data.data;
        data = {
          output: 1,
          windowSize: {
            width: 576,
            height: 324
          },
          position: [
            {
              y: 0,
              x: 0,
              height: 60,
              width: 60,
              rotate: 0,
              resoution: 1,
              lockAspectRatio: false,
              outsideAspectRatio: 1.77
            },
            {
              y: 50,
              x: 50,
              height: 50,
              width: 50,
              rotate: 0,
              resoution: 1,
              lockAspectRatio: false,
              outsideAspectRatio: 1.77
            }
          ]
        }
        this.windowSize = data.windowSize;
        this.elements = JSON.parse(JSON.stringify(data.position));
        this.resetData = JSON.parse(JSON.stringify(this.elements)); //存储备份数据
      });
    },
    getTemplate() {
      this.$http.getCropperTemplate().then(res => {
        this.cropperTemplateList = res.data.data;
      });
    },
    // 切换模板
    cropperTabHandle(val) {
      this.init = false;
      this.$nextTick(() => {
        this.init = true;
      });
      this.elements = JSON.parse(JSON.stringify(this.cropperTemplateList[val].position));
    },
    // 提交数据
    submitOk() {
      let params = {
        name: this.form.name,
        data: this.elements,
        img_id: this.patternImgid
      };
      console.log(params);
      this.handleClose();
    },
    handleClose() {
      this.$emit('change', false);
    },
    // 传入组件的数值 像素值 取整  传入值 0.25
    dragWX(val) {
      return Math.round((val * this.mainWidth) / 100);
    },
    dragHY(val) {
      return Math.round((val * this.mainHeight) / 100);
    },
    // 返回接口的数值 百分比 取两位小数 传入值示例 150
    resizeWX(val) {
      return Number(((val / this.mainWidth) * 100).toFixed(3));
    },
    resizeHY(val) {
      return Number(((val / this.mainHeight) * 100).toFixed(3));
    },
    // 用于调整宽度和高度
    changeWidth(ele, val) {
      let width = Number((100 / val).toFixed(2));
      ele.width = width;
      if (ele.x > 100 - width) ele.x = 100 - width;
    },
    changeHeight(ele, val) {
      let height = Number((100 / val).toFixed(2));
      ele.height = height;
      if (ele.y > 100 - height) ele.y = 100 - height;
    },
    changeX(ele, val) {
      let x = Number((100 / val).toFixed(2));
      ele.x = x;
    },
    changeY(ele, val) {
      let y = Number((100 / val).toFixed(2));
      ele.y = y;
    },
    // 调整角度
    changeAngle(ele, angle) {
      ele.rotate = (ele.rotate + angle + 360) % 360;
    },
    changeResolution() { },
    onActivate: function (element, index) {
      this.patternIndex = index;
    },
    onDeactivate: function (element, index) {
      this.patternIndex = index;
    },
    onResize: function (x, y, width, height) {
      this.elements[this.patternIndex]['x'] = this.resizeWX(x);
      this.elements[this.patternIndex]['y'] = this.resizeHY(y);
      this.elements[this.patternIndex]['width'] = this.resizeWX(width);
      this.elements[this.patternIndex]['height'] = this.resizeHY(height);
    },
    onResizeStop: function (x, y, width, height) {
      this.elements[this.patternIndex]['x'] = this.resizeWX(x);
      this.elements[this.patternIndex]['y'] = this.resizeHY(y);
      this.elements[this.patternIndex]['width'] = this.resizeWX(width);
      this.elements[this.patternIndex]['height'] = this.resizeHY(height);
    },
    onDrag: function (x, y) {
      this.elements[this.patternIndex]['x'] = this.resizeWX(x);
      this.elements[this.patternIndex]['y'] = this.resizeHY(y);
    },
    onRotating: function (angle) {
      this.elements[this.patternIndex]['rotate'] = angle;
    },
    onRotateStop: function (angle) {
      this.elements[this.patternIndex]['rotate'] = angle;
    },
    patternReset() {
      this.init = false;
      this.$nextTick(() => {
        this.init = true;
      });
      this.elements = JSON.parse(JSON.stringify(this.resetData)); //读取备份数据
    }
  }
};
</script>
