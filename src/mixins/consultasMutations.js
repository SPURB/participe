export const consultasMutations =  {
	methods: {
		setUrlByType(urlOrSlug){
			const regex = /^http/gm;
			let isHttp = regex.exec(urlOrSlug) ? true : false
			return isHttp ? urlOrSlug : this.$store.getters.basePath + '#/' + urlOrSlug
		}
	}
}