import Vue from 'vue'
import App from './App.vue'
import router from "./router"

// 引入UI组件
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'

// 引入公共样式
import "./style/index.scss"

// 引入API接口
import api from "./api"
Vue.use(api)

// 引入全局自定义组件
import VueDragReSizeRotate from "./components/vue-drag-resize-rotate"
Vue.component('vue-drag-resize-rotate', VueDragReSizeRotate)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
