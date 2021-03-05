<template>
	<button class="button-rose" v-on:click="click(link)">
		{{ text }}
	</button>
</template>

<script>
export default {
	name: 'styleButton',
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
	position: relative;
	padding: 1em 1.5em;
	border: none;
	background-color: transparent;
	cursor: pointer;
	outline: none;
	font-size: 18px;
	margin: 1em 0;
	margin-right: 5%;
	color: hotpink;
	margin-bottom: 50px;

	&::after,
	&::before {
		content: '';
		display: block;
		position: absolute;
		width: 20%;
		height: 20%;
		border: 2px solid hotpink;
		transition: all 0.6s ease;
		border-radius: 2px;
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
	}
}
</style>
