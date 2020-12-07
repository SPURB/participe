import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'

// plugins necessários pro teste
import VeeValidate, { Validator } from 'vee-validate'
import ptbr from 'vee-validate/dist/locale/pt_BR'

// componente que vai, de fato, ser testado
import Comments from '@/components/Comments.vue'


// tem que osar o createLocalVue() pq esse componente usa plugins, e é necessário linkar o plugin à instancia
const localVue = createLocalVue()
localVue.use(VeeValidate, { inject: false }) // para não injetar em todos os componentes
localVue.use(Vuex)

Validator.localize('pt_br', ptbr)

describe('Comments.vue', () => {
	it('Call checkName() method on .action click', () => {

		const store = new Vuex.Store({
			getters: {
				consultasClicada: () => {
					return { ativo: "1"}
				}
			}
		})

		// o jest.fn() cria uma função rastreável pelo teste, e vou sobrepor a checkName que tá no mixin, 
		// pq quero ver se, ao clicar no botão de submit, se ele chama corretamente a checkName
		const checkName = jest.fn(); 

		const wrapper = shallowMount(Comments, {
			store,
			localVue,
			propsData: { 
				attr: {
					id: 1, 
					context:'Component test'
				}
			},
			methods: {
				checkName
			}
		})

		wrapper.find("a.action__button").trigger("click");
		expect(checkName).toBeCalled()
	})
})
