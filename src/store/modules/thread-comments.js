const state = {
	thread: {
		id: null,
		context: null,
		conteudo: null
	},
	showThread: false
}

const actions = {
	setThread ({ commit }, payload) {
		commit('setThread', payload)
	},
	setShowThread ({ commit }, payload) {
		commit('setShowThread', payload)
	}
}

const getters = {
	threadContent (state) {
		return state.thread
	},
	showThread (state) {
		return state.showThread
	}
}

const mutations = {
	setThread (state, payload) {
		state.thread = payload
	},
	setShowThread (state, payload) {
		state.showThread = payload
	}
}

export default {
	namespaced: true,
	state,
	actions,
	getters,
	mutations
}
