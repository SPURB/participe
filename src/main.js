import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VeeValidate, { Validator } from 'vee-validate'
import ptbr from 'vee-validate/dist/locale/pt_BR'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VeeValidate, { inject: false }) // para não injetar em todos os componentes
Validator.localize('pt_br', ptbr)

Vue.use(VueAxios, axios)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
