export const consultasMutations = {
	methods: {
		setUrlByType (urlOrSlug) {
			const regex = /^http/gm
			let isHttp = !!regex.exec(urlOrSlug)
			return isHttp ? urlOrSlug : this.$store.getters.basePath + '#/' + urlOrSlug
		}
	}
}
