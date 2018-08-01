import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		menuToggle: false,
		luzApaga: false,
		consultas: undefined,
		// list: unde
	}
	// actions:{
	// 	LOAD_COMMENTS_LIST: function({ commit }) {
	// 		axios.get('http://spurbsp163:7080/apiconsultas/')
	// 		.then(response => {
	// 			this.$store.state.consultas = response.data.slice().reverse()
	// 		})
	// 	},
	// }, 
	// mutations:{	
	// 	SET_COMMENTS_LIST: (state, { list }) => {
	// 		state.allcomments = list;
	// 	}
	// },
})