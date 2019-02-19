import Vue from 'vue'
import Vuex from 'vuex'
import Es6Promise from 'es6-promise'
import api from '@/utils/api'

Es6Promise.polyfill()

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		menuToggle: false,
		apoioToggle: false,
		luzApaga: false,
		consultas: undefined,
		errors: undefined,
		commentsLoaded: false,
		modalState: {
			error: false,
			success: false
		},
		isAdmin: false,
		infoAdmin: undefined,
		fetching: true,
		routeId: undefined,
		toPrint: false
	},
	getters: {
		apiPath () { return process.env.VUE_APP_API_URL },
		apiLogin () { return process.env.VUE_APP_API_LOGIN_URL },
		basePath () { return process.env.VUE_APP_ASSETS_BASE_URL },
		consultasClicada (state) {
			if (state.consultas !== undefined) {
				return state.consultas.find(consulta => parseInt(consulta.id_consulta) === state.routeId)
			} else { return 'not Clicked' }
		}
	},
	mutations: {
		SET_ROUTE_ID (state, routeId) { state.routeId = routeId },
		FETCHING_STATE (state, fetchState) { state.fetching = fetchState },
		FETCHING_ERROR (state, errorState) { state.errors = errorState },
		adminStatus (state, status) { state.isAdmin = status },
		addAdminInfo (state, info) { state.infoAdmin = info },
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
		COMMENT_MODAL_STATUS (state, typeOfmodal) {
			switch (typeOfmodal) {
			case 'error': state.modalState.error = !state.modalState.error; break
			case 'success': state.modalState.success = !state.modalState.success; break
			default:
				state.modalState.error = false
				state.modalState.success = false
			}
		},
		DISPATCH_PRINT (state) {
			state.toPrint = !state.toPrint
			return state.toPrint
		},
		PRINT () {
			window.print()
		}
	},
	actions: {
		fetchConsultas ({ commit }, { self }) {
			api.get(store.getters.apiPath + 'consultas')
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
