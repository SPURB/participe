import Vue from 'vue'
import Router from 'vue-router'

// Pages
const Home = () => import('@/views/Home')
const Anhembi2 = () => import('@/views/Anhembi2')
const ArcoPinheiros = () => import('@/views/ArcoPinheiros')
const WifiLivreSP = () => import('@/views/WifiLivreSP')
const DigilabLivreSP = () => import('@/views/DigilabLivreSP')
const VidaSegura = () => import('@/views/VidaSegura')

// Admin
const Login = () => import('@/views/Login')
const Admin = () => import('@/views/admin/Admin')
const AdminHome = () => import('@/views/admin/AdminHome')
const AdminNovaConsulta = () => import('@/views/admin/AdminNovaConsulta')
const AdminPagConsulta = () => import('@/views/admin/AdminPagConsulta')

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
		// Modelo para novas consultas
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
