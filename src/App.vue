<template>
  <div id="app">
    <div id="menu" :style="style">
      <el-menu class="el-menu-dom" :default-active="active">
        <el-submenu v-for="(item, index) in menuData" :key="index" :index="index + 1 + ''">
          <template slot="title">
            <i :class="item.icon"></i>
            {{ item.label }}
          </template>
          <el-menu-item
            v-for="(val, key) in item.children"
            :key="key"
            :index="index + 1 + '-' + (key + 1)"
            @click="goto(val)"
          >
            {{ val.label }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <!-- 路由视图 -->
    <div id="view">
      <div class="drag-bar" ref="dragBar"></div>
      <router-view />
      <div class="markdown-render" id="write" v-html="markdownHTML"></div>
    </div>
    <GithubBadge></GithubBadge>
  </div>
</template>

<script>
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import GithubBadge from "@/components/GithubBadge.vue";
import menuData from "./menuData";

export default {
  name: "app",
  components: {
    GithubBadge
  },
  data() {
    return {
      menuData: menuData,
      active: "1-1",
      isDrag: false,
      widthX: 275,
      markdownRender: {},
      markdownHTML: ""
    };
  },
  computed: {
    style() {
      return {
        width: this.widthX + "px"
      };
    }
  },
  watch: {
    $route(to, from) {
      this.getMarkdown(to.path);
    }
  },
  created() {
    let width = localStorage.getItem("width");
    if (width) this.widthX = width;
    this.processMenuData();
  },
  mounted() {
    this.handleDragBarEvent();
    this.createMarkdownRender();
  },
  methods: {
    goto(val) {
      if (this.$route.name != val.route) {
        this.$router.push({ name: val.route });
      }
    },
    processMenuData() {
      this.menuData.forEach((element, order) => {
        element.children.forEach((val, key) => {
          element.children[key].index = order + 1 + "-" + (key + 1);
        });
      });
    },
    handleDragBarEvent() {
      this.$refs.dragBar.onmousedown = e => {
        this.isDrag = true;
      };
      document.onmouseup = e => {
        this.isDrag = false;
      };
      document.onmousemove = e => {
        if (this.isDrag) {
          this.widthX = e.x;
          localStorage.setItem("width", this.widthX);
        }
      };
    },
    createMarkdownRender() {
      this.markdownRender = new MarkdownIt({
        html: true,
        linkify: true,
        typographer: true,
        highlight: function(str, lang) {
          // 此处判断是否有添加代码语言
          if (lang && hljs.getLanguage(lang)) {
            try {
              // 得到经过highlight.js之后的html代码
              const preCode = hljs.highlight(lang, str, true).value;
              // 以换行进行分割
              const lines = preCode.split(/\n/).slice(0, -1);
              // 添加自定义行号
              let html = lines
                .map((item, index) => {
                  return '<li><span class="line-num" data-line="' + (index + 1) + '"></span>' + item + "</li>";
                })
                .join("");
              html = "<ol>" + html + "</ol>";
              // 添加代码语言
              if (lines.length) {
                html += '<b class="name">' + lang + "</b>";
              }
              return '<pre class="hljs"><code>' + html + "</code></pre>";
            } catch (__) {}
          }
        }
      });
    },
    getMarkdown(path) {
      let params = path.slice(1);
      this.$http.getMarkdown(params).then(res => {
        this.markdownHTML = this.markdownRender.render(res.data);
      });
    }
  }
};
</script>

<style scoped>
.title {
  margin-top: 0.5rem;
}
.markdown-render {
  width: 100%;
}
</style>
