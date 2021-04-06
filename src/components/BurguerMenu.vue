<template>
	<div>
		<div class="burguer" @click="animatingMenu">
			<span
				class="burguer-icon"
				:class="{ 'burguer-open': showBurguer }"
			></span>
			<div class="burguer-menu" :class="{ 'burguer-open': showBurguer }">
				<ul class="burguer-content" :class="{ 'burguer-open': showBurguer }">
					<li
						class="burguer-content__links"
						:class="{ 'burguer-open': showBurguer }"
						v-for="name in menuNames"
						:key="name.name"
					>
						<router-link :to="name.link">
							{{ name.name }}
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div id="nav">
			<ul>
				<li class="navLinks" v-for="name in menuNames" :key="name.name">
					<router-link :to="name.link">
						{{ name.name }}
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import fetchMixin from '@/mixins/fetchMixin.js';
export default {
	name: 'BurguerMenu',
	mixins: [fetchMixin],
	data() {
		return {
			showBurguer: false,
			menuNames: [],
			animateMenu: false,
		};
	},
	created() {
		this.fetchInfo('menuNames');
	},
	methods: {
		showHide() {
			this.showBurguer = !this.showBurguer;
		},
		animatingMenu() {
			this.showBurguer = !this.showBurguer;
		},
	},
};
</script>
<style lang="scss" scoped>
@import '../../src/sass/burguerMenu';
</style>
