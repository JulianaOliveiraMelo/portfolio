<template>
	<div v-show="visible" class="cookies">
		<img
			:src="require('../../public/images/pexels-wallace-chuck-2126268.png')"
			alt=""
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
	width: 300px;
	bottom: 25px;
	left: 50%;
	margin-left: -45%;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 20px;
	img {
		max-width: 70%;
		padding: 20px;
	}
	p {
		font-size: 15px;
		text-align: left;
		margin-bottom: 20px;
	}
	font-size: 12px;
	z-index: 10000000000;
}

.button {
	color: #201f1f9e;
	background-color: orange;
	border-radius: 8px;
	padding: 3px 10px;
	margin: 3px;
	display: inline;
}
</style>
