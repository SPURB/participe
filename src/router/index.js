import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/pages/Home')
const AdminHome = () => import('@/components/pages/Admin/AdminHome')
const Anhembi2 = () => import('@/components/pages/Anhembi2')

Vue.use(Router)

export default new Router({
	// mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			components: {Home}
		},
		{
			path: '/admin',
			name: 'AdminHome',
			components: {AdminHome}
		},
		{
			path: '/anhembi2',
			name: 'Anhembi2',
			components: {Anhembi2}
		}
	]
})
