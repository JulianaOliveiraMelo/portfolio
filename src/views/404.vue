<template>
	<div class="outside404">
		<div class="container">
			<div>Erreur 404</div>
			<div class="image-box">
				<img
					:src="require('../../public/images/astronaute.gif')"
					alt="Astronaul for 404 page"
				/>
			</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
	height: 400px;
	width: 100%;
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-columns: 1fr 1fr;
	overflow: hidden;
	text-align: center;
}
.image-box {
	display: block;
	max-width: 40%;
	max-height: 200px;
	img {
		position: absolute;
		right: 45%;
		bottom: 20px;
		padding: 10px;
		height: 80%;
		animation: waveEffect 15s ease-in-out infinite alternate,
			around 15s ease-in-out 2s infinite alternate;
	}
}
@keyframes around {
	0% {
		bottom: 20px;
	}
	50% {
		bottom: 100px;
		transform: scale(1.05);
	}
	100% {
		bottom: 20px;
	}
}
@keyframes waveEffect {
	0% {
		right: 15%;
	}
	50% {
		right: 35%;
	}
	100% {
		right: 15%;
	}
}
</style>
