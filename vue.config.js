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
				'/plano-cicloviario',
				'/setor-central-2',
				'/parque-minhocao',
				'/minuta-arco-pinheiros',
				'/politica-municipal-turismo',
				'/pdp-ibirapuera',
				'/parque-lajeado',
				'/parque-dos-eucaliptos',
				'/parque-jacinto-alberto',
				'/parque-jardim-felicidade',
				'/parque-brigadeiro-faria-lima',
				'/tr-156',
				'/premia-sampa-edicao-2020',
				'/carnaval-de-rua-2020',
				'/arco-tiete',
				'/jockey-club',
				'/minuta-piu-setor-central',
				'/tr-contact-center',
				'/pmadrss',
				'/arco-tiete-2',
				'/ginasio-ibirapuera',
				'/jockey-club-2',
				'/jockey-club-2/minuta'
			],
			useRenderEvent: true,
			headless: false,
			onlyProduction: true,
			maxConcurrentRoutes: 1
		}
	},
	runtimeCompiler: true
}
