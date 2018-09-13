export const commentsMutations =  {
	// data(){
	// 	return{
	// 		olar:'olar'
	// 	}
	// },
	methods: {
		decodeComments(comments){
			for(var key in comments) {
				for(var key2 in comments[key]){
					if(key2 == 'commentcontext' || key2 == 'content' || key2 == 'name'){
						comments[key][key2] = decodeURIComponent(escape(comments[key][key2]))
					}
				}
			}
		}
	}
}