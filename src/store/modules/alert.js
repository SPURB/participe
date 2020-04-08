const state = {
	show: false,
	type: 'error',
	message: '',
	icon: ''
}

const mutations = {
	SET: (state, payload) => {
		state.show = payload.show
		state.type = payload.type
		state.message = payload.message
		state.icon = payload.icon
	},
	RESET: (state) => {
		state.show = false
		state.type = 'error'
		state.message = ''
		state.icon = ''
	}
}

export default {
	namespaced: true,
	state,
	mutations
}
