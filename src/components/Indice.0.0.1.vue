<template>
	<nav id='indice' class='indice'>
		<ul class='menu' v-if="menuItems.length">
			<!-- eslint-disable-next-line -->
			<li class="menu__item" v-for="({ title, scrollTo }, index) in menuItems" :key="index">
				<a :href="scrollTo" v-scroll-to="scrollTo">{{ title }} / {{ scrollTo }}</a>
			</li>
		</ul>
		<div v-else class="menu__preloader">Carregando...</div>
	</nav>
</template>
<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

Vue.use(VueScrollTo, {
	container: "#app",
	duration: 500,
	offset: 1000
})

export default {
	name: 'indice-0-0-1',
	props: {
		menuItems: {
			type: Array,
			required: true
		}
	},
	watch: {
		menuItems(items) {
			if (items.length) {
				this.setObsevers(items)
			}
		}
	},
	mounted () {
		if (this.menuItems.length) {
			this.setObsevers(this.menuItems)
		}
	},
	methods: {
		setObservers (menuItems) {
			function handleIntersect(entries, observer) {

				// entries.forEach((entry) => {
				// 	// if (entry.intersectionRatio > prevRatio) {
				// 	// 	entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
				// 	// } else {
				// 	// 	entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
				// 	// }
				// 	// prevRatio = entry.intersectionRatio;
				// });
			}
			menuItems.forEach(({ scrollTo }) => {

				let observer
				const boxElement = document.querySelector(scrollTo)

				observer = new IntersectionObserver((entries, observer) => {

				}, {
					root: null,
					rootMargin: "0px"
				})
				observer.observe(boxElement)
			})
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../variables';
#indice.indice {
	position: fixed;
	height: calc(100vh - 60px);
	display: flex;
	flex: direction;
	flex-direction: column;
	justify-content: space-around;
	.menu {
		padding: 0;
		margin: 0;
		list-style-type: none;
		&__item {
			margin: 0;
			font-family: $grotesca;
			font-size: small
		}
		&__preloader {
			padding-left: 1rem;
			font-size: small
		}
	}
}
</style>
