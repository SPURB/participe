<template>
	<nav
	id='indice'
	class='indice'
	:style="`height: ${height}`">
		<div
			class='menu-container'
			:class="{
			active: menuActive,
			visible
			}"
			:style="endPageCss"
			v-if='menuItems.length'
		>
			<ul class='menu' v-show="menuActive">
				<li>{{ title }}</li>
				<li
					class='menu__item'
					v-for="({ title, scrollTo }, index) in menuItems"
					:key="index"
					:ref="`menu--${scrollTo}`"
				>
					<a href='' v-scroll-to="scrollTo">{{ title }}</a>
				</li>
				<li
					v-show="routerLinks.length > 0"
					class="menu__item"
					v-for="({ title, to }, indexRouter) in routerLinks"
					:key="indexRouter + menuItems.length"
					:ref="`menu--route-${indexRouter}`"
				>
					<router-link :to="to" tag="a">{{ title }}</router-link>
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
		<button class="menu__btn-go-top" v-scroll-to="'#app'">
			<i class="icon-seta_cima icon"><span>arrow_upward</span></i>
		</button>
		<button v-if="showContrib" class="menu__btn-go-contrib" v-scroll-to="'#commentsLoader'">
			<i class="icon-dialogo icon"><span>dialogo</span></i>
		</button>
	</nav>
</template>
<script>
export default {
	name: 'indice-0-0-1',
	data () {
		return {
			menuActive: true,
			endPageCss: '',
			visible: false
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
		},
		routerLinks: {
			type: Array,
			default: () => []
		},
		height: {
			type: String,
			default: 'auto'
		},
		showContrib: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: ''
		}
	},
	computed: {
		isMobile () {
			return window.screen.width < 1200
		}
	},
	watch: {
		menuItems (items) {
			if (items.length) {
				this.setupMenuItems(items)
			}
		},
		menuActive () {
			if (this.isMobile && this.menuActive) {
				this.endPageCss = 'left: 15px; overflow: auto; height: 50%; background: #FFFFFF;'
			} else {
				this.endPageCss = ''
			}
		}
	},
	mounted () {
		if (this.menuItems.length) {
			this.setupMenuItems(this.menuItems)
		}

		if (window.screen.width < 1200) {
			this.menuActive = false
		}

		if (this.routerLinks.length) {
			this.setupMenuRouteItems(this.routerLinks)
		}

		try {
			const cabecalho = document.querySelector('.cabecalho')

			new IntersectionObserver((entries) => {
				entries.forEach(({ isIntersecting }) => {
					this.visible = !isIntersecting
				})
			}).observe(cabecalho)
		} catch {
			this.visible = true
		}
	},
	created () {
		if (!this.isMobile) window.addEventListener('scroll', this.handleScroll)
	},
	destroyed () {
		if (!this.isMobile) window.removeEventListener('scroll', this.handleScroll)
	},
	methods: {
		setObsever (scrollTo) {
			const refs = this.$refs
			const boxElement = document.querySelector(scrollTo)

			const observer = new IntersectionObserver((entries) => {
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
				rootMargin: '0px'
			})

			observer.observe(boxElement)
		},

		setIndent (selector, indent) {
			const refs = this.$refs
			const menuElement = refs[`menu--${selector}`][0]
			const paddingLeft = indent > 1 ? (indent * 2) + 12 : 12
			menuElement.setAttribute('style', `padding-left: ${paddingLeft}px`)
		},

		setupMenuItems (menuItems) {
			menuItems.forEach(({ scrollTo, indent }) => {
				this.setObsever(scrollTo)
				this.setIndent(scrollTo, indent)
			})
		},

		setupMenuRouteItems (routes) {
			routes.forEach(({ indent }, index) => {
				const selector = `route-${index}`
				this.setIndent(selector, indent)
			})
		},

		menuToggle () {
			this.menuActive = !this.menuActive
		},

		handleScroll (event) {
			if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
				this.endPageCss = 'top: 0; height: calc(100% - 90px);'
			} else {
				this.endPageCss = 'height: 100%'
			}
		}
	}
}
</script>
<style lang="scss" scoped>
@import '../variables';
#indice.indice {
	position: fixed;
	width: 60vw;
	min-width: 300px;
	max-width: 700px;
	min-width: 280px;
	margin: 0;
	// background: $cinza-3;
	transition: transform ease-in .2s;

	display: flex;
	flex: direction;
	flex-direction: column;
	justify-content: space-around;
	z-index: 4;
	@media (min-width: 1200px) {
		position: absolute;
		height: 100vh;
    top: 14px;
		z-index: 0;
	}
}

.menu-container {
	display: flex;
	position: fixed;
	right: 32px;
  bottom: 15rem;
	// background: white;
	border: 1px solid $cinza-3;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
	transition: all 0.25s ease-in-out;
	@media (min-width: 1200px) {
		opacity: 0.1;
		right: unset;
		left: calc(2rem -20px);
		bottom: 0;
    height: 100%;
		box-shadow: unset;
		flex-direction: column;
		border: 0;
		&.active {
			left: 0;
		}
		&.visible {
			opacity: 1;
		}
	}
}

.menu {
	display: flex;
	flex-direction: column;
	padding: 0.5rem 0;
	margin: 0;
	width: 80%;
	margin-right: 6px;
	list-style-type: none;
	line-height: 1.7;

	@media (min-width: 1200px) {
		overflow: auto;
		padding-right: 5px;
		&::-webkit-scrollbar-track¨{
			-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
			border-radius: 10px;
			background-color: #F5F5F5;
		}

		&::-webkit-scrollbar {
			width: 4px;
			background-color: #F5F5F5;
		}

		&::-webkit-scrollbar-thumb {
			border-radius: 10px;
			-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
			background-color: rgba(85, 85, 85, 0.775);
		}
	}

	a { color: $preto }

	li:first-child {
		font-weight: 700;
		padding-left: 10px;
	}

	&__toggler {
		cursor: pointer;
		border: 0;
		height: 40px;
		min-width: 40px;
		background: white;
		border: solid 1px $cinza-2;
		transition: all 0.15s ease-in-out;
		i {
			cursor: pointer;
			color: $preto;
			transition: all 0.15s ease-in-out;
		}

		&:hover {
			i {
				color: $preto;
			}
		}
		@media (min-width: 1200px) {
			display: none;
			background: $cinza-3;
			border: solid 1px $cinza-3;
			margin-left: 20px;
			i {
				color: $cinza-2
			}
			&:hover {
				box-shadow: 0 4px 4px rgba(0, 0, 0, 0.12);
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

	&__btn-go-top, &__btn-go-contrib {
		position: fixed;
		padding: 0;
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

		i { cursor: pointer }

		&:active {
			background: $vermelho;
			color: #FFF;
			border-color: $vermelho;
		}

		&:hover {
			cursor: pointer;
			&::before { opacity: 1; };
		}

		i {
			line-height: 40px;
			font-size: 22px;
			height: 50px;
			width: 42px;
		}

		@media screen and (max-width: 1200px) {
			&::before { display: none; }
		}
	}

	&__btn-go-top {
		bottom: 9rem;
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
		}
	}
	&__btn-go-contrib {
		bottom: 6rem;
		&::before {
			content: 'Ver contribuições';
			position: absolute;
			margin: 4px 0 0 -126px;
			line-height: 32px;
			padding: 0 8px;
			border-radius: 10px;
			opacity: 0;
			transition: all ease-in .1s;
			font-size: 14px;
			color: $preto;
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
</style>
