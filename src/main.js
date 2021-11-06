import Vue from 'vue'
import ECharts from 'echarts'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
