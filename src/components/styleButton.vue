<template>
	<button class="button-rose" @click="click(link)">
		{{ text }}
	</button>
</template>

<script>
export default {
	name: 'StyleButtons',
	props: {
		text: String,
		link: String,
	},
	methods: {
		click(path) {
			this.$router.replace('/' + path);
		},
	},
};
</script>

<style lang="scss" scoped>
.button-rose {
	display: inline;
	position: relative;
	padding: 1em 1.5em;
	border: none;
	background-color: transparent;
	cursor: pointer;
	outline: none;
	font-size: 18px;
	margin: 1em 0;
	color: hotpink;
	margin-bottom: 50px;

	&::after,
	&::before {
		content: '';
		display: block;
		position: absolute;
		width: 20%;
		height: 20%;
		border: 5px dashed rgb(255, 105, 180);
		transition: all 0.6s ease;
		border-radius: 2px;
		opacity: 0.3;
	}
	&::after {
		bottom: 0;
		right: 0;
		border-top-color: transparent;
		border-left-color: transparent;
	}
	&::before {
		top: 0;
		left: 0;
		border-bottom-color: transparent;
		border-right-color: transparent;
	}
	&:hover:after,
	&:hover:before {
		width: 100%;
		height: 100%;
		opacity: 1;
	}
}
</style>
