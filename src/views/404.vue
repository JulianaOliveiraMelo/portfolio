<template>
	<div class="outside404">
		<div class="missingPage">
			<div>
				<p class="hustonText">Houston, we've had</p>
				<p class="hustonText">a problem.</p>
				<p class="textStyle404">
					Pas de panique, vous pouvez
					<span class="goBackButton" @click="goBack">revenir en arrière</span>
					ou naviguer sur une autre page
				</p>
			</div>
			<div class="astronault">
				<img
					class="astronault__image"
					:src="require('../../public/images/astronaute.gif')"
					alt="Astronaul for 404 page"
				/>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	methods: {
		goBack() {
			window.history.back();
		},
	},
};
</script>
<style lang="scss" scoped>
@import '../../src/sass/404';
</style>
