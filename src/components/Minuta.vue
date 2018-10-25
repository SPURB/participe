<template>
	<div class="Minuta" ref="minuta">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'Minuta',
	data () {
		return {
			paragrafos: []
		}
	}
}
</script>
<style lang="scss" scoped>
div.Minuta {
	blockquote.minuta {
		padding: 0;
		padding: 0;
		margin: 2rem auto;
		max-width: 700px;

		p.caput {
			font-size: smaller;
			width: 80%;
			min-width: 120px;
			margin: 0 0 2rem 0;
			color: #777;
		};

		article {
			margin: 0 0 1rem 0;

			i {
				display: block;
				position: absolute;
				margin-top: 8px;
				margin-left: 6px;
				transform: scale(1);
				font-size: 20px;
				line-height: calc(2rem - 12px);
				height: calc(2rem - 12px);
				width: calc(2rem - 12px);
				text-align: center;
				color: #BDBDBD;
				background: #FFF;
				border-radius: 100%;
				opacity: .4;
				transition: all ease-in .1s;

				&:hover, &.ativo {
					background: #EF5757;
					color: #FFF;
					cursor: pointer;
					font-size: 64%;
					opacity: 1;

					&::after {
						background: #333;
						letter-spacing: 0;
						transition: transform ease-out .1s;
					};
				};

				&.ativo::after { transform: scale(0); };

				&:active { background: #AD3D3D; };

				&::after {
					content: attr(numcomments);
					position: absolute;
					margin-left: -8px;
					margin-top: -4px;
					/*display: inline-block;*/
					display: none;
					line-height: 12px;
					height: 12px;
					width: 12px;
					text-align: center;
					letter-spacing: -.032rem;
					border-radius: 100%;
					font-family: 'Roboto', 'Segoe UI', 'Helvetica', Arial, sans-serif;
					font-size: 8px;
					background: #777;
					color: #FFF;
				};
			};

			p { margin: 0; }

			div.areaComment {
				max-height: 0px;
				overflow: hidden;
				transition: all ease-in-out .4s;

				& > * {
					margin: 1rem 0 2rem 0;
				}
			};
		};
	};
};
</style>
