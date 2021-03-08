<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
	</div>
</template>

<script>
export default {
	name: 'information',
	props: {
		msg: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
	text-align: left;
}
h1 {
	margin: 0;
	font-size: 3rem;
}
h3 {
	margin: 0;
	font-size: 2rem;
}
@media screen and (max-width: 500px) {
	h1 {
		font-size: 10vw;
	}
}
@media screen and (max-width: 350px) {
	h1 {
		font-size: 2.06rem;
	}
}
</style>
