module.exports = {
	lintOnSave: true,
	configureWebpack: {
		optimization: {
			splitChunks: {
				chunks: 'all'
			}
		}
	}
}
