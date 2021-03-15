<template>
	<div class="outsider">
		<Title msg="Me contacter" />
		<div class="contact">
			<div class="box" v-for="c in contact" :key="c.text">
				<a class="content" v-if="c.link" :href="c.link" target="_blank">
					<img
						:src="require('../../public/icons/' + c.icon)"
						:alt="c.text + ' icon'"
					/>
					<p>{{ c.text }}</p>
				</a>
				<div class="content" v-else>
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
import Title from '@/components/title.vue';
import { bus } from '../main.js';
export default {
	data() {
		return {
			contact: {},
		};
	},
	components: {
		Title,
	},
	created() {
		this.contact = bus.contact;
		console.log(this.contact);
	},
};
</script>
<style lang="scss">
.contact {
	padding: 20px 0;
	margin: 45px auto 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 5px dashed #5083b619;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 20px;
	@media screen and(max-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and(max-width: 400px) {
		grid-template-columns: 1fr;
	}
}
.box {
	display: flex;
	flex-direction: column;
	margin: 20px;
}
</style>
