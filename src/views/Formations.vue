<template>
	<div class="outsider">
		<Title msg="Formations" />
		<h5>De la plus récente à la plus ancienne</h5>

		<FormationsBox
			v-for="f in training"
			:key="f.id"
			:name="f.name"
			:source="require('../../public/logos/' + f.src)"
			:description="f.description"
			:link="f.link"
			:linkText="f.linkText"
			:linkString="f.linkString"
			:diplomes="f.diplomes"
			:objective="f.objective"
			:year="f.year"
		/>
	</div>
</template>

<script>
import FormationsBox from '@/components/FormationsBox.vue';
import Title from '@/components/PageTitle.vue';
import fetchMixin from '@/mixins/fetchMixin.js';
export default {
	components: {
		Title,
		FormationsBox,
	},
	mixins: [fetchMixin],
	data() {
		return {
			training: [],
		};
	},
	created() {
		this.fetchInfoReversed('training');
	},
};
</script>

<style lang="scss" scoped></style>
