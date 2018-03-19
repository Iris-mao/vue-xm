// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 按需引入Echarts
import ECharts from 'vue-echarts/components/ECharts.vue'
import 'echarts/lib/chart/line'

Vue.use(ElementUI)

Vue.component('chart', ECharts)

const app = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

export default app
