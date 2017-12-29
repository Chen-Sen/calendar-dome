// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)

Vue.prototype.$axios = axios

const store = new Vuex.Store({
  state: {
    dates: []
  },
  mutations: {},
  actions: {}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
router.push('/year')