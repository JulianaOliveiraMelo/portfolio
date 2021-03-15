<template>
	<div class="burguerMenu">
		<div class="burguer" v-show="showBurguer" @click="showHide">
			<img :src="require('/public/icons/burguerIcon.png')" alt="" />
		</div>
		<div v-show="showLink" class="menu">
			<router-link to="/" @click.native="showHide">Accueil</router-link>
			<router-link to="/intro" @click.native="showHide">Intro</router-link>
			<router-link to="/realisations" @click.native="showHide"
				>Réalisations</router-link
			>
			<router-link to="/formations" @click.native="showHide"
				>Formations</router-link
			>
			<router-link to="/experience" @click.native="showHide"
				>Experience</router-link
			>
			<router-link to="/competences" @click.native="showHide"
				>Competences</router-link
			>
			<router-link to="/contact" @click.native="showHide">Contact</router-link>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showBurguer: true,
			showLink: false,
		};
	},
	methods: {
		showHide() {
			this.showBurguer = !this.showBurguer;
			this.showLink = !this.showLink;
		},
	},
};
</script>
<style lang="scss" scoped>
.burguer {
	position: fixed;
	right: 0;
	top: 0;
	margin: 10px;
}
.menu {
	position: fixed;
	top: 50%;
	margin-top: -50%;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	background-color: #031321;
	margin: auto;
}
</style>
