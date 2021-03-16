<template>
	<div class="burguerMenu">
		<div class="burguer" v-show="showBurguer" @click="showHide">
			<img :src="require('/public/icons/burguerIcon.png')" alt="" />
		</div>
		<div v-show="showLink" class="menu">
			<div class="icon" @click="showHide">
				<img :src="require('/public/icons/closeIcon.png')" alt="" />
			</div>

			<div class="links">
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
				<router-link to="/contact" @click.native="showHide"
					>Contact</router-link
				>
			</div>
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
	computed: {},
	methods: {
		showHide() {
			console.log(this.showLink);
			this.showBurguer = !this.showBurguer;
			this.showLink = !this.showLink;
		},
	},
};
</script>
<style lang="scss" scoped>
.burguerMenu {
	@media screen and(min-width:740px) {
		display: none;
	}
}
.burguer {
	position: fixed;
	right: 0;
	top: 0;
	margin: 10px;
	img {
		max-width: 40px;
	}
}
.menu {
	position: fixed;
	top: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-end;
	width: 100%;
	height: 100%;
	background-color: #031321e5;
	margin: auto;
	z-index: 100;
}
.links {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto;
	a {
		font-weight: bold;
		color: #42b983;
		text-decoration: none;
		padding-bottom: 5px;
		display: inline-block;
		margin: 0;
		&.router-link-exact-active {
			color: orange;
			&::after {
				transform: scaleX(0);
			}
		}
	}
}
.icon {
	margin: 10px;
}
</style>
