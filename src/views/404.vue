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
.outside404 {
	height: auto;
}
.container {
	height: 400px;
	width: 100%;
	display: grid;
	justify-content: center;
	align-items: center;
	grid-template-columns: 1fr 1fr;
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
		right: 5%;
		top: 5%;
		padding: 10px;
		height: 75%;
		animation: waveEffect 15s ease-in-out infinite alternate,
			around 15s ease-in-out 2s infinite alternate;
	}
}

@media screen and (max-width: 800px) {
	.container {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 2fr;
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
			position: static;
			max-width: 90%;
			height: auto;
			margin-top: -25%;
			animation: waveEffectSmallScreens 15s ease-in-out infinite alternate,
				aroundSmallScreens 15s ease-in-out 2s infinite alternate;
		}
	}
}
@media screen and (max-width: 650px) {
	.image-box > img {
		max-width: 130%;
	}
}
@media screen and (max-width: 525px) {
	.container {
		grid-template-rows: 1fr 1fr;
	}
	.image-box > img {
		max-width: 150%;
	}
}
@media screen and (max-width: 450px) {
	.image-box > img {
		max-width: 150%;
	}
}

@keyframes around {
	0% {
		top: 5%;
		transform: scale(1);
	}
	50% {
		top: 18%;
		transform: scale(1.15);
	}
	100% {
		transform: scale(1);
		top: 5%;
	}
}
@keyframes waveEffect {
	0% {
		right: 5%;
	}
	50% {
		right: 25%;
	}
	100% {
		right: 5%;
	}
}
@keyframes aroundSmallScreens {
	0% {
		margin-top: -25%;
		transform: scale(1);
	}
	50% {
		margin-top: -20%;
		transform: scale(1.15);
	}
	100% {
		margin-top: -25%;
		transform: scale(1);
	}
}
@keyframes waveEffectSmallScreens {
	0% {
		margin-left: -15%;
	}
	50% {
		margin-left: -35%;
	}
	100% {
		margin-left: -15%;
	}
}
</style>
