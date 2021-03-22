<template>
	<div class="cookies" v-show="visible">
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
	box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.603);
	position: fixed;
	width: 90%;
	bottom: 15px;
	left: 50%;
	margin-left: -45%;
	padding: 10px 20px;
	display: flex;
	border-radius: 2px;
	p {
		font-size: 14px;
		text-align: left;
	}
	font-size: 12px;
	z-index: 10000000000;
}
.buttons-box {
	min-width: 15%;
}
.button {
	color: #201f1f9e;
	background-color: orange;
	border-radius: 8px;
	padding: 3px 10px;
	margin: 3px;
}
</style>
