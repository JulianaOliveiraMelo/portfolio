<template>
	<div class="outsider">
		<Title msg="Me contacter" />
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
import Title from '@/components/PageTitle.vue';
import fetchMixin from '@/mixins/fetchMixin.js';
export default {
	components: {
		Title,
	},
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
.contact {
	width: 100%;
	padding: 20px 0;
	margin: 45px auto 25px;
	align-items: center;
	border: 5px dashed #5083b619;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 19px;
	@media screen and(max-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and(max-width: 300px) {
		grid-template-columns: 1fr;
	}
}
.box {
	display: flex;
	flex-direction: column;
	margin: 20px 20px 10px;
	justify-content: space-around;
	align-items: center;
	a {
		text-align: center;
	}
	a:hover:after {
		transform: scale(0);
	}
	p {
		display: table;
		margin: auto;
		&::after {
			content: '';
			display: block;
			padding-bottom: 5px;
			border-bottom: solid 3px #42b983;
			transform: scaleX(0);
			transition: all 250ms ease-in-out;
		}
	}
	&:hover {
		p {
			opacity: 1;
			&::after {
				transform: scale(1);
			}
		}
	}
}
</style>
