export const consultasCommons = {
	computed: { commentsLoaded () { return this.$store.state.commentsLoaded } },
	created () {
		this.$store.dispatch('fetchConsultas', { self: this })
		this.consultas = this.$store.state.consultas
	},
	mounted () {
		this.listaTitulos()
		this.$store.commit('SET_ROUTE_ID', this.$route.meta.id)
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
			this.estaConsulta = this.consultas.filter(esta => esta.id_consulta === this.$route.meta.id)[0]
			let app = this
			this.consultas.map(function (index) {
				if (parseInt(index.id_consulta) === parseInt(app.$route.meta.id)) {
					app.estaConsulta = index
				}
			})
		},
		consultaState () { return (this.estaConsulta.ativo === '1' ? 'aberta' : 'fechada') },
		listaTitulos () {
			let titulosBruto = Array.from(this.$refs.conteudoConsulta.getElementsByClassName('titulo'))
			let titulos = []
			let id = 0
			titulosBruto.map(function (index) {
				let titulo = {
					id: id,
					nome: index.innerText,
					indent: index.attributes.indent.value,
					offsetObj: index,
					ativo: false
				}

				id++
				titulos.push(titulo)
			})
			this.titulosLimpo = titulos
		},
		setaBaixo () {
			window.scrollTo({ top: Math.round(window.innerHeight), behavior: 'smooth' })
		},
		alteraIndice () {
			let app = this
			let sectionCollection = Array.from(this.$el.getElementsByTagName('section'))
			window.addEventListener('scroll', function () {
				sectionCollection.map(function (index, i) {
					if (window.scrollY >= index.offsetTop - (window.innerHeight) / 2 && window.scrollY < (index.offsetTop + index.offsetHeight) - (window.innerHeight) / 4) {
						app.titulosLimpo[i].ativo = true
					} else { app.titulosLimpo[i].ativo = false };
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
		backgroundImg (caminho) {
			let url = this.$store.getters.basePath + caminho
			return 'background-image: url(' + url + ');'
		}
	}
}
