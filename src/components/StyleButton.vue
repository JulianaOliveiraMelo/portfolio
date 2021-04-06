<template>
	<button class="button-rose" @click="click(link)">
		{{ text }}
	</button>
</template>

<script>
export default {
	name: 'StyleButton',
	props: {
		text: { type: String, default: '' },
		link: { type: String, default: '' },
	},
	methods: {
		click(path) {
			this.$router.replace('/' + path);
		},
	},
};
</script>
