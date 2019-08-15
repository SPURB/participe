export const commentsMutations = {
	methods: {
		decodeComments (comments) {
			if (typeof (comments) !== 'object') { throw new Error('Parâmetro "comments" deve ser um objeto') }

			for (var key in comments) {
				for (var key2 in comments[key]) {
					if (key2 === 'commentcontext' || key2 === 'content' || key2 === 'name') {
						comments[key][key2] = decodeURIComponent(comments[key][key2])
					}
				}
			}

			return comments
		}
	}
}
