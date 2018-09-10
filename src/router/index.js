import Vue from 'vue'
import Router from 'vue-router'

// Pages
const Home = () => import('@/components/pages/Home')
const Anhembi2 = () => import('@/components/pages/Anhembi2')
const ArcoPinheiros = () => import('@/components/pages/ArcoPinheiros')
const Login = () => import('@/components/pages/Login')

// Admin
const Admin = () => import('@/components/Admin')
const AdminHome = () => import('@/components/AdminHome')
const AdminNovaConsulta = () => import('@/components/AdminNovaConsulta')
const AdminSide = () => import('@/components/AdminSide')
const AdminPagConsulta = () => import ('@/components/AdminPagConsulta')


Vue.use(Router)

export default new Router({
	// mode: 'history',
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
			path: '/login',
			name: 'Login',
			components: { Login }
		},
		{
			path: '/admin',
			components: { Admin },
			children: [
				{ path: '', name: 'Admin', component: AdminHome },
				{ path: 'novaconsulta', name: 'novaConsulta',  title:'Nova Consulta', component: AdminNovaConsulta },
				{ path: ':id', name: 'pageConsulta', component: AdminPagConsulta }
			]
		}
	]
})
