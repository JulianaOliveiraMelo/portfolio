<template>
	<div id="app" :style="backgroundStyle">
		<CookiesBanner />
		<div class="burguerMenu">
			<BurguerMenu />
		</div>
		<div id="nav">
			<router-link to="/">
				Accueil
			</router-link>
			|
			<router-link to="/intro">
				Intro
			</router-link>
			|
			<router-link to="/realisations">
				Réalisations
			</router-link>
			|
			<router-link to="/formations">
				Formations
			</router-link>
			|
			<router-link to="/experience">
				Expériences
			</router-link>
			|
			<router-link to="/competences">
				Compétences
			</router-link>
			|
			<router-link to="/contact">
				Contact
			</router-link>
		</div>
		<div class="view-box">
			<router-view />
		</div>

		<footer>
			<TheFooter />
		</footer>
	</div>
</template>
<script>
import CookiesBanner from '@/components/CookiesBanner.vue';
import BurguerMenu from '@/components/BurguerMenu.vue';
import TheFooter from '@/components/TheFooter.vue';
export default {
	components: {
		CookiesBanner,
		BurguerMenu,
		TheFooter,
	},
	data() {
		return {
			backgroundStyle: 'none',
			routeName: '',
		};
	},
	watch: {
		$route(to) {
			// Update the data type when the route changes.
			this.routeName = to.name;
			if (this.routeName === '404') {
				this.backgroundStyle = `background-image : url(${require('../public/images/nasa-Q1p7bh3SHj8-unsplash.png')})`;
			} else {
				this.backgroundStyle = '';
			}
		},
	},
};
</script>
<style lang="scss"></style>
