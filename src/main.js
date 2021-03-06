import Vue from 'vue'
import App from './App.vue'
import router from "./router"

// 引入UI组件
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'

// 引入公共样式
import "./style/common.less"
import "./style/customize.less"
import "./style/markdown.less"
import "./style/highlight.less"

// 引入HTTP接口
import http from "./request/http"
Vue.prototype.$http = http

// 引入全局自定义组件
// import vdrr from "./components/vue-drag-resize"
import vdrr from "./components/vue-drag-resize-rotate"
Vue.component('vdrr', vdrr)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
