<template>
	<div class="AdminLogin">
		<form id="Login">
			<div class="usuario">
				<label for="adminId">Email</label>
				<input 
					id="adminId"
					v-model="input.email"
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
					v-model="input.pass"
					v-validate="'required|min:8'" 
					type="password" 
					name="password"
					/>
					<span class="error_msg" v-show="fields.password && fields.password.invalid">{{ errors.first('password') }}</span>
			</div>
			<button 
				:class="{ ativado: inputEmail.valid && inputPassword.valid  }" 
				@click="checaUsuario"
				:disabled="inputEmail.invalid || inputPassword.invalid" 
				>Entrar</button>
			<!-- <button @click="checaUsuario" href="#">teste</button> -->

		</form>
	</div>
</template>

<script>
import axios from 'axios'
import { mapFields } from 'vee-validate'

export default {
	name: 'AdminLogin',
	data() {
		return {
			input:{
				email: undefined,
				pass: undefined
			}
		}
	},
	computed: {
	    ...mapFields({ // https://baianat.github.io/vee-validate/guide/flags.html
	      inputEmail: 'email',
	      inputPassword: 'password'
	    }),
	    reqPath(){
	    	return this.$store.getters.apiPath + 'users' 
	    }
	},
	methods: {
		checaUsuario(){ // TODO: ajustar bug de path na API
 			console.log(this.input.email + ' '+ this.input.pass + ' '+ this.reqPath)
			const app = this;
			axios.post(this.reqPath,{
				'email': app.input.email,
				'pass': app.input.pass
			})
			.then(function(response){
				console.log(response)
			})
			.catch(function(error){
				console.log(error)
			})
		}
	}
}
</script>

<style lang="scss" scoped>

div.AdminLogin {
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

		button {
			float: right;
			font-size: inherit;
			font-family: inherit;
			border: 0;
			border-radius: 2px;
			padding: 6px 10px;
			text-transform: uppercase;
			transition: all ease-in-out .1s;

			// &:disabled{
			color: #777;
			background: transparent;
			opacity: .2;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;

			// }


			&.ativado {
				opacity: 1;

				&:hover {
					background: rgba(0, 0, 0, .06);
					cursor: pointer;
				};
			};

			&:active {
				background: rgba(0, 0, 0, .12);
			};
		};
	};
};

</style>