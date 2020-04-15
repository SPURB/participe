import api from '@/utils/api'
import router from '../../router'

const state = {
	comments: [],
	isThread: false
}

const actions = {
	loadThisComments ({ commit, rootState }) {
		let currentContext = rootState.threadComments.thread.id
		let url = ''

		if (state.isThread && currentContext) {
			url = `?idConsulta=${router.currentRoute.meta.id}&commentid=${currentContext}&public=1`
		} else if (state.isThread && !currentContext) {
			url = ''
		} else {
			url = `?idConsulta=${router.currentRoute.meta.id}&public=1`
		}

		if (url !== '') {
			api.get(`members/${url}&public=1`)
				.then(response => commit('SET_COMMENTS_LOADER', response.data))
				.catch(error => console.error(error))
		}
	}
}

const mutations = {
	SET_COMMENTS_LOADER (state, payload) {
		state.comments = payload
	},
	IS_THREAD (state, payload) {
		state.isThread = payload
	}
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}
