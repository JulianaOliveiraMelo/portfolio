<template>
	<div class="outside404">
		<div class="container">
			<div>
				<p class="hustonText">Houston, we've had</p>
				<p class="hustonText">a problem.</p>
				<p class="textStyle404">
					Pas de panique, vous pouvez
					<span class="goBackButton" @click="goBack">revenir en arrière</span>
					ou naviguer sur une autre page
				</p>
			</div>
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
export default {
	methods: {
		goBack() {
			window.history.back();
		},
	},
};
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Train+One&display=swap');
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
p {
	padding: 0 20px;
	margin: auto auto auto 15%;
	text-align: left;
	&.hustonText {
		font-family: 'Train One', cursive;
		letter-spacing: 10px;
		color: white;
		font-size: 35px;
	}
	&.textStyle404 {
		font-size: 18px;
	}
}
.goBackButton {
	color: orange;
	cursor: pointer;
}
.image-box {
	display: block;
	max-width: 40%;
	max-height: 200px;
	img {
		position: absolute;
		right: 45%;
		top: 200px;
		padding: 10px;
		height: 80%;
		animation: waveEffect 15s ease-in-out infinite alternate,
			around 15s ease-in-out 2s infinite alternate;
	}
}

@media screen and (max-width: 800px) {
	.container {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 2fr;
		overflow: visible;
		padding: 5% 10% 0;
		height: 100%;
		p {
			margin: auto;
		}
	}
	.image-box {
		width: 100%;
		padding: 0;
		margin: auto;
		img {
			position: relative;
			top: 0;
			bottom: 30px;
			max-width: 100%;
			height: auto;
			right: 50%;
			animation: waveEffectSmallScreens 15s ease-in-out infinite alternate,
				aroundSmallScreens 15s ease-in-out 2s infinite alternate;
		}
	}
}
@keyframes around {
	0% {
		top: 150px;
	}
	50% {
		top: 200px;
		transform: scale(1.05);
	}
	100% {
		top: 100px;
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
@keyframes aroundSmallScreens {
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
@keyframes waveEffectSmallScreens {
	0% {
		left: 15%;
	}
	50% {
		left: 35%;
	}
	100% {
		left: 15%;
	}
}
</style>
