module.exports = {
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
				'/concessao-martinelli',
				'/arco-pinheiros-2',
				'/plano-cicloviario'
			],
			useRenderEvent: true,
			headless: false,
			onlyProduction: true,
			maxConcurrentRoutes: 1
		}
	}
}
