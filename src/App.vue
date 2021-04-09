<template>
  <div id="app">
    <div id="menu" :style="style">
      <el-menu class="el-menu-dom" :default-active="active">
        <el-menu-item>
          <h1 class="text-center title">VDRR</h1>
        </el-menu-item>
        <el-submenu v-for="(item,index) in menuData" :key="index" :index="index+1+''">
          <template slot="title">
            <i :class="item.icon"></i>
            {{item.label}}
          </template>
          <el-menu-item
            v-for="(val,key) in item.children"
            :key="key"
            :index="index +1+ '-' + (key+1)"
            @click="goto(val)"
          >{{val.label}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <!-- 路由视图 -->
    <div id="view">
      <div class="drag-bar" ref="dragBar"></div>
      <router-view />
      <div class="markdown-render" id="write" v-html="markdownHTML"></div>
    </div>
    <githubWidget></githubWidget>
  </div>
</template>

<script>
import githubWidget from "@/widgets/github/index.vue"
import MarkdownIt from "markdown-it";
import hljs from "highlight.js"
export default {
  name: 'app',
  components:{
    githubWidget
  },
  data() {
    return {
      menuData: [
        {
          label: '基本  (新增)',
          icon: 'el-icon-menu',
          children: [
            { route: 'basic-basic-component', label: '基本组件' },
            { route: 'basic-with-auto-size', label: '自适应大小' },
            { route: 'basic-with-min-limit', label: '最小宽高限制' },
            { route: 'basic-with-max-limit', label: '最大宽高限制' },
            { route: 'basic-with-slots', label: '组件插槽 ' },
            { route: 'basic-with-active', label: ':active属性控制活动状态' },
            { route: 'basic-prevent-deactivation', label: ':prevent-deactivation阻止失活' },
            { route: 'basic-with-draggable', label: '是否允许拖动位置' },
            { route: 'basic-with-resizable', label: '是否允许调整大小' },
            { route: 'basic-with-rotatable', label: '是否允许旋转角度  (新增)' },
            { route: 'basic-enable-native-drag', label: '是否允许内部元素拖拽 ' },
            { route: 'basic-with-drag-handle', label: '限制允许拖动的范围 ' },
            { route: 'basic-with-drag-cancel', label: '限制禁止拖动的范围 ' },
            { route: 'basic-with-z-index', label: '控制组件的z-index' },
            { route: 'basic-with-handles', label: '控制拉伸手柄的数量' },
            { route: 'basic-with-axis', label: '限制运动轴' },
            { route: 'basic-with-user-select', label: '限制用户选择' },
          ]
        },
        {
          label: '网格对齐',
          icon: 'el-icon-s-grid',
          children: [
            { route: 'grid-20x20', label: '网格20x20' },
            { route: 'grid-20x40', label: '网格20x40' },
            { route: 'grid-20x20-with-offset-10x10', label: '网格20x20+偏移10x10' },
            { route: 'grid-20x40-with-offset-10x20-min', label: '网格20x40+偏移10x20+最小限制' },
            { route: 'grid-20x40-with-offset-10x20-max', label: '网格20x40+偏移10x20+最大限制' },
          ]
        },
        {
          label: '父级限制',
          icon: 'el-icon-c-scale-to-original',
          children: [
            { route: 'parent-basic-case', label: '父级容器基本案例' },
            { route: 'parent-with-auto-size', label: '父级+自适应' },
            { route: 'parent-with-max', label: '父级+最大限制' },
            { route: 'parent-with-grid', label: '父级+网格' },
            // { route: 'parent-with-rotate', label: '父级+旋转  (新增)' },
            { route: 'parent-with-grid-offset', label: '父级+网格+偏移' },
            { route: 'parent-with-grid-max', label: '父级+网格+最大限制' },
            { route: 'parent-with-outside-controlled', label: '父级+控制组件' },
          ]
        },
        {
          label: '纵横比  (新增)',
          icon: 'el-icon-picture',
          children: [
            { route: 'aspect-ratio-basic', label: '锁定纵横比 ' },
            { route: 'aspect-ratio-with-min', label: '纵横比+最小限制 ' },
            { route: 'aspect-ratio-with-max', label: '纵横比+最大限制 ' },
            { route: 'aspect-ratio-costrained-in-parent', label: '纵横比+父级容器限制 ' },
            { route: 'aspect-ratio-with-grid', label: '纵横比+对齐网格 ' },
            { route: 'aspect-ratio-with-grid-offset', label: '在偏移的网格上对齐 ' },
            { route: 'aspect-ratio-with-grid-parent', label: '在父级中对齐网格 ' },
            { route: 'aspect-outside', label: '外部传入纵横比参数  (新增)' },
          ]
        },
        {
          label: '样式',
          icon: 'el-icon-s-goods',
          children: [
            { route: 'style-component', label: 'Style 组件' },
            { route: 'style-dragging', label: 'Style 拖动' },
            { route: 'style-resizing', label: 'Style 拉伸' },
            { route: 'style-active', label: 'Style 活跃' },
            { route: 'style-handles', label: 'Style 句柄' },
            { route: 'style-handles-with-slots', label: 'Style 手柄插槽' },
          ]
        },

        {
          label: '事件  (新增)',
          icon: 'el-icon-warning',
          children: [
            { route: 'events-activated', label: '激活组件事件' },
            { route: 'events-dragging', label: '拖动位置事件' },
            { route: 'events-resizing', label: '调整大小事件' },
            { route: 'events-rotating', label: '旋转角度事件  (新增)' },
          ]
        },
        {
          label: '高级  (计划)',
          icon: 'el-icon-star-on',
          children: [
            { route: 'advanced-conflict-detection', label: '位置冲突检测' },
            { route: 'advanced-position-adsorption', label: '元素位置吸附' },
            { route: 'advanced-position-exact', label: '更高精度的对齐  (计划)' },
            { route: 'advanced-reference-line', label: '对齐时有辅助线' },
          ]
        },
        {
          label: '应用',
          icon: 'el-icon-star-off',
          children: [
            { route: 'application-multiple-drag', label: '同时拖动多个元素' }
          ]
        },
      ],
      active: '1-1',
      isDrag: false,
      widthX: 275,
      markdownRender: "",
      markdownHTML: ""
    };
  },
  computed: {
    style() {
      return {
        width: this.widthX + 'px'
      }
    }
  },
  watch: {
    '$route'(to, from) {
      let index = localStorage.getItem('index')
      if (index) this.active = index
      this.getMarkdown(to.path)
    }
  },
  created() {
    let width = localStorage.getItem('width')
    if (width) this.widthX = width;
    this.menuData.forEach((element, order) => {
      element.children.forEach((val, key) => {
        element.children[key].index = order + 1 + '-' + (key + 1)
      })
    });
  },
  mounted() {
    this.markdownRender = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        // 此处判断是否有添加代码语言
        if (lang && hljs.getLanguage(lang)) {
          try {
            // 得到经过highlight.js之后的html代码
            const preCode = hljs.highlight(lang, str, true).value
            // 以换行进行分割
            const lines = preCode.split(/\n/).slice(0, -1)
            // 添加自定义行号
            let html = lines.map((item, index) => {
              return '<li><span class="line-num" data-line="' + (index + 1) + '"></span>' + item + '</li>'
            }).join('')
            html = '<ol>' + html + '</ol>'
            // 添加代码语言
            if (lines.length) {
              html += '<b class="name">' + lang + '</b>'
            }
            return '<pre class="hljs"><code>' +
              html +
              '</code></pre>'
          } catch (__) { }
        }
      }
    })
    this.$refs.dragBar.onmousedown = (e) => {
      this.isDrag = true
    }
    document.onmouseup = (e) => {
      this.isDrag = false
    }
    document.onmousemove = (e) => {
      if (this.isDrag) {
        this.widthX = e.x
        localStorage.setItem('width', this.widthX)
      }
    }
  },
  methods: {
    goto(val) {
      if (this.$route.name != val.route) {
        this.$router.push({ name: val.route });
        localStorage.setItem('index', val.index)
      }
    },
    getMarkdown(path) {
      let params = path.slice(1);
      this.$http.getMarkdown(params).then(res => {
        this.markdownHTML = this.markdownRender.render(res.data)
      })
    }
  }
};
</script>

<style lang="less" scoped>
.title {
  margin-top: 0.5rem;
}
.markdown-render {
  width: 100%;
}
</style>
