<template>
	<div class="AdminLogin">
		<form id="Login">
			<div class="usuario">
				<label for="adminId">Usuário</label>
				<input id="adminId" ref="inputId" @focusout="confereInputs">
			</div>
			<div class="senha">
				<label for="adminSenha">Senha</label>
				<input id="adminSenha" ref="inputSenha" type="password" @focusout="confereInputs">
			</div>
			<button ref="entrar" :class="{ ativado: inputCompleto }">Entrar</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'AdminLogin',
	data() {		
		return {
			inputCompleto: false,
		}
	},
	methods: {
		confereInputs() {
			if (this.$refs.inputId.value != '' && this.$refs.inputSenha.value != '') {
				this.inputCompleto = true;
				this.$refs.entrar.disabled = false;
			} else { this.inputCompleto = false; };
		},
	}
};
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
				padding: .2rem 0;
				caret-color: #777;
				transition: all .2s;

				&:focus { border-bottom-color: #777; };
			};
		};

		button {
			float: right;
			font-size: inherit;
			font-family: inherit;
			color: #777;
			background: transparent;
			border: 0;
			border-radius: 2px;
			padding: 6px 10px;
			text-transform: uppercase;
			transition: all ease-in-out .1s;
			opacity: .2;
			-webkit-user-select: none;
			-moz-user-select: none;
			-ms-user-select: none;
			user-select: none;

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