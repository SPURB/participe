export const commentsCommons = {
	$_veeValidate: {
		validator: 'new' // instância de validator isolado neste componente
	},
	data () {
		return {
			form_name: null,
			form_surname: null,
			form_organization: null,
			form_email: null,
			form_content: null,
			abreComentario: false,
			enviandoComment: false,
			sucesso: false,
			erro: false
		}
	},
	computed: {
		currentRoute () { return this.$route.name },
		returnFormNameObject () {
			if (this.form_organization != null) {
				return this.form_name + ' ' + this.form_surname + ' (' + this.form_organization + ')'
			} else {
				return this.form_name + ' ' + this.form_surname
			}
		}
	},
	methods: {
		checkName () {
			if (!this.fields.name.valid && !this.fields.email.valid && !this.fields.surname.valid) {
				alert('Preencha corretamente os campos Nome e Email')
			} else if (!this.fields.name.valid) {
				alert('Inclua seu nome')
			} else if (!this.fields.surname.valid) {
				alert('Inclua seu sobrenome')
			} else if (!this.fields.email.valid) {
				alert('Corrija seu e-mail')
			} else if (!this.fields.content.valid) {
				alert('Inclua seu comentário')
			} else {
				this.send()
			}
		},
		resetForm () {
			this.form_name = null
			this.form_surname = null
			this.form_organization = null
			this.form_email = null
			this.form_content = null
			this.abreComentario = false
		}
	}
}
