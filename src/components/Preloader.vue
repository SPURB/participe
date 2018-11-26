<template>
	<div class="Preloader" :class="{ fim: !fetching, erro: fetchError }" @click="reload()">
		<svg xmlns="http://www.w3.org/2000/svg" width="170" height="170">
			<path id="temp" fill="none" class="balao" stroke-width="6" stroke-miterlimit="10" d="M139.233 39.767v66.359c0 6.079-4.979 11.058-11.059 11.058H50.756l-22.119 22.119V39.767c0-6.08 4.974-11.06 11.059-11.06h88.479c6.08.001 11.058 4.98 11.058 11.06z"/>
		</svg>
		<p class="erro" :class="{ surge: fetchError }">Falha no carregamento. Clique para tentar novamente.</p>
	</div>
</template>

<script>
export default {
	name: 'Preloader',
	computed: {
		fetching () { return this.$store.state.fetching },
		fetchError () { return this.$store.state.errors }
	},
	methods: {
		reload () {
			if (this.fetchError) {
				this.$store.dispatch('fetchConsultas', { self: this })
				this.$store.commit('FETCHING_ERROR', false)
				this.$store.commit('FETCHING_STATE', true)
			} else {
				return false
			}
		}
	}
}
</script>

<style lang="scss" scoped>
div.Preloader {
	z-index: -1;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
	animation: opacity ease-in .2s;

	@supports not (display: flex) {
		text-align: center;
		padding-top: 40%;
	}

	svg {
		path.balao {
			stroke: transparent;
			stroke-dasharray: 415;
			animation: contorno ease-in-out 2s infinite .25s;
			animation-delay: .25s;

			@keyframes contorno {
				0% {
					stroke: #777;
					stroke-dashoffset: -415;
					fill-opacity: 0;
					stroke-opacity: 0%;
				}
				50% {
					stroke: #777;
					stroke-dashoffset: 0;
					fill-opacity: 1;
					stroke-opacity: 100%;
				}
				100% {
					stroke: #777;
					stroke-dashoffset: 415;
					fill-opacity: 0;
				}
			}
		}
	}

	p.erro {
		opacity: 0;
		color: #777;
		user-select: none;
		-moz-user-select: none;
		transition: opacity ease-in .2s;
		&.surge { opacity: 1; }
	}

	&.fim { opacity: 0; }

	&.erro {
		animation: erro ease-out .8s;
		opacity: .4;
		cursor: pointer;
		transition: opacity ease-out .2s;

		@keyframes erro {
			0% { background: transparent; }
			1% { background: #EB5757; }
			100% { background: transparent; }
		}

		svg path.balao {
			stroke: #777;
			animation: none;
		}

		&:hover { opacity: 1; }
	}
}
</style>
