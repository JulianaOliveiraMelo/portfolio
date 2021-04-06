<template>
	<div class="keepOnTop">
		<h1 class="hello">Expériences</h1>
		<div v-for="e in experience" :key="e.id" class="experiences">
			<div class="top">
				<div v-if="e.businessLink" class="logo">
					<a :href="e.businessLink" target="_blank">
						<ImageBox
							:backgroundImage="require('../../public/logos/' + e.businessLogo)"
							:imageDescription="'logo de ' + e.businessName"
					/></a>
				</div>
				<div v-else class="logo">
					<ImageBox
						:backgroundImage="require('../../public/logos/' + e.businessLogo)"
						:imageDescription="'logo de ' + e.businessName"
					/>
				</div>
				<div class="objectives">
					<a class="hoverLink" :href="e.businessLink" target="_blank">{{
						e.businessName
					}}</a>
					<ul>
						<li>
							Lieux : <span class="white">{{ e.businessCountry }}</span>
						</li>
						<li v-if="e.contract">
							Contrat : <span class="white">{{ e.contract }}</span>
						</li>
						<li>
							Durée :
							<span class="white">{{ e.startDate }} | {{ e.endDate }}</span>
						</li>
						<li v-for="text in e.objective" :key="text">
							<img
								src="../../public/listStyleType/icons8-rocket-48.png"
								alt="rocket-icon"
							/>
							{{ text }}
						</li>
					</ul>
				</div>
			</div>
			<div v-if="e.work" class="sites">
				<div v-for="w in e.work" :key="w.name">
					<div class="info-site">
						<a :href="w.link" target="_blank">
							<p v-html="w.name"></p>
						</a>
						<span>{{ w.type }}</span>
					</div>
					<div>
						<img
							v-if="w.image"
							class="siteImage"
							:src="require('../../public/experiences/' + w.image)"
							:alt="w.name"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import ImageBox from '@/components/ImageBox.vue';
import fetchMixins from '@/mixins/fetchMixin.js';
export default {
	components: {
		ImageBox,
	},
	mixins: [fetchMixins],
	data() {
		return {
			experience: {},
		};
	},
	created() {
		this.experience = this.fetchInfo('experience');
	},
};
</script>
<style lang="scss" scoped>
@import '../../src/sass/experience';
</style>
