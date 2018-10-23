export const adminCommon = {
	data () {
		return {
			// adminCommon: 'olar adminCommon',
			nome_db: '',
			ativo: '0', // status
			data_cadastro: '',
			data_final: '',
			texto_intro: '',
			nome_publico: '',
			url_consulta: '',
			url_capa: '',
			url_devolutiva: ''
		}
	},
	computed: {
		apiPath () { return this.$store.getters.apiPath }
	},
	methods: {
		cancelarAcao () {
			this.clearInputs()
			this.$router.push('/admin')
		},
		clearInputs () {
			this.nome_db = ''
			this.ativo = '0'
			this.data_cadastro = ''
			this.data_final = ''
			this.texto_intro = ''
			this.nome_publico = ''
			this.url_consulta = ''
			this.url_capa = ''
			this.url_devolutiva = ''
		},
		updateForm () {
			this.nome_publico = this.estaConsulta.nomePublico
			this.ativo = this.estaConsulta.ativo
			this.data_cadastro = this.estaConsulta.dataCadastro
			this.data_final = this.estaConsulta.dataFinal
			this.texto_intro = this.estaConsulta.textoIntro
			this.url_consulta = this.estaConsulta.urlConsulta
			this.url_capa = this.estaConsulta.urlCapa
			this.url_devolutiva = this.estaConsulta.urlDevolutiva
		}

	}
}
