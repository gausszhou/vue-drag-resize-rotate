import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 获取 views 文件夹下的所有.vue文件
const viewContext = require.context("@/views", true, /.vue$/);

// 遍历生成路由
let routerArr = []
viewContext.keys().forEach(value => {
  const path = value.substr(value.indexOf('/'), value.lastIndexOf('.') - 1)
  const componentLocation = value.substr(value.indexOf('.') + 1, value.lastIndexOf('.') - 1)
  const componentName = componentLocation.substr(componentLocation.lastIndexOf('/') + 1)
  routerArr.push({
    path: path,
    name: componentName,
    component: () => import(/* webpackChunkName: "alarm" */ `../views${componentLocation}`)
  })
})

//合并公共路由以及重定向规则
const routes = [{
  path: '/',
  redirect: { name: 'basic-basic-component' }
},
...routerArr,
{
  path: '*',
  component: () => import('@/views/404.vue'),
}
];

// 路径自动获取函数(部署Gitee项目时需要) 
function getAbsolutePath() {
  let path = location.pathname;
  return path.substring(0, path.lastIndexOf("/") + 1);
}
// 最后创建路由对象，设置切换方式，设置路由得base，导入路由表
const router = new VueRouter({
  // 使用什么方式切换路由
  mode: "hash", //  history  hash
  // vue-router里提供了一个base的属性，代表应用的基目录
  base: getAbsolutePath(),
  routes
});

// 导出路由
export default router;
