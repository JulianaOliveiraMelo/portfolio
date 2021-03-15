<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Accueil</router-link> |
			<router-link to="/intro">Intro</router-link> |
			<router-link to="/realisations">Realisations</router-link> |
			<router-link to="/formations">Formations</router-link> |
			<router-link to="/experience">Experience</router-link> |
			<router-link to="/competences">Compétences</router-link> |
			<router-link to="/contact">Contact</router-link>
		</div>
		<div class="view-box">
			<router-view />
		</div>

		<footer>Footer</footer>
	</div>
</template>

<style lang="scss">
html,
body {
	margin: 0;
	padding: 0;
	background-color: #031321;
}
#app {
	font-family: 'RocknRoll One', Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #5083b6;
	font-size: 18px;
	display: flex;
	flex-direction: column;
	align-content: space-between;
	min-height: 100%;
}
#nav {
	padding: 30px;
}
#nav a {
	font-weight: bold;
	color: #798fa5;
	text-decoration: none;
	padding-bottom: 5px;
	display: inline-block;
	margin: 0;
	&::after {
		content: '';
		display: block;
		padding-bottom: 5px;
		border-bottom: solid 3px #42b983;
		transform: scaleX(0);
		transition: transform 250ms ease-in-out;
	}
	&:hover:after {
		transform: scaleX(1);
	}
	&.router-link-exact-active {
		color: #42b983;
		&::after {
			transform: scaleX(0);
		}
	}
}
.view-box {
	min-height: 100%;
}
</style>
