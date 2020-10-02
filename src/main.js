import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VSwipe from 'vswipe'
Vue.use(VSwipe)

import Slider from '@/components/Slider'
Vue.component('slider', Slider)

import Alert from '@/components/Alert'
// import './registerServiceWorker'
Vue.component('alert', Alert)


import PopupRegistration from '@/components/PopupRegistration'
Vue.component('PopupRegistration', PopupRegistration)

import PopupRecovery from '@/components/PopupRecovery'
Vue.component('PopupRecovery', PopupRecovery)

import PopupConfirmPhone from '@/components/PopupConfirmPhone'
Vue.component('PopupConfirmPhone', PopupConfirmPhone)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
