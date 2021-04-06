<template>
	<div class="competences-page keepOnTop">
		<h1 class="hello">Mes Compétences</h1>
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
											s.skills.talk +
											') / 100); stroke: #16c79a'
									"
								/>
							</svg>
							<div class="number">
								<p style="color: #16c79a">{{ s.skills.talk }}<span>%</span></p>
							</div>
						</div>
						<p>parlé</p>
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
											s.skills.write +
											') / 100); stroke:  #ff005c'
									"
								/>
							</svg>
							<div class="number">
								<p style="color: #ff005c">{{ s.skills.write }}<span>%</span></p>
							</div>
						</div>
						<p>écris</p>
					</div>
				</div>
			</div>
		</div>
		<div class="button-box centered">
			<StyleButton text="Mes réalisations" link="realisations" />
			<StyleButton text="Contact" link="contact" />
		</div>
	</div>
</template>

<script>
import StyleButton from '@/components/StyleButton.vue';
import fetchMixin from '@/mixins/fetchMixin.js';
export default {
	name: 'Intro',
	components: {
		StyleButton,
	},
	mixins: [fetchMixin],
	data: () => ({
		skills: [],
	}),
	created() {
		this.fetchInfo('skills');
	},
};
</script>
<style lang="scss">
@import '../../src/sass/competences';
</style>
