import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h (App),
}).$mount('#app')
