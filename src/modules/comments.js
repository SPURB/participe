import api from '@/utils/api'
import apiWpCustom from '@/utils/apiWpCustom'

const state = {
	fetching: false,
	commentsLoaded: false,
	comments: [],
	extCommentsNumber: 0,
	idsNoticias: [],
	error: {
		status: false,
		msg: null
	}
}
const getters = { }
const actions = {
	async fetchIdsNoticias (commit, loader) {
		let response = await apiWpCustom.get(process.env.VUE_APP_API_WP_CUSTOM + 'consultasNoticias')
		loader.self.$store.commit('comments/FILL_IDSNOTICIAS', response.data.filter(obj => obj.idConsulta == loader.id))
	},
	async fetchComments (commit, loader) {
		let noticiasIds = loader.noticiasIds.map(obj => obj.idNoticia)
		try {
			loader.self.$store.commit('comments/SET_FETCHING_STATE', true)
			let inCom = await api.get(process.env.VUE_APP_API_URL + 'v2/members/?id_consulta=' + loader.id + '&public=1')
			loader.self.$store.commit('comments/FILL_COMMENTS', { res: inCom.data, origin: 'internal' })
			noticiasIds.map(id => {
				api.get(process.env.VUE_APP_API_URL + `wp-custom/v1/?noticia-comments=${id}`)
					.then(response => {
						loader.self.$store.commit('comments/FILL_COMMENTS', { res: response.data, origin: 'external' })
						loader.self.$store.commit('comments/EXTCOMMENTS_NUMBER', response.data.length)
					})
			})
		} catch (error) {
			loader.self.$store.commit('comments/SET_ERROR_STATUS', true)
			loader.self.$store.commit('comments/SET_ERROR_MSG', error.message)
		} finally {
			loader.self.$store.commit('comments/SET_FETCHING_STATE', false)
			loader.self.$store.commit('comments/SET_COMMENTS_LOADED', true)
		}
	}
}
const mutations = {
	SET_FETCHING_STATE (state, newState) { state.fetching = newState },
	SET_ERROR_STATUS (state, newState) { state.error.status = newState },
	SET_ERROR_MSG (state, newMsg) { state.error.msg = newMsg },
	FILL_COMMENTS (state, payload) {
		if (Object.keys(payload.res).length > 0) {
			if (payload.origin === 'internal') {
				payload.res[0].map(comment => {
					let temp = comment
					temp.commentcontext = encodeURIComponent(escape(temp.commentcontext))
					temp.content = encodeURIComponent(escape(temp.content))
					temp.name = encodeURIComponent(escape(temp.name))
					state.comments.push(temp)
				})
			} else if (payload.origin === 'external') {
				payload.res.map(comment => {
					let temp = {}
					temp.content = decodeURIComponent(escape(comment.content))
					temp.commentdate = decodeURIComponent(escape(comment.date))
					temp.name = decodeURIComponent(escape(comment.name))
					temp.commentcontext = 'noticia'
					temp.urlNoticia = decodeURIComponent(escape(comment.post_slug))
					state.comments.push(temp)
				})
			}
		} else {
			state.comments = []
		}
		return state.comments
	},
	SET_COMMENTS_LOADED (state, newState) { state.commentsLoaded = newState },
	FILL_IDSNOTICIAS (state, newArr) { state.idsNoticias = newArr },
	EXTCOMMENTS_NUMBER (state, n) { state.extCommentsNumber += n }
}
export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
