<template>
	<div class="Admin"  v-if="isAdmin">
		<nav>
			<AdminSide></AdminSide>
		</nav>
		<section>
			<router-view></router-view>
		</section>
	</div>
</template>

<script>
import AdminSide from '@/views/admin/AdminSide'

export default {
	nome: 'Admin',
	components: {
		AdminSide
	},
	data () {
		return {
		}
	},
	computed: {
		infoAdmin () { return this.$store.state.infoAdmin },
		isAdmin () { return this.$store.state.isAdmin }
	},
	methods: {
		dataDisplay (data) {
			return data.substring(8, 10) + '/' + data.substring(5, 7) + '/' + data.substring(0, 4)
		}
	}
}
</script>

<style lang="scss" scoped>

div.Admin {
	margin: 0 auto;
	padding: 2rem;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;

	nav {
		width: 240px;
		max-width: 100%;
		margin-right: calc(2rem - 12px);
		margin-bottom: 2rem;
	};

	section {
		width: 100%;
		max-width: 60vw;
	};
};
</style>
