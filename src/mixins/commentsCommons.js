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
				return `${this.form_name} ${this.form_surname} (${this.form_organization})`
			} else {
				return `${this.form_name} ${this.form_surname}`
			}
		}
	},
	created () {
		this.checkStorage(['form_name', 'form_surname', 'form_organization', 'form_email'])
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
			this.setStorage(['form_name', 'form_surname', 'form_organization', 'form_email'])
			this.form_content = null
			this.abreComentario = false
		},

		/**
		* Checa localStorage e seta parâmetros no 'data' deste componente
		* @param { Array } keys Array de strings. @example ['form_name', 'form_surname', 'form_organization', 'form_email']
		* @return { String } Seta valores do local storage nas chaves de mesmo nome neste componente
		*/
		checkStorage (keys) {
			const storage = window.localStorage
			keys.forEach(key => { if (storage.getItem(key) !== 'null') this[key] = storage.getItem(key) })
		},
		/**
		* Seta localStorage a partir de chaves do 'data' deste componente
		* @param { Array } keys Array de strings. @example ['form_name', 'form_surname', 'form_organization', 'form_email']
		* @return { Object } Seta valores local storage a partir das chaves de mesmo nome neste componente
		*/
		setStorage (keys) {
			const storage = window.localStorage
			keys.forEach(key => {
				if (!this[key]) throw new Error(`${key} should be one of "data" keys`)
				storage.setItem(key, this[key])
			})
		}
	}
}
