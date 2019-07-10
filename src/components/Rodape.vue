<template>
	<div class="rodape" :class="{ loading: fetching, error: error }" v-if="!fetching">
		<footer>
			<p>Caso surjam dúvidas ou problemas técnicos, envie um e-mail para: <a href="mailto:imprensasmul@prefeitura.sp.gov.br">imprensasmul@prefeitura.sp.gov.br</a>.</p>
		</footer>
		<a name='codigo-fonte' class='github' href="https://github.com/spurb/participe" alt='Veja o código fonte no Github'><i class="icon icon-github"><span>github</span></i></a>
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

.rodape {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	background: $cinza-3;
	max-width: 100%;
	p { margin: 0; }
	&.error {
		bottom: 0;
		width: 100%;
		position: absolute
	}
	@media screen and (max-width: 600px) {
		font-size: 0.75rem;
		line-height: 1.2;
		padding: 1rem;
	}
	@media print {
		display: none;
	}
}

.github {
	font-size: 2rem;
	color: $cinza-1;
	text-decoration: none;
	transition: color 0.24s ease-in-out;
	&:hover {
		color: $vermelho;
	}
}

.icon.icon-github:hover { cursor: pointer; }

a:hover { background-color: transparent; }
a:active { background-color: transparent; }

</style>
