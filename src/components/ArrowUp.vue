<template>
	<div @click="goUp" :class="[visibility ? 'show' : 'hide']">
		<span class="material-icons material-icons-sharp">expand_less</span>
	</div>
</template>

<script>
export default {
	name: 'arrowUp',
	props: {
		visibility: Boolean,
	},
	methods: {
		goUp: function() {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		},
	},
};
</script>
<style lang="scss" scoped>
@import '../../src/sass/arrowUp';
</style>
