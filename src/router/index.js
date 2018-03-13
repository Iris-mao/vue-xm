import Vue from 'vue'
import Router from 'vue-router'
//1、 定义组件，从其他文件import进来
import layout from '../components/layout'

Vue.use(Router)

//2、定义路由对象，每个路由应该映射一个组件
const routes =[
  {
    path:'/',
    component:layout
  }
]

//3、创建 router 实例，然后转 `routes` 配置
const router = new Router({
  mode: 'history',
  routes
})

//4、创建和挂载路由，从而让整个应用都有路由功能
export default router
