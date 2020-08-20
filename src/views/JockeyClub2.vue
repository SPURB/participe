<template>
	<div class="JockeyClub2">
		<Apoio></Apoio>
		<router-view />
	</div>
</template>

<script>
import Apoio from '@/components/Apoio'

export default {
	name: 'JockeyClub2',
	data () {
		return {
			titulosLimpo: [],
			comments_atrr: undefined,
			consultas: false,
			estaConsulta: {}
		}
	},
	components: {
		Apoio
	}
}
</script>
<style lang="scss">
div.JockeyClub2 {
	@import '../variables';
	@import '../consulta';
	@import '../oldstylestoprint';
}
</style>
