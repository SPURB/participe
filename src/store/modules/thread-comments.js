const state = {
	thread: {}
}

const actions = {
	setThread ({ commit }, payload) {
		commit('setThread', payload)
	}
}
const mutations = {
	setThread (state, payload) {
		state.thread = payload
	}
}

export default {
	namespaced: true,
	state,
	actions,
	mutations
}
