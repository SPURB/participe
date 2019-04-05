module.exports = {
	// publicPath: './participe/',
	// publicPath: './participe/dist/',
	lintOnSave: true,
	configureWebpack: {
		optimization: {
			splitChunks: {
				chunks: 'all'
			}
		}
	}
}
