<template>
	<div class="Comments" :class="{ aberto: abreComentario }">

		<!-- <a @click="setModal('success')">sucesso</a>
		<a @click="setModal('error')">error</a> -->

		<Modal v-if="modalState.error">
			<h3 slot="header" class="modal-error">Erro!</h3>
			<p slot="body">Estamos com um erro de comunicação com o servidor. Tente novamente mais tarde.</p>
		</Modal>

		<Modal v-if="modalState.success">
			<h3 slot="header" class="modal-success">Obrigado!</h3>
			<div slot="body"><p>Agradecemos a sua contribuição!</br>
			Seu comentário foi enviado e aguarda aprovação da moderação para ser publicado.</p></div>
		</Modal>

		<div @click="abreComentario = !abreComentario"><i class="material-icons">chat</i> Comente aqui</div>

		<form>
			<fieldset>
				<label for="nome">Nome</label>
				<input
					id="nome" 
					type="text" 
					name="name" 
					v-validate="'required: true'" 
					:class="{ inputErro: errors.has('name') }" 
					v-model='form_name' 
				>
				<label for="sobrenome">Sobrenome</label>
				<input
					id="sobrenome" 
					type="text" 
					name="surname" 
					v-validate="'required: true'" 
					:class="{ inputErro: errors.has('surname') }" 
					v-model='form_surname' 
				>
				<label for="organizacao">Organização (opcional)</label>
				<input
					id="organizacao" 
					type="text" 
					name="organization" 
					v-validate="'required: false'" 
					v-model='form_organization'
				>
				<label for="email">E-mail</label>
				<input
					id="email"
					name="email" 
					v-validate="'required|email'" 
					:class="{ inputErro: errors.has('email') }" 
					type="email"
					v-model='form_email'
				>
			</fieldset>
			<fieldset>
				<label for="comentario">Comente aqui</label>
				<textarea
					id="comentario" 
					name="content" 
					v-validate="'required: true'" 
					:class="{ inputErro: errors.has('content') }"
					v-model='form_content'
				></textarea>
				<a @click="checkName">Comentar</a>
			</fieldset>
		</form>
	</div>
</template>

<script>
import axios from 'axios'
import Modal from '@/components/Modal.vue'

export default {
	name: 'Comments',
	props:['attr'],
	components:{
		Modal
	},
	data(){
		return{
			form_name: null,
			form_surname: null,
			form_organization: null,
			form_email: null,
			form_content: null,
			// form_context: null,
			abreComentario: false,
		}
	},

	computed:{
		currentRoute(){ return this.$route.name },
		returnFormNameObject(){
			if (this.form_organization != null){
				return this.form_name + ' ' + this.form_surname + ' (' + this.form_organization + ')'
			} 
			else{
				return this.form_name + ' ' + this.form_surname
			}
		},
		apiPath() { return this.$store.getters.apiPath },
		modalState(){ return this.$store.state.modalState }
	},

	methods:{
		setModal(typeOfmodal){ 
			this.$store.commit('COMMENT_MODAL_STATUS', typeOfmodal)
		},
		checkName(){
			if(!this.fields.name.valid && !this.fields.email.valid && !this.fields.surname.valid){
				alert('Preencha corretamente os campos Nome e Email')
			}
			else if (!this.fields.name.valid) {
				alert('Inclua um nome')
			}
			else if (!this.fields.surname.valid) {
				alert('Inclua um sobrenome')
			}
			else if(!this.fields.email.valid){
				alert('Corrija email')
			}
			else if(!this.fields.content.valid){
				alert("Inclua um comentário")
			}
			else{
				this.send();
			}
		},
		send(){
			let app = this;
			axios.post(this.apiPath+'members',{
				'idConsulta':app.$route.meta.id,
				'name': app.returnFormNameObject,
				'email': app.form_email, 
				'content': app.form_content,
				'public': '0',
				'trash': '0',
				'postid': '1',
				'commentid': app.attr.id,
				'commentcontext': app.attr.context
			})
			.then(function (response) {
				// console.log(response);
				let name = app.form_name;
				let content = app.form_content;
				app.setModal('success')
			})
			.catch(function (error) {
				app.setModal('error')
			});
		},
		resetForm(){
			this.form_name = null
			this.form_surname = null
			this.form_organization = null
			this.form_email = null
			this.form_content = null
			this.abreComentario = false
		}
	}
};

</script>


<style lang="scss" scoped>
div.Comments {
	margin: 2rem auto 4rem auto;
	max-width: 700px;
	background: #F5F5F5;
	border-radius: 2px;
	font-weight: 700;
	max-height: calc(4rem + 40px);
	overflow: hidden;
	transition: all ease-in-out .4s;
	position: relative;
	z-index: 0;

	& > div {
		margin-bottom: 2rem;
		padding: 2rem;
		transition: all ease-in-out .1s;

		i {
			line-height: 40px;
			width: 40px;
			vertical-align: -4px;
			text-align: center;
			background: #333;
			border-radius: 100%;
			color: #FFF;
			margin: 0 16px 0 0;
			box-shadow: 0 2px 2px rgba(0, 0, 0, .24);
		};

		&:hover {
			background: #BDBDBD;
			color: #FFF;
			cursor: pointer;
		};
	};

	form {
		display: block;
		padding: 0 2rem 2rem 2rem;

		fieldset {
			margin: 0;
			padding: 0;
				border: 0;

			label {
				display: block;
				font-size: initial;
				font-weight: initial;
				height: 30px;
				line-height: 30px;
			};

			input, textarea {
				display: block;
				width: 100%;
				font-family: inherit;
				font-size: large;
				height: 40px;
				line-height: 40px;
				border: 1px solid #BDBDBD;
				border-radius: 2px;
				padding: 8px;
				caret-color: #EB5757;
				box-shadow: inset 0 2px 2px rgba(0, 0, 0, .08);
				margin-bottom: .8rem;
				transition: all ease-in .1s;

				&:focus { border-color: #EB5757; };

				&.inputErro {
					background: #EB5757;
					color: #FFF;
				};

				&.inputAcerto {
					color: #008015;
				};
			};

			textarea {
				height: 12rem;
				line-height: 160%;
				padding: 4px 8px;
			};

			a {
				color: inherit;
				margin: 1rem 0 0 0;
				float: right;
				font-family: inherit;
				font-size: smaller;
				text-transform: uppercase;
				padding: 12px 16px;
				border-radius: 2px;
				border: 1px solid #BDBDBD;
				background: #FFF;
				box-shadow: 0 2px 2px rgba(0, 0, 0, .24);

				&:hover { text-decoration: none; cursor: pointer; };

				&:focus { border-color: #EB5757; };
			};
		};
	};

	&.aberto {
		max-height: 1000px;
	};
};
</style>