import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/pages/Home')
const Anhembi2 = () => import('@/components/pages/Anhembi2')

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			components: {Home}
		},
		{
			path: '/anhembi2',
			name: 'Anhembi2',
			components: {Anhembi2}
		}
		]
})
