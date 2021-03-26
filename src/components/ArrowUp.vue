<template>
	<img
		@click="goUp"
		:class="[visibility ? 'show' : 'hide']"
		class="icon"
		:src="require('../../public/icons/icons8-double-up.png')"
		alt=""
	/>
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
.icon {
	padding: 10px;
	width: 50px;
	opacity: 1;
	transition: all 2s;
	filter: drop-shadow(1px 1px 2px #2195f3ad);
	cursor: pointer;
}
.hide {
	opacity: 0;
	&:hover {
		opacity: 1;
	}
}
.show {
	opacity: 1;
}
</style>
