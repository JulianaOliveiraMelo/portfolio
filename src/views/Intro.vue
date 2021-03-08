<template>
	<div class="box">
		<div class="left">
			<Title msg="Lorem ipsum, dolor" />
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. A perferendis
				harum eum autem, dicta quod omnis, deserunt ex sapiente facilis, ullam
				quos eligendi sed. Aut atque magni magnam modi nostrum.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
				exercitationem commodi delectus ad eum doloribus itaque sapiente,
				veritatis excepturi, nihil temporibus deserunt ipsam culpa
				necessitatibus. Quibusdam at nemo nesciunt recusandae!
			</p>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
				dignissimos culpa velit sapiente voluptatibus, ab eveniet officiis,
				accusamus ea rerum consequatur ipsam consectetur. Molestiae porro
				numquam, fugiat obcaecati aperiam eveniet.
			</p>

			<div class="button-box">
				<StyleButton text="Mes réalizations" link="realisations" />
				<StyleButton text="Contact" link="contact" />
			</div>
		</div>
		<div class="right"></div>
	</div>
</template>

<script>
import StyleButton from '@/components/styleButton.vue';
import Title from '@/components/title.vue';
export default {
	name: 'Intro',
	components: {
		StyleButton,
		Title,
	},
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: 800px) {
	.box {
		flex-wrap: wrap;
	}
	.right {
		min-width: 100%;
		max-height: 600px;
		background-position: center;
	}
}
.right {
	background-image: url('../../src/assets/ordinateur-portable.png');
}
</style>
