import Vue from 'vue'
import Router from 'vue-router'

// Pages
const WifiLivreSP = () => import(/* webpackChunkName: "wifilivresp" */ '@/views/WifiLivreSP')

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/view-teste',
			name: 'ViewTeste',
			meta: {
				id: 16
			},
			component: () => import(/* webpackChunkName: "ViewTeste" */'@/views/ViewTeste.vue')
		},
		{
			path: '/',
			name: 'Home',
			component: () => import(/* webpackChunkName: "home" */'./views/Home.vue')
		},
		{
			path: '/anhembi2',
			name: 'Anhembi2',
			component: () => import(/* webpackChunkName: "anhembi2" */ '@/views/Anhembi2'),
			meta: {
				id: 8
			}
		},
		{
			path: '/arco-pinheiros',
			name: 'ArcoPinheiros',
			component: () => import(/* webpackChunkName: "arcopinheiros" */ '@/views/ArcoPinheiros'),
			meta: {
				id: 9
			}
		},
		{
			path: '/arco--pinheiros',
			redirect: '/arco-pinheiros'
		},
		{
			path: '/wifi-livre-sp',
			name: 'WifiLivreSP',
			components: { WifiLivreSP },
			meta: {
				id: 34
			}
		},
		{
			path: '/digilab-livre-sp',
			name: 'DigilabLivreSP',
			component: () => import(/* webpackChunkName: "digilablivresp" */ '@/views/DigilabLivreSP'),
			meta: {
				id: 35
			}
		},
		{
			path: '/vida-segura',
			name: 'VidaSegura',
			component: () => import(/* webpackChunkName: "vidasegura" */ '@/views/VidaSegura'),
			meta: {
				id: 36
			}
		},
		{
			path: '/vila-leopoldina-projeto-de-lei',
			name: 'VilaLeopoldina2',
			component: () => import(/* webpackChunkName: "vilaleopoldina2" */ '@/views/VilaLeopoldina2'),
			meta: {
				id: 37
			}
		},
		{
			path: '/portal-prefeitura',
			name: 'PortalPrefeitura',
			component: () => import(/* webpackChunkName: "portalprefeitura" */ '@/views/PortalPrefeitura'),
			meta: {
				id: 38
			}
		},
		{
			path: '/governo-aberto',
			name: 'GovernoAberto',
			component: () => import(/* webpackChunkName: "governoaberto" */ '@/views/GovernoAberto'),
			meta: {
				id: 39
			}
		},
		{
			path: '/concessao-martinelli',
			name: 'ConcessaoMartinelli',
			component: () => import(/* webpackChunkName: "martinelli" */ '@/views/ConcessaoMartinelli'),
			meta: {
				id: 40
			}
		},
		{
			path: '/arco-pinheiros-2',
			name: 'ArcoPinheiros2',
			component: () => import(/* webpackChunkName: "arcopinheiros2" */ '@/views/ArcoPinheiros2'),
			meta: {
				id: 41
			}
		},
		{
			path: '/plano-cicloviario',
			name: 'PlanoCicloviario',
			component: () => import(/* webpackChunkName: "planocicloviario" */ '@/views/PlanoCicloviario'),
			meta: {
				id: 42
			}
		},
		{
			path: '/setor-central-2',
			name: 'SetorCentral2',
			component: () => import(/* webpackChunkName: "setorcentral2" */ '@/views/SetorCentral2'),
			meta: {
				id: 43
			}
		},
		{
			path: '/parque-minhocao',
			name: 'ParqueMinhocao',
			component: () => import(/* webpackChunkName: "parqueminhocao" */ '@/views/ParqueMinhocao'),
			meta: {
				id: 44
			}
		},
		{
			path: '/minuta-arco-pinheiros',
			name: 'MinutaArcoPinheiros',
			component: () => import(/* webpackChunkName: "minutaarcopinheiros" */ '@/views/MinutaArcoPinheiros'),
			meta: {
				id: 45
			}
		},
		{
			path: '/politica-municipal-turismo',
			name: 'PoliticaMunicipalTurismo',
			component: () => import(/* webpackChunkName: "politicamunicipalturismo" */ '@/views/PoliticaMunicipalTurismo'),
			meta: {
				id: 46
			}
		},
		{
			path: '/pdp-ibirapuera',
			name: 'PlanoDiretorParqueIbirapuera',
			component: () => import(/* webpackChunkName: "planodiretorparqueibirapuera" */ '@/views/PlanoDiretorParqueIbirapuera'),
			meta: {
				id: 47
			}
		},
		{
			path: '/parque-lajeado',
			name: 'ParqueLajeado',
			component: () => import(/* webpackChunkName: "ParqueLajeado" */ '@/views/ParqueLajeado'),
			meta: {
				id: 48
			}
		},
		{
			path: '/parque-dos-eucaliptos',
			name: 'ParqueDosEucaliptos',
			component: () => import(/* webpackChunkName: "ParqueDosEucaliptos" */ '@/views/ParqueDosEucaliptos'),
			meta: {
				id: 49
			}
		},
		{
			path: '/parque-jacinto-alberto',
			name: 'ParqueJacintoAlberto',
			component: () => import(/* webpackChunkName: "ParqueJacintoAlberto" */ '@/views/ParqueJacintoAlberto'),
			meta: {
				id: 50
			}
		},
		{
			path: '/parque-jardim-felicidade',
			name: 'ParqueJardimFelicidade',
			component: () => import(/* webpackChunkName: "ParqueJardimFelicidade" */ '@/views/ParqueJardimFelicidade'),
			meta: {
				id: 51
			}
		},
		{
			path: '/parque-brigadeiro-faria-lima',
			name: 'ParqueBrigadeiroFariaLima',
			component: () => import(/* webpackChunkName: "ParqueBrigadeiroFariaLima" */ '@/views/ParqueBrigadeiroFariaLima'),
			meta: {
				id: 52
			}
		},
		{
			path: '/tr-156',
			name: 'Tr156',
			component: () => import(/* webpackChunkName: "Tr156" */ '@/views/Tr156'),
			meta: {
				id: 54
			}
		},
		{
			path: '/premia-sampa-edicao-2020',
			name: 'PremiaSampaEdicao2020',
			component: () => import(/* webpackChunkName: "PremiaSampaEdicao2020" */ '@/views/PremiaSampaEdicao2020'),
			meta: {
				id: 55
			}
		},
		{
			path: '/carnaval-de-rua-2020',
			name: 'carnaval2020',
			component: () => import(/* webpackChunkName: "Carnaval2020" */ '@/views/Carnaval2020'),
			meta: {
				id: 56,
				email: 'carnavalderua@prefeitura.sp.gov.br'
			}
			// children: [] // módulo de busca por email e atualização de dados
		},
		{
			path: '/arco-tiete',
			name: 'ArcoTiete',
			component: () => import(/* webpackChunkName: "ArcoTiete" */ '@/views/ArcoTiete'),
			meta: {
				id: 57
			}
		},
		{
			path: '/jockey-club',
			name: 'jockeyClub',
			component: () => import(/* webpackChunkName: "JockeyClub" */ '@/views/JockeyClub'),
			meta: {
				id: 58
			}
		},
		{
			path: '/minuta-piu-setor-central',
			name: 'MinutaSetorCentral',
			component: () => import(/* webpackChunkName: "MinutaSetorCentral" */ '@/views/MinutaSetorCentral'),
			meta: {
				id: 59
			}
		},
		{
			path: '/tr-contact-center',
			name: 'TrContactCenter',
			component: () => import(/* webpackChunkName: "TrContactCenter" */ '@/views/TrContactCenter'),
			meta: {
				id: 60
			}
		},
		{
			path: '/pmadrss',
			name: 'Pmadrss',
			component: () => import(/* webpackChunkName: "Pmadrss" */ '@/views/Pmadrss'),
			meta: {
				id: 61
			}
		},
		{
			path: '/arco-tiete-2',
			name: 'ArcoTiete2',
			component: () => import(/* webpackChunkName: "ArcoTiete2" */ '@/views/ArcoTiete2'),
			meta: {
				id: 64
			}
		},
		{
			path: '/ginasio-ibirapuera',
			name: 'GinasioIbirapuera',
			component: () => import(/* webpackChunkName: "GinasioIbirapuera" */ '@/views/GinasioIbirapuera'),
			meta: {
				id: 66
			}
		},
		{
			path: '/consulta/:nome',
			name: 'ConsultaAuto',
			component: () => import(/* webpackChunkName: "ConsultaAuto" */ '@/views/ConsultaAuto'),
			meta: {
				id: 0
			}
		}
	]
})
