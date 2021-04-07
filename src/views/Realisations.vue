<template>
	<div class="keepOnTop">
		<h1 class="hello">Mes réalisations</h1>
		<!-- filterWork -->
		<FilterByTag />
		<!-- loading icon -->
		<transition name="loading">
			<LoadingIcon v-show="loading" />
		</transition>
		<!-- work -->
		<Work />
	</div>
</template>

<script>
import fetchMixin from '@/mixins/fetchMixin.js';
import LoadingIcon from '@/components/LoadingIcon.vue';
import FilterByTag from '@/components/FilterByTag.vue';
import Work from '@/components/Work';

export default {
	name: 'Realisations',
	components: { LoadingIcon, FilterByTag, Work },
	mixins: [fetchMixin],
	data: () => ({
		work: null,
		showWork: false,
	}),
	computed: {
		loading() {
			return this.$store.state.loading;
		},
	},
};
</script>
<style lang="scss" scoped>
@import '../../src/sass/realisations';
</style>
