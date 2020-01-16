import Vue from 'vue'
import Vuex from 'vuex'
import Es6Promise from 'es6-promise'
import api from '@/utils/api'
import erratas from '@/modules/erratas'

Es6Promise.polyfill()

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		erratas: erratas
	},
	state: {
		menuToggle: false,
		apoioToggle: false,
		luzApaga: false,
		consultas: undefined,
		errors: undefined,
		commentsLoaded: false,
		fetching: true,
		routeId: undefined,
		toPrint: false
	},
	getters: {
		basePath () { return process.env.VUE_APP_ASSETS_BASE_URL },
		consultasClicada (state) {
			if (state.consultas !== undefined) {
				return state.consultas.find(consulta => parseInt(consulta.idConsulta) === state.routeId)
			} else { return 'not Clicked' }
		}
	},
	mutations: {
		SET_ROUTE_ID (state, routeId) { state.routeId = routeId },
		FETCHING_STATE (state, fetchState) { state.fetching = fetchState },
		FETCHING_ERROR (state, errorState) { state.errors = errorState },
		FETCH_CONSULTAS (state, consultas) {
			state.consultas = consultas.sort(function (a, b) {
				return new Date(b.dataCadastro) - new Date(a.dataCadastro)
			})
				.sort(function (a, b) {
					if (a.ativo < b.ativo) { return 1 }
					if (a.ativo > b.ativo) { return -1 }
				})
		},
		FETCH_CONSULTAS_DECODE (state, consultas) {
			for (var key in consultas) {
				for (var key2 in consultas[key]) {
					if (key2 === 'textoIntro' || key2 === 'nomePublico') {
						consultas[key][key2] = decodeURIComponent(escape(consultas[key][key2]))
					}
				}
			}
		},
		DISPATCH_PRINT (state) {
			state.toPrint = !state.toPrint
			return state.toPrint
		},
		PRINT () { window.print() },
		TOGGLE_APOIO (state) {
			state.apoioToggle = !state.apoioToggle
			state.luzApaga = !state.luzApaga
		}
	},
	actions: {
		fetchConsultas ({ commit }, { self }) {
<<<<<<< HEAD
			api.get(process.env.VUE_APP_API_URL + 'v2/' + 'consultas')
=======
			api.get(`v3/consultas`)
>>>>>>> chore(api): finaliza arco-tiete-2 e altera tudo para apiv3
				.then(response => {
					commit('FETCH_CONSULTAS', response.data.slice().reverse())
					commit('FETCH_CONSULTAS_DECODE', store.state.consultas)
					commit('FETCHING_STATE', true)
					if (self.estaConsulta !== undefined) {
						self.filterConsultas()
					}
				})
				.catch(e => {
					console.error(e)
					commit('FETCHING_ERROR', true)
				})
				.then(() => commit('FETCHING_STATE', false))
		},
		imprime ({ commit }) {
			return new Promise(() => {
				commit('DISPATCH_PRINT')
				setTimeout(() => {
					window.print()
				}, 1)
				setTimeout(() => {
					commit('DISPATCH_PRINT')
				}, 2)
			})
		}
	}
})
export default store
