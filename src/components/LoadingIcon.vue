<template>
	<div key="loading" class="loadingIcon transition-box">
		<div class="lds-default">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'loading',
};
</script>
<style lang="scss" scoped>
@import '../../src/sass/loadingIcon';
</style>
