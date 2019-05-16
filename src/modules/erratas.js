import api from '@/utils/api'

const state = {
	erros: [],
	fetching: false,
	erro: {
		status: false,
		msg: null
	}
}
const getters = { }
const actions = {
	fetchErrata (commit, obj) {
		api.get(obj.self.$store.getters.apiPath + 'erratas/v1?id=' + obj.id)
			.then(response => {
				obj.self.$store.commit('erratas/FETCHING_STATE', true)
				obj.self.$store.commit('erratas/FILL_ERROS', response.data.erros)
			})
			.catch(e => {
				obj.self.$store.commit('erratas/CHANGE_ERROR_STATUS', true)
				obj.self.$store.commit('erratas/CHANGE_ERROR_MSG', e)
			})
			.then(obj.self.$store.commit('erratas/FETCHING_STATE', false))
	}
}
const mutations = {
	FETCHING_STATE (state, fetchState) { state.fetching = fetchState },
	CHANGE_ERROR_STATUS (state, inputValue) { state.erro.status = inputValue },
	CHANGE_ERROR_MSG (state, inputValue) { state.erro.msg = inputValue },
	FILL_ERROS (state, input) { state.erros = input }
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
