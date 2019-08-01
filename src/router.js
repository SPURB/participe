import Vue from 'vue'
import Router from 'vue-router'

// Pages
const WifiLivreSP = () => import(/* webpackChunkName: "wifilivresp" */ '@/views/WifiLivreSP')

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
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
			// components: { ParqueMinhocao },
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
		}
	]
})
