<template>
	<div class="box">
		<div class="left">
			<h1>Mes Compétences</h1>

			<div class="buttons-box">
				<StyleButton text="Mes réalizations" link="realisations" />
				<StyleButton text="Contact" link="contact" />
			</div>
		</div>
		<div class="right"></div>
	</div>
</template>

<script>
import StyleButton from '@/components/styleButton.vue';
export default {
	name: 'Intro',
	components: {
		StyleButton,
	},
};
</script>
