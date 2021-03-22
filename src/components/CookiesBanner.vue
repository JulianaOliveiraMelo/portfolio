<template>
	<div v-show="visible" class="cookies">
		<img
			class="close-icon"
			:src="require('../../public/icons/icons8-macos-close-32.png')"
			alt="close"
			@click="changeVisibility"
		/>
		<img
			class="cookies-image"
			:src="require('../../public/images/pexels-wallace-chuck-2126268.png')"
			alt="coffee and cookies"
		/>
		<p>
			Ce site web utilise des cookies vous garantir une meilleure expérience de
			navigation. En poursuivant votre navigation, vous acceptez l’utilisation
			de ce cookies.
		</p>
		<div class="buttons-box">
			<button class="button ok" @click="changeVisibility">OK</button>
			<button class="button goTo" @click="$router.replace('/legal')">
				Mentions Légales
			</button>
		</div>
	</div>
</template>
<script>
export default {
	name: 'CookiesBanner',
	data() {
		return {
			visible: true,
		};
	},
	methods: {
		changeVisibility() {
			this.visible = !this.visible;
		},
	},
};
</script>
<style lang="scss" scoped>
.cookies {
	background-color: black;
	box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.603);
	position: fixed;
	max-width: 300px;
	bottom: 25px;
	left: 50%;
	margin-left: -45%;
	padding: 40px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 20px;
	@media screen and (max-width: 700px) {
		max-width: 50%;
		max-height: 60%;
		top: 50%;
		left: 50%;
		margin-top: -30%;
		margin-left: -25%;
	}
	@media screen and (max-width: 600px) {
		max-width: 50%;
		min-height: 55%;
		top: 50%;
		left: 50%;
		margin-top: -35.5%;
		margin-left: -25%;
	}
	@media screen and (max-width: 560px) {
		max-width: 60%;
		min-height: 55%;
		top: 50%;
		left: 50%;
		margin-top: -35.5%;
		margin-left: -30%;
	}
	@media screen and (max-width: 480px) {
		max-width: 70%;
		min-height: 60%;
		top: 50%;
		left: 50%;
		margin-top: -60%;
		margin-left: -35%;
	}
	@media screen and (max-width: 410px) {
		max-width: 80%;
		min-height: 60%;
		top: 50%;
		left: 50%;
		margin-top: -60%;
		margin-left: -40%;
	}
	@media screen and (max-width: 360px) {
		max-width: 90%;
		min-height: 70%;
		top: 50%;
		left: 50%;
		margin-top: -80%;
		margin-left: -45%;
	}

	.cookies-image {
		max-width: 70%;
		padding: 20px;
		@media screen and (max-width: 330px) {
			min-width: 150px;
		}
	}
	p {
		font-size: 15px;
		text-align: left;
		margin-bottom: 20px;
	}
	font-size: 12px;
	z-index: 10000000000;
}
.buttons-box {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	@media screen and (max-width: 580px) {
		flex-direction: column;
	}
}
.button {
	color: #201f1fed;
	background-color: orange;
	border-radius: 8px;
	padding: 5px 15px;
	margin: 3px;
}
.close-icon {
	display: inline;
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	margin: 20px;
}
</style>
