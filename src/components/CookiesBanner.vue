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
			<button class="button goTo" @click="$router.push('/legal')">
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
			visible: '',
		};
	},
	methods: {
		changeVisibility() {
			this.$cookie.set('visible', false, 30);
			this.visible = false;
		},
	},
	created() {
		if (!this.$cookie.get('visible')) {
			this.visible = true;
		}
	},
};
</script>
