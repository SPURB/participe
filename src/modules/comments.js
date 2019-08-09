import api from '@/utils/api'

const state = {
	fetching: false,
	comments: {},
	error: {
		status: false,
		msg: null
	}
}
const getters = { }
const actions = {
	fetchComments (commit, loader) {
		api.get(process.env.VUE_APP_API_URL + 'v2/members/?id_consulta=' + loader.id + '&public=1')
			.then(response => {
				loader.self.$store.commit('comments/SET_FETCHING_STATE', true)
				loader.self.$store.commit('comments/FILL_COMMENTS', response.data)
			})
			.catch(error => {
				loader.self.$store.commit('comments/SET_ERROR_STATUS', true)
				loader.self.$store.commit('comments/SET_ERROR_MSG', error)
			})
			.then(loader.self.$store.commit('comments/SET_FETCHING_STATE', false))
	}
}
const mutations = {
	SET_FETCHING_STATE (state, newState) { state.fetching = newState },
	SET_ERROR_STATUS (state, newState) { state.error.status = newState },
	SET_ERROR_MSG (state, newMsg) { state.error.msg = newMsg },
	FILL_COMMENTS (state, res) {
		if (Object.keys(res).length > 0) {
			state.comments = { ...res[0] }
		} else {
			state.comments = []
		}
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
