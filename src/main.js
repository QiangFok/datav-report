import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ECharts from 'echarts'
import VueECharts from 'vue-echarts'
import './plugins/element.js'
import './plugins/vcharts'
import './style/index.css'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
Vue.component('v-chart', VueECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
