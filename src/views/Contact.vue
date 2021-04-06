<template>
	<div class="keepOnTop">
		<h1 class="hello">Me contacter</h1>
		<div class="contact">
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
	</div>
</template>
<script>
import fetchMixin from '@/mixins/fetchMixin.js';
export default {
	mixins: [fetchMixin],
	data() {
		return {
			contact: {},
		};
	},
	created() {
		this.fetchInfo('contact');
	},
};
</script>
<style lang="scss" scoped>
@import '../../src/sass/contact';
</style>
