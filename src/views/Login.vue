<template>
	<div class="Login">
		<form id="Login">
			<div class="usuario">
				<label for="adminId">Email</label>
				<input
					id="adminId"
					v-model="email"
					v-validate="'required|email'"
					type="email"
					name="email"
					/>
					<span class="error_msg" v-show="fields.email && fields.email.invalid">{{ errors.first('email') }}</span>
			</div>
			<div class="senha">
				<label for="adminSenha">Password</label>
				<input
					id="adminSenha"
					v-model="pass"
					v-validate="{
						required:true,
						min:5
					}"
					type="password"
					name="password"
					/>
					<span class="error_msg" v-show="fields.password && fields.password.invalid">{{ errors.first('password') }}</span>
			</div>

			<a
				:class="{ ativado: inputEmail.valid && inputPassword.valid  }"
				@click="checaUsuario"
				:disabled="inputEmail.invalid || inputPassword.invalid"
				>Entrar</a>
		</form>
	</div>
</template>

<script>
import axios from 'axios'
import { mapFields } from 'vee-validate'

export default {
	name: 'Login',
	data () {
		return {
			email: undefined,
			pass: undefined
		}
	},
	computed: {
		...mapFields({ // https://baianat.github.io/vee-validate/guide/flags.html
			inputEmail: 'email',
			inputPassword: 'password'
		}),
		passNoSpaces () { return this.pass.replace(/\s/g, '') },
		apiLogin () { return this.$store.getters.apiLogin }
	},
	methods: {
		checaUsuario () {
			let app = this // para escopo de post do axios
			let memForm = this.toFormData({
				email: this.email,
				pass: this.passNoSpaces
			})
			axios.post(this.apiLogin, memForm)
				.then(function (response) {
					// console.log(response.data)
					let status = response.data.status
					// let responseObject

					if (status) { // admin válido
						app.$store.commit('adminStatus', true)
						app.$store.commit('addAdminInfo', {
							firstname: response.data.firstname,
							message: response.data.message,
							role: response.data.role
						})
						app.goToAdmin(app.$store.state.isAdmin)
					} else { // admin inválido
						app.$store.commit('adminStatus', false)
						app.$store.commit('addAdminInfo', response.data)
						alert(response.data.message)
						// app.email = '',
						// app.pass = ''
					}
				})
				.catch(function (error) {
					app.$store.commit('adminStatus', false)
					console.log(error)
				})
		},
		goToAdmin (isAdmin) { isAdmin ? this.$router.push('/admin') : console.log('não é admin') },
		toFormData (obj) {
			let form = new FormData()
			for (let key in obj) {
				form.append(key, obj[key])
			}
			return form
		}
	}
}
</script>

<style lang="scss" scoped>

div.Login {
	margin: 0 auto;
	padding: 8rem 2rem 12rem 2rem;
	height: calc(100vh - 118px);
	max-width: 640px;
	font-size: 1.2rem;

	form {

		div {
			position: relative;
			margin-bottom: 8rem;

			label {
				display: block;
				color: #777;
				font-size: smaller;
			};

			input {
				width: 100%;
				font-size: inherit;
				font-family: inherit;
				border: 0px;
				border-bottom: 1px solid #BDBDBD;
				padding: .35rem;
				caret-color: #777;
				transition: all .2s;

				&:focus { border-bottom-color: #777; };

			};
		span.error_msg{
			font-size: .75em
		}
		};

		a {
			pointer-events: none;
			float: right;
			font-size: inherit;
			font-family: inherit;
			border: 0;
			border-radius: 2px;
			padding: 6px 10px;
			text-transform: uppercase;
			transition: all ease-in-out .1s;
			opacity: .2;

			&:disabled{
			color: #777;
			background: transparent;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;
			}

			&.ativado {
				pointer-events: unset;
				opacity: 1;
				background-color: rgba(255, 77, 77, .85);
				color:white;
				&:hover {
					background: rgba(255, 77, 77, 1);
					cursor: pointer;
					text-decoration: none;

				};
			};

			&:active {
				background: rgba(255, 77, 77, .5);
			};
		};
	};
};

</style>
