<template>
	<div class="outsider">
		<Title msg="Formations" />
		<h5>De la plus récente à la plus ancienne</h5>

		<FormationsBox
			v-for="f in training.slice().reverse()"
			:key="f.id"
			:name="f.name"
			:source="require('../../public/logos/' + f.src)"
			:description="f.description"
			:link="f.link"
			:linkText="f.linkText"
			:linkString="f.linkString"
			:diplomes="f.diplomes"
			:objective="f.objective"
		/>
	</div>
</template>

<script>
import FormationsBox from '../components/formationsBox.vue';
import Title from '../components/title.vue';
import { bus } from '../main.js';
export default {
	data() {
		return {
			training: {},
		};
	},
	components: {
		Title,
		FormationsBox,
	},
	created() {
		this.training = bus.training;
	},
};
</script>

<style lang="scss" scoped></style>
