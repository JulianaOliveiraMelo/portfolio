<template>
	<div id="app" :style="backgroundStyle">
		<div class="underneeth"></div>

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
			<transition name="fade" mode="out-in" appear>
				<router-view />
			</transition>
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
			scrollActive: false,
		};
	},
	watch: {
		$route(to) {
			// Update the data type when the route changes.
			this.routeName = to.name;
			if (this.routeName === '404') {
				this.backgroundStyle = `background-image : url(${require('../public/images/nasa-Q1p7bh3SHj8-unsplash.png')}); background-size: cover`;
			} else {
				this.backgroundStyle = '';
			}
		},
	},
	mounted() {
		this.scrollActive = false;
		addEventListener('scroll', this.changeClass);
		this.scrollStop(this.removeClass);
	},
	methods: {
		changeClass() {
			this.scrollActive = true;
			let html = document.querySelector('body');
			html.classList.add('scroll');
		},
		removeClass: function() {
			this.scrollActive = false;
			let html = document.querySelector('body');
			html.classList.remove('scroll');
		},
		scrollStop: function(callback) {
			// Make sure a valid callback was provided
			if (!callback || typeof callback !== 'function') return;

			// Setup scrolling variable
			var isScrolling;

			// Listen for scroll events
			window.addEventListener(
				'scroll',
				function() {
					// Clear our timeout throughout the scroll
					window.clearTimeout(isScrolling);

					// Set a timeout to run after scrolling ends
					isScrolling = setTimeout(function() {
						// Run the callback
						callback();
					}, 1000);
				},
				false
			);
		},
	},
};
</script>
<style lang="scss"></style>
