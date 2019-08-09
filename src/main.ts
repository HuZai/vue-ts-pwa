import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import './elementInit'
import Component from 'vue-class-component'

import http from './utils/http'
Vue.config.productionTip = false
Vue.prototype.$https = http
var hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks');
require('viewport-units-buggyfill').init({
  hacks: hacks
});
router.beforeEach((to, from, next) => {
  console.log('router start')
  next()
})
Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
])

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
