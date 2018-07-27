import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Anhembi2 from '@/components/pages/Anhembi2'

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
			components: { Anhembi2 }
		}
	]
})
