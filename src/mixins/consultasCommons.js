export const consultasCommons = {
	computed: { commentsLoaded () { return this.$store.state.commentsLoaded } },
	created () {
		this.$store.dispatch('fetchConsultas', { self: this })
		this.consultas = this.$store.state.consultas
	},
	mounted () {
		this.titulosLimpo = this.listaTitulos()
		this.$store.commit('SET_ROUTE_ID', this.$route.meta.id)
		this.listaErros()
	},
	updated () { this.alteraIndice() },
	methods: {
		scrollToRef (element) {
			let documentEl = this.$refs[element]
			try {
				documentEl.scrollIntoView({
					behavior: 'smooth'
				})
			} catch (error) {
				console.error('scrollIntoView não suportado para este browser')
				console.log(error)
			}
		},
		scrollToallComments () {
			let appRef = this.$refs.allComments
			try {
				window.scrollBy({
					top: appRef.getBoundingClientRect().y - 30,
					left: 0,
					behavior: 'smooth'
				})
			} catch (error) {
				console.log(error)
			}
		},
		filterConsultas () {
			this.consultas = this.$store.state.consultas
			this.estaConsulta = this.consultas.find(consulta => consulta.idConsulta === this.$route.meta.id)

			let app = this
			this.consultas.map(function (index) {
				if (parseInt(index.idConsulta) === parseInt(app.$route.meta.id)) {
					app.estaConsulta = index
				}
			})
		},
		consultaState () { return (this.estaConsulta.ativo === '1' ? 'aberta' : 'fechada') },
		listaTitulos () {
			const titulosBruto = Array.from(this.$refs.conteudoConsulta.getElementsByClassName('titulo'))
			const titulosLimpo = titulosBruto.map((item, index) => {
				return {
					id: index,
					nome: item.innerText,
					indent: item.attributes.indent.value,
					offsetObj: item,
					ativo: false
				}
			})
			return titulosLimpo
		},
		setaBaixo () {
			window.scrollTo({ top: Math.round(window.innerHeight), behavior: 'smooth' })
		},
		alteraIndice () {
			let app = this
			let sectionCollection = Array.from(this.$el.getElementsByTagName('section'))
			window.addEventListener('scroll', function () {
				sectionCollection.map((index, i) => {
					if (app.titulosLimpo[i]) {
						if (window.scrollY >= index.offsetTop - (window.innerHeight) / 2 && window.scrollY < (index.offsetTop + index.offsetHeight) - (window.innerHeight) / 4) {
							app.titulosLimpo[i].ativo = true
						} else { app.titulosLimpo[i].ativo = false }
					}
				})
			}, {
				capture: true,
				passive: true
			})
		},
		imgSrc (caminho) {
			let url = this.$store.getters.basePath + caminho
			return url.toString()
		},
		src (caminho) {
			let url = this.$store.getters.basePath + caminho
			return url.toString()
		},
		backgroundImg (caminho) {
			let url = this.$store.getters.basePath + caminho
			return 'background-image: url(' + url + ');'
		},
		print () { this.$store.dispatch('imprime') },
		listaErros () {
			Array.from(this.$el.getElementsByClassName('errata')).map(erro => {
				erro.addEventListener('click', event => {
					this.$store.commit('TOGGLE_APOIO')
					document.body.style.overflow = document.body.style.overflow === '' ? 'hidden' : ''
				})
			})
		},
		commentId (isFirst) {
			if (isFirst) {
				this.$store.commentsCount = 0
			}
			this.$store.commentsCount++
			return this.$store.commentsCount
		}
	}
}
