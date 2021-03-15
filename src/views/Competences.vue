<template>
	<div class="outsider">
		<Title msg="Mes Compétences" />
		<div class="container">
			<div
				v-for="skill in skills"
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
		<div class="buttons-box">
			<StyleButton text="Mes réalizations" link="realisations" />
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
			//width: 100%;
			min-width: 70px;
			height: auto;
			//margin: auto;
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
</style>
