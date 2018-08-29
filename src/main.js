// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import { store } from './store/store'
import VeeValidate, { Validator } from 'vee-validate';
import pt_br from 'vee-validate/dist/locale/pt_BR';

import axios from 'axios'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VeeValidate)
Vue.use(axios)

Validator.localize('pt_br', pt_br);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
})
