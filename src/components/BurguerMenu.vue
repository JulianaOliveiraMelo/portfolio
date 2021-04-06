<template>
	<div class="burguerMenu">
		<div v-show="showBurguer" class="burguer" @click="showHide">
			<img
				:src="require('/public/icons/burguerIcon.png')"
				alt="Menu open Icon"
			/>
		</div>
		<div v-show="showLink" class="menu">
			<div class="icon" @click="showHide">
				<img
					:src="require('/public/icons/closeIcon.png')"
					alt="Menu close Icon"
				/>
			</div>

			<div class="links">
				<router-link
					v-for="name in menuNames"
					:key="name.name"
					class="menu-link"
					:to="name.link"
					@click.native="showHide"
				>
					{{ name.name }}
				</router-link>
			</div>
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
			showBurguer: true,
			showLink: false,
			menuNames: [],
		};
	},
	created() {
		this.fetchInfo('menuNames');
	},
	methods: {
		showHide() {
			this.showBurguer = !this.showBurguer;
			this.showLink = !this.showLink;
		},
	},
};
</script>
