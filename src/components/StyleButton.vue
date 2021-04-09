<template>
	<button
		class="button-app"
		:class="{ browserChangeButtons: fireFox }"
		@click="click(link)"
	>
		{{ text }}
	</button>
</template>

<script>
import FetchMixins from '../../src/mixins/fetchMixin';
export default {
	name: 'StyleButton',
	mixins: [FetchMixins],
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
