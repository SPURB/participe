import Vue from 'vue'
import Vuex from 'vuex'
import Es6Promise from 'es6-promise'
import axios from 'axios'
import { local, homologacao, producao } from '../apiconfig.json'
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
		fetching: true
	},
	getters: {
		enviroment () {
			if (
				location.port === '8082' ||
				location.port === '8081' ||
				location.port === '8080' ||
				location.port === '7080') {
				return 'local'
			}
			if (location.host === 'participe.comunicacao.smul.pmsp') {
				return 'homologacao'
			} else {
				return 'production'
			}
		},
		apiPath () {
			switch (store.getters.enviroment) {
			case 'local': return local.base
			case 'homologacao': return homologacao.base
			default: return producao.base
			}
		},
		apiLogin () {
			switch (store.getters.enviroment) {
			case 'local': return local.login
			case 'homologacao': return homologacao.login
			default: return producao.login
			}
		},
		basePath () {
			switch (store.getters.enviroment) {
			case 'local': return 'http://spurbsp163:7080/participe/'
			case 'homologacao': return 'http://participe.comunicacao.smul.pmsp/'
			case 'producao': return 'https://participe.gestaourbana.prefeitura.sp.gov.br/'
			}
		}
	},
	mutations: {
		FETCHING_STATE (state, fetchState) {
			state.fetching = fetchState
		},
		FETCHING_ERROR (state, errorState) {
			state.errors = errorState
		},
		adminStatus (state, status) {
			state.isAdmin = status
		},
		addAdminInfo (state, info) {
			state.infoAdmin = info
		},
		FETCH_CONSULTAS (state, consultas) {
			state.consultas = consultas.sort(function (a, b) {
				return new Date(b.dataCadastro) - new Date(a.dataCadastro)
			})
				.sort(function (a, b) {
					if (a.ativo < b.ativo) { return 1 }
					if (a.ativo > b.ativo) { return -1 }
				})
			commit('FETCHING_STATE', false)
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
		}
	},
	actions: {
		fetchConsultas ({ commit }, { self }) {
			axios.get(store.getters.apiPath + 'consultas')
				.then(response => {
					commit('FETCH_CONSULTAS', response.data.slice().reverse())
					commit('FETCH_CONSULTAS_DECODE', store.state.consultas)
					commit('FETCHING_STATE', true)
					if (self.estaConsulta !== undefined) {
						self.filterConsultas()
					}
				})
			// .catch(e => { store.state.errors.push(e) })
				.catch(e => {
					console.log(e)
					if (e.lineNumber > 399) {
						commit('FETCHING_ERROR', true)
						commit('FETCHING_STATE', false)
					} else {
						commit('FETCHING_ERROR', false)
						commit('FETCHING_STATE', false)
					}
				})
		}
	}
})
export default store
