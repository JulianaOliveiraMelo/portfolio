<template
	><div>
		<div class="footerContainer" :style="backgroundStyle">
			<div class="credits">
				<ul>
					<li @click="pushPath('/credits')">Crédits</li>
					<li @click="pushPath('/legal')">Mentions légales</li>
				</ul>
			</div>
			<div class="socialIcons">
				<div v-for="c in contact" :key="c.text" class="box">
					<a v-if="c.link" class="content" :href="c.link" target="_blank">
						<img
							:src="require('../../public/icons/' + c.icon)"
							:alt="c.text + ' icon'"
						/>
						<p class="hoverLink">{{ c.text }}</p>
					</a>
					<div v-else class="content">
						<img
							:src="require('../../public/icons/' + c.icon)"
							:alt="c.text + ' icon'"
						/>
						<p>{{ c.text }}</p>
					</div>
				</div>
			</div>
			<div class="copyright">
				<span class="white">©</span> Copyright
				<span class="white">2021</span> JulianaOliveiraMelo
			</div>
		</div>
	</div>
</template>
<script>
import fetchMixin from '@/mixins/fetchMixin.js';
export default {
	name: 'TheFooter',
	components: {},
	mixins: [fetchMixin],
	data() {
		return {
			contact: [],
			socialIcons: {}, // does not contain phone in contact
			backgroundStyle: '',
		};
	},
	created() {
		this.fetchContactInfo('contact');
	},
	methods: {
		pushPath(path) {
			if (this.$route.path !== path) {
				this.$router.push(path);
			}
		},
	},
	watch: {
		$route(to) {
			// Update the data type when the route changes.
			this.routeName = to.name;
			if (this.routeName === '404') {
				//transparent color
				this.backgroundStyle = `background-color: #020e18cc`;
			} else {
				//normal color
				this.backgroundStyle = `background-color: #041213`;
			}
		},
	},
};
</script>
<style lang="scss" scoped>
@import '../../src/sass/footer';
@import '../../src/sass/variables';
</style>
