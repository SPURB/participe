import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import { local, prod } from '../../apiconfig.json'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		menuToggle: false,
		apoioToggle: false,
		luzApaga: false,
		consultas: undefined,
		errors: undefined,
		commentsLoaded: false,
		isAdmin: false,
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
		}
	},
	mutations:{
		FETCH_CONSULTAS(state, consultas) {
			state.consultas = consultas.sort(function(a,b) {
				if (a.ativo < b.ativo) { return 1 }
				if (a.ativo > b.ativo) { return -1 }
			})
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