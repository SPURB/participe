import Vue from 'vue'
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
import Vuex from 'vuex'
import axios from 'axios';
import { local, homologacao, prod } from '../../apiconfig.json';

Vue.use(Vuex)

export const store = new Vuex.Store({
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
		}
	},
	getters:{
		enviroment(){
			if( location.port == '8080' ||
				location.port == '8082' ||
				location.port == '8081' ||
				location.port == '7080'){
				return 'local'
			}
			if( location.host == 'participe.comunicacao.smul.pmsp' ){
				return 'homologacao'
			}
			else {
				return 'production'
			}
		},
		apiPath() {
			switch(store.getters.enviroment){
				case 'local': return local.base; break
				case 'homologacao': return homologacao.base; break
				default: return producao.base
			}
		},
		apiLogin(){
			switch(store.getters.enviroment){
				case 'local': return local.login; break
				case 'homologacao': return homologacao.login; break
				default: return producao.login
			}
		},
		basePath(){
			if (store.getters.enviroment == 'local' || store.getters.enviroment == 'homologacao'){
				return 'http://participe.comunicacao.smul.pmsp/'
			} else {
				return 'http://participe.gestaourbana.prefeitura.sp.gov.br/'
			}
		}
	},
	mutations:{
		FETCH_CONSULTAS(state, consultas) {
			state.consultas = consultas.sort(function(a,b) {
				if (a.ativo < b.ativo) { return 1 }
				if (a.ativo > b.ativo) { return -1 }
			})
		},
		COMMENT_MODAL_STATUS(state, typeOfmodal){
			switch(typeOfmodal){
				case 'error': state.modalState.error = !state.modalState.error; break
				case 'success': state.modalState.success = !state.modalState.success; break
				default:
					state.modalState.error = false
					state.modalState.success = false
			}
		}
	}, 
	actions: {
		fetchConsultas({ commit }, { self }){
			axios.get(store.getters.apiPath + 'consultas')
				.then(response => { 
					commit("FETCH_CONSULTAS", response.data.slice().reverse());
					self.filterConsultas();
				})
				.catch(e => { state.errors.push(e) }) 
		}
	}
})