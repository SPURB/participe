import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/pages/Home')

// Consultas
const Anhembi2 = () => import('@/components/pages/Anhembi2')

// Admin
const Login = () => import('@/components/pages/Login')
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
