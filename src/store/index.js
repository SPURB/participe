import Vue from 'vue'
import Vuex from 'vuex'
import Es6Promise from 'es6-promise'
import api from '@/utils/api'
import erratas from './modules/erratas'
import alert from './modules/alert'

Es6Promise.polyfill()

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		erratas,
		alert
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
				return state.consultas.find(consulta => consulta.idConsulta === state.routeId)
			} else { return 'not Clicked' }
		}
	},
	mutations: {
		SET_ROUTE_ID (state, routeId) { state.routeId = routeId },
		FETCHING_STATE (state, fetchState) { state.fetching = fetchState },
		FETCHING_ERROR (state, errorState) { state.errors = errorState },
		FETCH_CONSULTAS (state, consultas) {
			state.consultas = consultas
				.sort((a, b) => new Date(b.dataCadastro) - new Date(a.dataCadastro))
				.sort((a, b) => {
					if (a.ativo < b.ativo) { return 1 }
					if (a.ativo > b.ativo) { return -1 }
				})
				.map(consulta => {
					let parsedConsulta = consulta
					parsedConsulta.idConsulta = parseInt(consulta.idConsulta)
					parsedConsulta.ativo = parseInt(consulta.ativo)
					return parsedConsulta
				})
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
			api.get('consultas')
				.then(response => {
					commit('FETCH_CONSULTAS', response.data.slice().reverse())
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