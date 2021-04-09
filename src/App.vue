<template>
	<div id="app" class="light" :style="backgroundStyle">
		<div class="absoluteContents">
			<CookiesBanner />
			<div class="arrow-box">
				<GoUpArrow :visibility="arrowIsVisible" />
			</div>
			<div class="burguerMenu">
				<BurguerMenu />
			</div>
		</div>

		<div class="outsider">
			<transition name="fade" mode="out-in" appear>
				<keep-alive>
					<router-view />
				</keep-alive>
			</transition>
		</div>
		<div class="footerContent">
			<footer>
				<TheFooter />
			</footer>
		</div>
	</div>
</template>
<script>
import CookiesBanner from '@/components/CookiesBanner.vue';
import BurguerMenu from '@/components/BurguerMenu.vue';
import TheFooter from '@/components/TheFooter.vue';
import GoUpArrow from '@/components/ArrowUp.vue';
import fetchMixin from '@/mixins/fetchMixin.js';
export default {
	components: {
		CookiesBanner,
		BurguerMenu,
		TheFooter,
		GoUpArrow,
	},
	mixins: [fetchMixin],
	data() {
		return {
			backgroundStyle: 'none',
			routeName: '',
			scrollActive: false,
			arrowIsVisible: false,
			menuNames: [],
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
	created() {
		this.fetchInfo('menuNames');
		this.checkForBrowser();
	},

	mounted() {
		this.scrollActive = false;
		this.arrowIsVisible = false;
		addEventListener('scroll', this.changeClass);
		this.scrollStop(this.removeClass);
	},
	methods: {
		changeBorderStyle() {
			let container = document.querySelectorAll('.container');
			container.forEach(element => {
				element.style = 'border-width: 2px !important';
				console.log(element);
			});
		},
		changeClass() {
			this.scrollActive = true;
			if (window.scrollY > 500) this.arrowIsVisible = true;
			let html = document.querySelector('body');
			html.classList.add('scroll');
		},
		removeClass: function() {
			this.scrollActive = false;
			this.arrowIsVisible = false;
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
<style lang="scss" scoped>
@import '../src/sass/app';
</style>
