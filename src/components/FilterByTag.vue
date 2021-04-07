<template>
	<div key="optionals" class="optionals">
		<div class="optional-box" @click="showHide()">
			<div class="label">
				Filtrer par :
			</div>
			<div class="chosen">
				{{ searchName }}
			</div>
		</div>
		<!-- Filter -->
		<transition-group name="slide-down" mode="in-out" tag="div">
			<div v-show="selectItems" key="selections" class="selections">
				<ul>
					<li
						v-for="i in tags"
						:key="i.name"
						class="select"
						@click="changeSearchFilter(i.name)"
					>
						{{ i.name }}
					</li>
				</ul>
			</div>
		</transition-group>
	</div>
</template>

<script>
import fetchMixin from '../mixins/fetchMixin';
export default {
	name: 'filterByTag',
	props: {},
	mixins: [fetchMixin],
	data() {
		return {
			tags: [],
			search: '',
			selectItems: false,
		};
	},
	created() {
		this.fetchInfo('tags'); //fetch all tags
	},
	methods: {
		//"filter open/close"
		showHide() {
			this.selectItems = !this.selectItems;
		},
		//chose option from list
		changeSearchFilter(newSearchName) {
			this.$store.commit('changeSearchName', newSearchName);
			this.selectItems = false;
		},
	},
	computed: {
		searchName() {
			return this.$store.state.search;
		},
	},
};
</script>
<style lang="scss" scoped>
@import '../../src/sass/filterByTags';
</style>
