<template>
	<nav id='indice' class='indice'>
		<div class='menu-container' v-if='menuItems.length'>
			<ul class='menu' v-show="menuActive">
				<li
					class='menu__item'
					v-for="({ title, scrollTo }, index) in menuItems"
					:key="index"
					:ref="`menu--${scrollTo}`"
				>
					<a href='' v-scroll-to="scrollTo">{{ title }}</a>
				</li>
			</ul>
			<button
				class="menu__toggler"
				:class="{
					'menu__toggler--active': menuActive
				}"
				@click.prevent="menuToggle"
			>
				<i v-if="menuActive" class="icon icon-incorreto"><span>fechar seções</span></i>
				<i v-else class="icon icon-listagem"><span>abrir seções</span></i>
			</button>
		</div>
		<div v-else class="menu__preloader">Carregando...</div>
		<button class="menu__btn-go-top" v-scroll-to="'#app'"><i class="icon-seta_cima icon"><span>arrow_upward</span></i></button>
	</nav>
</template>
<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

Vue.use(VueScrollTo, {
	container: '#app',
	duration: 500
})

export default {
	name: 'indice-0-0-1',
	data () {
		return {
			menuActive: true
		}
	},
	props: {
		/*
		* [
				{
					title: String,
					scrollTo: String(element id),
					indent: Number
				}
			]
		*/
		menuItems: {
			type: Array,
			required: true
		}
	},
	watch: {
		menuItems (items) {
			if (items.length) {
				this.setupMenu(items)
			}
		}
	},
	mounted () {
		if (this.menuItems.length) {
			this.setupMenu(this.menuItems)
		}
	},
	methods: {
		setObsever (scrollTo) {
			const refs = this.$refs
			let observer
			const boxElement = document.querySelector(scrollTo)

			observer = new IntersectionObserver((entries, observer) => {
				entries.forEach(entry => {
					const { id } = entry.target
					const { isIntersecting } = entry
					const menuElement = refs[`menu--#${id}`][0]
					if (!menuElement) return
					isIntersecting
						? menuElement.classList.add('menu__item--ativo')
						: menuElement.classList.remove('menu__item--ativo')
				})
			}, {
				root: null,
				rootMargin: '0px'
			})
			observer.observe(boxElement)
		},

		setIndent (scrollTo, indent) {
			const refs = this.$refs
			const menuElement = refs[`menu--${scrollTo}`][0]
			const paddingLeft = indent > 1 ? (indent * 2) + 8 : 8
			menuElement.setAttribute('style', `padding-left: ${paddingLeft}px`)
		},

		setupMenu (menuItems) {
			menuItems.forEach(({ scrollTo, indent }) => {
				this.setObsever(scrollTo)
				this.setIndent(scrollTo, indent)
			})
		},

		menuToggle () {
			this.menuActive = !this.menuActive
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../variables';
#indice.indice {
	position: fixed;
	display: flex;
	flex: direction;
	flex-direction: column;
	justify-content: space-around;
	z-index: 4;
	height: calc(100vh - 60px);
	@media (max-width: 1000px) {
		justify-content: flex-end;
		padding-bottom: 1rem;
	}
	.menu-container {
		display: flex;
		position: fixed;
		right: 35px;
		bottom: 155px;
		background: white;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12)
	}
	.menu {
		display: flex;
		flex-direction: column;
		padding: 0.5rem 0;
		margin: 0;
		margin-right: 6px;
		list-style-type: none;
		a { color: $preto }
		&__toggler {
			cursor: pointer;
			border: 0;
			height: 40px;
			background: white;
			border: solid 1px $cinza-2;
			align-self: flex-end;
			i {
				cursor: pointer;
				color: $preto;
				transition: all 0.15s ease-in-out;
				@media (max-width: 1000px) {
					color: $preto;
				}
			}

			&:hover {
				i {
					color: $preto;
				}
			}
		}
		&__item {
			margin: 0;
			font-family: $grotesca;
			font-size: small;
			transition: border-left 0.15s ease-in-out;
			&--ativo {
				border-left: solid 10px $cinza-1;
				transition: border-left 0.15s ease-in-out;
				font-weight: 700;
				a {
					color: $preto;
					transition: color 0.15s ease-in-out;
				}
			}
		}
		&__btn-go-top {
			position: fixed;
			padding: 0;
			bottom: 2rem;
			right: 2rem;
			background: #FFF;
			border-radius: 100%;
			border: 1px solid $cinza-2;
			box-shadow: 0 4px 4px $sombra-4;
			transition: all .1s;
			display: block;
			font-family: inherit;
			z-index: 1;
			width: 42px;
			height: 42px;
			&:active {
				background: $vermelho;
				color: #FFF;
				border-color: $vermelho;
			};

			&:hover {
				cursor: pointer;

				&::before { opacity: 1; };
			};

			i {
				line-height: 40px;
				font-size: 22px;
				height: 50px;
				width: 42px;
			};

			&::before {
				content: 'Voltar ao topo';
				position: absolute;
				margin: 4px 0 0 -108px;
				line-height: 32px;
				padding: 0 8px;
				border-radius: 10px;
				opacity: 0;
				transition: all ease-in .1s;
				font-size: 14px;
				color: $preto;
			};

			@media screen and (max-width: 1200px) {
				&::before { display: none; };
			};
		}
		&__preloader {
			padding-left: 1rem;
			background: white;
			font-size: small;
			border: 1px solid $cinza-3;
			border-left: 0
		}
	}
}
</style>
