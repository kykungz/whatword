import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-awesome/icons'

import Icon from 'vue-awesome/components/Icon'

Vue.component('icon', Icon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
