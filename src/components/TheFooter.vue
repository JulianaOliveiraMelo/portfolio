<template>
	<div class="footerContainer">
		<div class="credits">
			<ul>
				<li><a href="/credits">Credits</a></li>
				<li>cookies</li>
				<li><a href="/legal">Mentions légales</a></li>
			</ul>
		</div>
		<div class="socialIcons">
			<div v-for="c in socialIcons" :key="c.text" class="box">
				<a v-if="c.link" class="content" :href="c.link" target="_blank">
					<img
						:src="require('../../public/icons/' + c.icon)"
						:alt="c.text + ' icon'"
					/>
					<p class="hoverLink">{{ c.text }}</p>
				</a>
				<div v-else class="content">
					<img
						:src="require('../../public/icons/' + c.icon)"
						:alt="c.text + ' icon'"
					/>
					<p>{{ c.text }}</p>
				</div>
			</div>
		</div>
		<div class="copyright">
			<span class="white">©</span> Copyright
			<span class="white">2021</span> JulianaOliveiraMelo
		</div>
	</div>
</template>
<script>
import { bus } from '../main.js';
export default {
	name: 'TheFooter',
	data() {
		return {
			socialIcons: {}, // does not contain phone in contact
		};
	},
	created() {
		this.socialIcons = [...bus.contact];
		this.socialIcons.shift();
	},
};
</script>
<style lang="scss" scoped>
.footerContainer {
	width: 100%;
	min-height: 150px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 2fr 1fr;
	justify-content: space-between;
	align-items: center;
	background-color: #020e18;
	@media screen and (max-width: 680px) {
		grid-template-columns: 1fr;
		.socialIcons {
			grid-area: 1/ 1/ 2/ 4;
		}
		.credits {
			grid-area: 2/1/3/4;
		}
		.copyright {
			grid-area: 3/1/4/4;
		}
	}
}
.socialIcons {
	grid-area: 1/1/2/2;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 20px auto;
	a {
		filter: brightness(50%);

		&:hover {
			filter: brightness(1);
			p {
				opacity: 1;
			}
		}
		img {
			max-height: 30px;
		}
	}
}
.credits {
	grid-area: 1/2/2/3;
	ul {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		li {
			list-style-type: none;
			margin: 10px;
		}
	}
}
.copyright {
	grid-area: 2/1/3/3;
	font-size: 12px;
	opacity: 0.5;
	.white {
		color: white;
	}
}
</style>
