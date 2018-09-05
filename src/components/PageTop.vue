<template>
	<div class="PageTop" :style="style"></div>
</template>
<script>
export default{
	name:"PageTop",
	props:{ 
		background_image_src:{
			required: true,
			type: String
		}
	},
	computed:{
		style() {
			return "background-image: url(" + this.$store.getters.basePath + this.background_image_src + "); background-color: #fdf8f2;"
		}
	}
}
</script>
<style lang="scss">
	div.PageTop {
		/*visibility: hidden;*/
		padding: 2rem;
		margin: 0 0 2rem 0;
		overflow: hidden;
		background-position: center center;
		background-size: cover;
		width: 100%;
		height: calc(100vh - 60px);
		position: relative;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		z-index: 1;
		
		& > div:first-child {
			padding: 1.2rem;
			background: #FFF;
			outline: 8px solid rgba(0, 0, 0, .24);
			-moz-outline-radius: 2px;

			& > div {
				margin: 0 0 8px 0;
				text-align: center;
				font-size: small;
				color: #777;
				font-weight: 400;
				
				&:last-child { margin-bottom: 0; };

				i {
					font-size: initial;
					vertical-align: middle;
				};
			};

			div#statusConsulta {
				font-size: 10px;
				text-transform: uppercase;
				color: #fff;
				font-weight: 500;
				border-radius: 2px;
				white-space: nowrap;
				margin: 0 .5rem;
			}
			div#statusConsulta::after{
				padding:.35rem .5rem;
			}
			div#statusConsulta.aberta::after{
				content: "Em consulta";
				background-color: #008015;
			}
			div#statusConsulta.fechada::after{
				content: "Consulta Encerrada";
				background-color: #EB5757;
			}
			& > h1 {
				font-size: calc(16px + 8vmin);
				line-height: calc(6vmin + 32px);
				margin: 1rem;
				text-align: center;
			};
		};

		.setaBaixo {
			position: absolute;
			bottom: 0;
			left: 0;
			display: flex;
			align-items: flex-end;
			justify-content: center;
			width: 100%;
			height: 25vh;
			background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
			transform: translateY(0);
			transition: all .4s;

			i {
				font-size: calc(24px + 16vmin);
				line-height: .8;
				color: #FFF;
				text-shadow: 0 2px 2px rgba(0, 0, 0, .24);
				transition: all .1s;
			};

			&:hover {
				cursor: pointer;
				transform: translateY(32px);

				i {
					transform: translateY(-24px);
					cursor: pointer;
				};
			};
		};
	};
	
</style>