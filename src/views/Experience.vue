<template>
	<div class="outsider">
		<Title msg="Experiences" />
		<div v-for="e in experience" :key="e.id" class="experiences">
			{{ e.businessName }}
			<div class="sites" v-for="w in e.work" :key="w.name">
				<p v-html="w.name"></p>
			</div>
		</div>
	</div>
</template>
<script>
import Title from '@/components/title.vue';
import { bus } from '@/main';
export default {
	data() {
		return {
			experience: {},
		};
	},
	components: {
		Title,
	},
	created() {
		this.experience = bus.experience;
	},
};
</script>
<style lang="scss" scoped>
.experiences {
	padding: 20px 0;
	margin: 45px auto 25px;
	align-items: center;
	border: 5px dashed #5083b619;
}
</style>
