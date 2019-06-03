<template>
	<div class="Rodape" :class="{ loading: fetching, error: error }" v-if="!fetching">
		<footer>
			<p>Caso surjam dúvidas ou problemas técnicos, envie um e-mail para: <a href="mailto:imprensasmul@prefeitura.sp.gov.br">imprensasmul@prefeitura.sp.gov.br</a>.</p>
		</footer>
		<a class='github' href="https://github.com/spurb/participe" alt='Veja o código fonte no Github'><i class="icon icon-github"><span>github</span></i></a>
	</div>
</template>
<script>
export default {
	name: 'Rodape',
	computed: {
		fetching () { return this.$store.state.fetching },
		error () { return this.$store.state.errors },
		consultas () { return typeof (this.$store.state.consultas) === 'object' }
	}
}
</script>

<style lang="scss" scoped>
@import '../variables';

div.Rodape {
	display: grid;
	grid-template-columns: 1fr 66px;
	grid-template-rows: 1fr;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	background: $cinza-3;
	.github, .github > i  {
		padding-top: 24px;
		color: $cinza-1;
		text-decoration: none;
		transition: color 0.25s ease-in-out;
		&:hover {
			cursor: pointer;
			color: $vermelho;
		}
	}
	i {
		text-align: center;
		font-size: 2em
	}
	footer {
		clear: all;
		padding: 16px 32px;
	}
	a:hover { background-color: transparent; }
	a:active { background-color: transparent; }
	&.error {
		bottom: 0;
		width: 100%;
		position: absolute
	}
	@media print {
		display: none;
	}
}
</style>
