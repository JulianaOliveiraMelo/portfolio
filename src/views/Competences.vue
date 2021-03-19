<template>
	<div class="outsider">
		<Title msg="Mes Compétences" />
		<h4>Ma Stack</h4>
		<div class="container">
			<div
				v-for="skill in skills.tech"
				:key="skill.skillName"
				class="skills-container"
			>
				<img
					:src="require('../../public/icons/' + skill.skillIcon)"
					:alt="skill.skillName"
				/>
				{{ skill.skillName }}
			</div>
		</div>
		<h4>Langues</h4>
		<div class="languages">
			<div
				v-for="s in skills.langs"
				:key="s.languageName"
				class="container lang"
			>
				<div class="language">
					<h4>{{ s.languageName }}</h4>
				</div>
				<div class="quantity">
					<div class="progress">
						<div class="percent">
							<svg>
								<circle cx="40" cy="40" r="40" />

								<circle
									cx="40"
									cy="40"
									r="40"
									:style="
										'stroke-dashoffset: calc(245 - (245 * ' +
											s.skills.write +
											') / 100); stroke: #16c79a'
									"
								/>
							</svg>
							<div class="number">
								<p style="color: #16c79a">{{ s.skills.write }}<span>%</span></p>
							</div>
						</div>
						<p>écris</p>
					</div>
					<div class="progress">
						<div class="percent">
							<svg>
								<circle cx="40" cy="40" r="40" />

								<circle
									cx="40"
									cy="40"
									r="40"
									:style="
										'stroke-dashoffset: calc(245 - (245 * ' +
											s.skills.talk +
											') / 100); stroke:  #ff005c'
									"
								/>
							</svg>
							<div class="number">
								<p style="color: #ff005c">{{ s.skills.talk }}<span>%</span></p>
							</div>
						</div>
						<p>parlé</p>
					</div>
				</div>
			</div>
		</div>
		<div class="buttons-box">
			<StyleButton text="Mes réalisations" link="realisations" />
			<StyleButton text="Contact" link="contact" />
		</div>
	</div>
</template>

<script>
import StyleButton from '@/components/styleButton.vue';
import Title from '@/components/title.vue';
import { bus } from '../main.js';
export default {
	name: 'Intro',
	components: {
		StyleButton,
		Title,
	},
	data() {
		return {
			skills: '',
		};
	},
	created() {
		this.skills = bus.skills;
	},
};
</script>
<style lang="scss">
.container {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	justify-items: center;
	row-gap: 20px;
	margin: 45px auto 25px;
	border: 5px dashed #5083b619;
	padding: 20px;
	@media screen and(max-width: 750px) {
		grid-template-columns: repeat(4, 1fr);
		padding: 20px;
	}
	@media screen and(max-width: 530px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media screen and(max-width: 400px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and(max-width: 300px) {
		grid-template-columns: 1fr;
	}
}
.skills-container {
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 45px;
	height: auto;
	img {
		width: 50px;
		height: 50px;
	}
	@media screen and(max-width: 300px) {
		img {
			min-width: 70px;
			height: auto;
		}
	}
}
.buttons-box {
	display: flex;
	justify-content: space-evenly;
	@media screen and (max-width: 500px) {
		flex-direction: column;
		align-items: center;
	}
}
.languages {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 20px;
	@media screen and (max-width: 850px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 580px) {
		grid-template-columns: 1fr;
	}
}
.container.lang {
	grid-template-columns: 1fr;
	align-self: center;
	justify-self: center;
}
.language {
	text-align: center;
	padding-bottom: 40px;
}
.quantity {
	display: flex;
	flex-direction: row;
	align-self: center;
	justify-self: center;
	column-gap: 20px;
}
.progress {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	p {
		opacity: 0.5;
	}
}
.percent {
	position: relative;
	width: 90px;
	height: 90px;
	border-radius: 50%;
	box-shadow: inset 0 0 50px #04ff0005;
	z-index: 100;
}

.percent .number {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
}

.percent .number p {
	font-size: 20px;
	transition: 0.5s;
}

.percent .number p span {
	font-size: 12px;
	transition: 0.5s;
}

svg {
	position: relative;
	width: 150px;
	height: 150px;
	z-index: 1000;
}

svg circle {
	width: 100%;
	height: 100%;
	fill: none;
	stroke-width: 3;
	stroke-linecap: round;
	transform: translate(5px, 5px);
}

svg circle {
	stroke-dasharray: 245;
	stroke-dashoffset: 245;
}
</style>
