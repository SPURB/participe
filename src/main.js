// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import App from './App'
import { store } from './store/store'
import router from './router'
import VeeValidate from 'vee-validate'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Vuex);

Vue.use(VeeValidate)
Vue.use(axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
