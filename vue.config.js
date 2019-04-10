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
	},

	pluginOptions: {
		prerenderSpa: {
			registry: undefined,
			renderRoutes: [
				'/',
				'/anhembi2',
				'/arco-pinheiros',
				'/wifi-livre-sp',
				'/digilab-livre-sp',
				'/vida-segura',
				'/vila-leopoldina-projeto-de-lei',
				'/portal-prefeitura',
				'/governo-aberto',
				'/concessao-martinelli'
			],
			useRenderEvent: true,
			headless: true,
			onlyProduction: true
		}
	},
	pwa: {
		themeColor: '#EB5757',
		workboxPluginMode: 'InjectManifest',
		workboxOptions: {
			swSrc: './src/sw.js',
			swDest: 'service-worker.js'
		}
	}
}
