<template>
	<div class="Rodape" :class="{ loading: fetching, error: error }" v-if="!fetching && error && !consultas">
		<footer>
			<p>Caso surjam dúvidas ou problemas técnicos, envie um e-mail para: <a href="mailto:imprensasmul@prefeitura.sp.gov.br">imprensasmul@prefeitura.sp.gov.br</a>.</p>
		</footer>
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
	footer {
		clear: all;
		background: $cinza-3;
		padding: 16px 32px;
	}
	a { border-bottom: none !important; }
	a:hover { background-color: transparent; }
	a:active { background-color: transparent; }
	&.error {
		bottom: 0;
		width: 100%;
		position: absolute
	}
}
</style>
