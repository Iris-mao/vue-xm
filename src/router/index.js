import Vue from 'vue'
import Router from 'vue-router'
//1、 定义组件，从其他文件import进来
import layout from '../components/layout'
import user from '../components/menu/user.vue'
import service from '../components/menu/service.vue'
import source from '../components/menu/source.vue'
import apps from '../components/menu/apps.vue'
import key from '../components/menu/keys.vue'

Vue.use(Router)

//2、定义路由对象，每个路由应该映射一个组件
const routes =[
  {
    path: '/',
    redirect: '/user',
  },
  {
    path: '/',
    component: layout,
    children: [{
      path: 'user',
      component:user
    },{
      path: 'service',
      component: service
    },{
      path: 'source',
      component: source
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
