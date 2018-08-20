import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		menuToggle: false,
		apoioToggle: false,
		luzApaga: false,
		consultas: undefined,
		errors: undefined,
		commentsLoaded: false
	},
	getters:{
		apiPath() {
			if(location.port == '8080' || location.port == '8082' || location.port == '7080'){
				return 'http://spurbsp163:7080/apiconsultas/' 
			}
			else{
				return 'http://participe.gestaourbana.prefeitura.sp.gov.br/apiconsultas/' 
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