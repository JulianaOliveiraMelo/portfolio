<template
	><div>
		<div class="footerContainer" :style="backgroundStyle">
			<div class="credits">
				<ul>
					<li @click="pushPath('/credits')">Crédits</li>
					<li @click="pushPath('/legal')">Mentions légales</li>
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
	</div>
</template>
<script>
import { bus } from '../main.js';
export default {
	name: 'TheFooter',
	components: {},
	data() {
		return {
			socialIcons: {}, // does not contain phone in contact
			backgroundStyle: '',
		};
	},
	created() {
		this.socialIcons = [...bus.contact];
		this.socialIcons.shift();
	},
	methods: {
		pushPath(path) {
			if (this.$route.path !== path) {
				this.$router.push(path);
			}
		},
	},
	watch: {
		$route(to) {
			// Update the data type when the route changes.
			this.routeName = to.name;
			if (this.routeName === '404') {
				this.backgroundStyle = `background-color: #020e18cc`;
			} else {
				this.backgroundStyle = `background-color: #020e18`;
			}
		},
	},
};
</script>
<style lang="scss">
.footerContainer {
	width: 100%;
	min-height: 150px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 3fr 1fr;
	justify-content: space-between;
	align-items: flex-end;
	background-color: #020e18;
	box-shadow: inset 0px 16px 19px -19px #ffffff61;
	@media screen and (max-width: 680px) {
		grid-template-columns: 1fr;
		grid-template-rows: 2fr 1fr;
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
	align-items: flex-end;
	width: 100%;
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
		justify-content: center;
	}
	li {
		list-style-type: none;
		margin: 10px;
		color: #42b983;
		text-decoration: none;
		padding-bottom: 5px;
		display: inline-block;
		opacity: 0.5;
		cursor: pointer;
		&:hover {
			opacity: 1;
		}
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
			color: orange;
			&::after {
				transform: scaleX(0);
			}
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
