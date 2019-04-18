import Vue from 'vue'
import Router from 'vue-router'

// Pages
const Home = () => import(/* webpackChunkName: "home" */'@/views/Home')
const Anhembi2 = () => import(/* webpackChunkName: "anhembi2" */ '@/views/Anhembi2')
const ArcoPinheiros = () => import(/* webpackChunkName: "arcopinheiros" */ '@/views/ArcoPinheiros')
const WifiLivreSP = () => import(/* webpackChunkName: "wifilivresp" */ '@/views/WifiLivreSP')
const DigilabLivreSP = () => import(/* webpackChunkName: "digilablivresp" */ '@/views/DigilabLivreSP')
const VidaSegura = () => import(/* webpackChunkName: "vidasegura" */ '@/views/VidaSegura')
const VilaLeopoldina2 = () => import(/* webpackChunkName: "vilaleopoldina2" */ '@/views/VilaLeopoldina2')
const PortalPrefeitura = () => import(/* webpackChunkName: "portalprefeitura" */ '@/views/PortalPrefeitura')
const GovernoAberto = () => import(/* webpackChunkName: "governoaberto" */ '@/views/GovernoAberto')
const ConcessaoMartinelli = () => import(/* webpackChunkName: "martinelli" */ '@/views/ConcessaoMartinelli')
const ArcoPinheiros2 = () => import(/* webpackChunkName: "arcopinheiros2" */ '@/views/ArcoPinheiros2')

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			components: { Home }
		},
		{
			path: '/anhembi2',
			name: 'Anhembi2',
			components: { Anhembi2 },
			meta: {
				id: 8
			}
		},
		{
			path: '/arco-pinheiros',
			name: 'ArcoPinheiros',
			components: { ArcoPinheiros },
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
			components: { DigilabLivreSP },
			meta: {
				id: 35
			}
		},
		{
			path: '/vida-segura',
			name: 'VidaSegura',
			components: { VidaSegura },
			meta: {
				id: 36
			}
		},
		{
			path: '/vila-leopoldina-projeto-de-lei',
			name: 'VilaLeopoldina2',
			components: { VilaLeopoldina2 },
			meta: {
				id: 37
			}
		},
		{
			path: '/portal-prefeitura',
			name: 'PortalPrefeitura',
			components: { PortalPrefeitura },
			meta: {
				id: 38
			}
		},
		{
			path: '/governo-aberto',
			name: 'GovernoAberto',
			components: { GovernoAberto },
			meta: {
				id: 39
			}
		},
		{
			path: '/concessao-martinelli',
			name: 'ConcessaoMartinelli',
			components: { ConcessaoMartinelli },
			meta: {
				id: 40
			}
		},
		{
			path: '/arco-pinheiros-2',
			name: 'ArcoPinheiros2',
			components: { ArcoPinheiros2 },
			meta: {
				id: 41
			}
		}
		/*
	 * Modelo para novas consultas
	/*
		{
			path: '/nome-da-consulta',
			name: 'NomeDaConsulta',
			components: { NomeDaConsulta },
			meta: {
				id: #
			}
		},
		*/
	]
})
