<template>
	<div class="outsider">
		<Title msg="Mes réalisations" />
		<h5>De la plus récente à la plus ancienne</h5>

		<template>
			<div data-app>
				<v-row align="start">
					<v-col cols="12" sm="6">
						<v-select
							class="selectOptionStyle"
							dark
							v-model="search"
							label="Filtrer par :"
							:items="items"
						></v-select>
					</v-col>
				</v-row>
			</div>
		</template>
		<div class="container-box" v-for="w in computed_items" :key="w.id">
			<div class="container" v-if="w.name">
				<div class="image-box">
					<a :href="w.image.link" v-if="w.image" target="blank">
						<ImageBox
							:backgroundImage="require('/public/images/' + w.image.source)"
							:imageDescription="w.image.description"
					/></a>
					<div v-else>
						<ImageBox
							:backgroundImage="
								require('/public/images/pexels-marta-branco-1194713.png')
							"
							imageDescription="default image"
						/>
					</div>
				</div>
				<div class="icons-box">
					<div v-for="(i, key) in w.icons" :key="i">
						<img
							@click="changeSearchFilter(key)"
							class="icons-image"
							:src="require('/public/icons/' + i)"
							:alt="key"
						/>
					</div>
				</div>
				<div class="content-box">
					<div>
						<a :href="w.image.link" target="blank"
							><h3>{{ w.name }}</h3></a
						>
						<p v-html="w.text"></p>
					</div>
					<aside v-if="w.school">
						<a class="hoverLink" :href="w.school.link" target="blank">{{
							w.school.name
						}}</a>
					</aside>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { bus } from '../main.js';
import Title from '../components/title';
import ImageBox from '../components/ImageBox';
export default {
	name: 'realisations',
	data: () => ({
		items: [
			'O`Clock',
			'Dyma',
			'Khan Academy',
			'freeCodeCamp',
			'FrontEnd Mentor',
			'HTML',
			'CSS',
			'JavaScript',
			'Sass',
			'Vue.js',
			'tout',
		],
		work: null,
		width: '100%',
		search: 'tout',
		school: [],
	}),
	components: { Title, ImageBox },

	created() {
		this.work = bus.work;
	},
	methods: {
		changeSearchFilter(searchName) {
			this.search = searchName;
		},
	},
	computed: {
		computed_items: function() {
			if (this.search === 'tout') {
				return this.work;
			} else {
				return this.work.filter(element => {
					for (let i in element.tag) {
						if (element.tag[i] == this.search) return true;
					}
				});
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.coutsider {
	@media screen and (max-width: 700px) {
		width: 100%;
	}
}
.container {
	display: grid;
	grid-template-columns: 2.5fr 0.5fr 5fr;
	margin: 45px auto 25px;
	width: 100%;
	grid-auto-columns: minmax(100px, auto);
	border: 5px dashed #5083b619;
	padding: 20px;
	@media screen and(max-width: 700px) {
		display: block;
		width: 100%;
		grid-template-columns: 1fr;
		padding: 10px;
	}
}

.image-box {
	display: block;
	padding: 10px;
	a::after {
		display: none;
	}
	@media screen and (max-width: 700px) {
		padding: 0;
	}
}
.icons-box {
	margin: auto 0;
	border-right: 1px solid rgba(255, 255, 255, 0.049);
	height: 100%;
	max-height: 70%;
	display: flex;
	flex-direction: column;
	& .icons-image {
		max-width: 32px;
	}
	@media screen and (max-width: 700px) {
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: auto;
		margin-top: 65px;
		border-right: 0px;
		padding: 20px;
	}
	@media screen and (max-width: 600px) {
		margin-top: 40px;
	}
	@media screen and (max-width: 400px) {
		margin-top: 25px;
	}
	@media screen and (max-width: 300px) {
		margin-top: 15px;
	}
}
.content-box {
	padding-left: 20px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-content: flex-start;
	div {
		text-align: left;
	}
	aside {
		display: flex;
		height: 100%;
		justify-content: flex-end;
		align-items: flex-end;
	}
	@media screen and (max-width: 700px) {
		padding: 0;
	}
}
.v-menu__contentl,
.v-list,
.v-list-item,
.v-list-item__content,
.v-list-item__title {
	text-align: left;
}
</style>
