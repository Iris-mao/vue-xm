import Vue from 'vue'
import Router from 'vue-router'
//1、 定义组件，从其他文件import进来
import layout from '../components/layout'
import card from '../components/menu/card.vue'
import chart from '../components/menu/chart.vue'
import table from '../components/menu/table.vue'
import apps from '../components/menu/apps.vue'
import key from '../components/menu/keys.vue'

Vue.use(Router)

//2、定义路由对象，每个路由应该映射一个组件
const routes =[
  {
    path: '/',
    redirect: '/card',
  },
  {
    path: '/',
    component: layout,
    children: [{
      path: 'card',
      component:card
    },{
      path: 'chart',
      component: chart
    },{
      path: 'table',
      component: table
    },{
      path: 'app',
      component: apps
    },{
      path: 'key',
      component: key
    }]
  }
]

//3、创建 router 实例，然后转 `routes` 配置
const router = new Router({
  mode: 'history',
  routes
})

//4、创建和挂载路由，从而让整个应用都有路由功能
export default router
