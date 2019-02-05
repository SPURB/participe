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

// Admin
const Login = () => import(/* webpackChunkName: "login" */ '@/views/Login')
const Admin = () => import(/* webpackChunkName: "admin" */ '@/views/admin/Admin')
const AdminHome = () => import(/* webpackChunkName: "adminhome" */ '@/views/admin/AdminHome')
const AdminNovaConsulta = () => import(/* webpackChunkName: "adminnovaconsulta" */ '@/views/admin/AdminNovaConsulta')
const AdminPagConsulta = () => import(/* webpackChunkName: "adminpagconsulta" */ '@/views/admin/AdminPagConsulta')

Vue.use(Router)

export default new Router({
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
		{
			path: '/login',
			name: 'Login',
			components: { Login }
		},
		{
			path: '/admin',
			components: { Admin },
			children: [
				{
					path: '',
					name: 'Admin',
					component: AdminHome
				},
				{
					path: 'novaconsulta',
					name: 'novaConsulta',
					title: 'Nova Consulta',
					component: AdminNovaConsulta
				},
				{
					path: ':id',
					name: 'pageConsulta',
					component: AdminPagConsulta
				}
			]
		}
	]
})
