import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/pages/Home')
const Anhembi2 = () => import('@/components/pages/Anhembi2')
const Admin = () => import('@/components/Admin')
const AdminLogin = () => import('@/components/AdminLogin')
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
			name: 'AdminLogin',
			components: { AdminLogin }
		},
		{
			path: '/admin',
			name: 'Admin',
			components: { Admin },
			children: [
				{ path: '', component: AdminHome },
				{ path: 'novaconsulta', component: AdminNovaConsulta },
				{ path: ':consulta', component: AdminPagConsulta }
			]
		}
	]
})
