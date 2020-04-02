import api from '@/utils/api'
import router from '../../router'

const state = {
	comments: ''
}

const actions = {
	loadThisComments ({ commit, rootState }) {
		let currentContext = rootState.threadComments.thread.id
		let showThread = rootState.threadComments.showThread
		let url = ''

		if (currentContext !== null && showThread !== false) {
			url = `?idConsulta=${router.currentRoute.meta.id}&commentid=${currentContext}`
			api.get(`members/${url}&public=1`)
				.then(response => {
					commit('setCommentsLoader', response.data)
				})
				.catch(error => console.error(error))
		} else {
			url = `?idConsulta=${router.currentRoute.meta.id}`
			api.get(`members/${url}&public=1`)
				.then(response => {
					commit('setCommentsLoader', response.data)
				})
				.catch(error => console.error(error))
		}
	}
}

const getters = {
	comments (state) {
		return state.comments
	}
}

const mutations = {
	setCommentsLoader (state, payload) {
		state.comments = payload
	}
}

export default {
	namespaced: true,
	state,
	actions,
	getters,
	mutations
}
