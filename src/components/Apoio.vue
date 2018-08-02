<template>
	<div class="Apoio">
		<button>
			<i class="material-icons">chevron_left</i>
		</button>
		<aside :class="{ aberto: apoioToggle }">
			Lorem ipsum eiusmod nostrud labore in irure ut veniam ut dolore ut magna anim est anim veniam adipisicing consequat sed sit aliqua voluptate excepteur labore ea labore consequat non ut nisi ut et est sit sunt laborum ea nisi est culpa ex dolore mollit veniam ex sit aute non exercitation ut elit dolor velit irure exercitation ea dolor in anim reprehenderit labore sed ullamco consequat veniam non dolor minim irure ex veniam veniam aliquip labore eiusmod dolore nostrud eu dolore pariatur velit excepteur pariatur sint minim minim in et sed id labore duis velit enim proident in occaecat id duis in ullamco ex voluptate anim magna esse laboris ullamco enim culpa sint dolore ut cillum cillum nulla incididunt sint velit eiusmod eiusmod ut incididunt do enim velit in sunt dolore tempor dolor ut et non dolore consequat irure exercitation laboris nostrud elit pariatur labore amet ad excepteur enim in labore id magna duis duis in ea laborum qui eu dolore ullamco qui fugiat adipisicing proident ea velit occaecat incididunt non ad ut proident in ut excepteur incididunt est ut qui nostrud sit qui amet adipisicing in veniam consequat exercitation laboris adipisicing voluptate id exercitation dolor dolore consectetur elit nostrud ut cillum reprehenderit in sunt aliquip sint proident minim ullamco adipisicing occaecat quis non nisi ad ut aliquip voluptate laborum duis minim do ut fugiat quis officia ut do cillum adipisicing nulla veniam voluptate mollit anim aliqua culpa dolore consequat voluptate do ea reprehenderit officia aute nulla voluptate ut sunt nulla duis duis.
		</aside>
	</div>
</template>

<script>
export default {
	name: 'Indice',
	computed: {
		menuToggle() {
			return this.$store.state.apoioToggle
		}
	},
	mounted() {},
	methods: {
		fechaApoio() {}
	},
};
</script>

<style lang="scss">
div.Apoio {
	display: none;
	
	position: fixed;
	right: 0;
	top: 0;
	width: 50vw;
	height: 100vh;
	min-width: 280px;
	margin: 0;
	padding: 2rem;
	background: #FFF;
	z-index: 1;
	transform: translateX(100%);
	transition: transform ease-in .2s;

	&.aberto { transform: translateX(0); };

	button {
		position: absolute;
		margin: 0 0 0 -6rem;
		padding: 0;
		top: 50vh;
		max-width: 2rem;
		max-height: 2rem;
		font-family: inherit;
		color: inherit;
		background: #FFF;
		border: 2px solid #BDBDBD;
		border-radius: 100%;
		box-shadow: 0 2px 2px rgba(0, 0, 0, .24);
		transition: all ease-in .1s;

		i {
			line-height: calc(2rem - 4px);
			min-width: calc(2rem - 4px);
		};

		&:active {
			background: #EB5757;
			border-color: transparent;
			color: #FFF;

			&::before { color: #333; };
		};

		&:hover {
			cursor: pointer;

			&::before { opacity: 1; };
		};

		&::before {
			content: 'Ver texto de apoio';
			position: absolute;
			margin: 4px 0 0 -128px;
			line-height: 20px;
			padding: 0 8px;
			border-radius: 10px;
			opacity: .4;
		};
	};
};
</style>