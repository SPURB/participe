import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'
import VueQuillEditor from 'vue-quill-editor'

import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme

import ptbr from 'vee-validate/dist/locale/pt_BR'

import { ObserveVisibility } from 'vue-observe-visibility'
Vue.directive('observe-visibility', ObserveVisibility)

Vue.config.productionTip = false

Vue.use(VeeValidate, { inject: false }) // para não injetar em todos os componentes
Validator.localize('pt_br', ptbr)
Vue.use(VueQuillEditor, {
	modules: {
		toolbar: [
			['bold', 'italic', 'underline', 'strike']
		]
	},
	placeholder: 'Insira seu comentário aqui ...'
})

new Vue({
	router,
	store,
	render: h => h(App),
	mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
