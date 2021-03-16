<template>
	<div class="outsider">
		<Title msg="Mes réalisations" />
		<div class="optionals" key="optionals">
			<div class="optional-box" @click="showHide()">
				<div class="label">Filtrer par :</div>
				<div class="chosen">{{ search }}</div>
			</div>
			<transition-group name="slide-down">
				<div class="selections" v-show="selectItems" key="selections">
					<div
						@click="changeSearchFilter(i)"
						v-for="i in items"
						:key="i"
						class="select"
					>
						{{ i }}
					</div>
				</div>
			</transition-group>
		</div>
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
			'plus ancien',
			'plus recent',
		],
		work: null,
		width: '100%',
		search: 'tout',
		school: [],
		selectItems: false,
	}),
	components: { Title, ImageBox },

	created() {
		this.work = bus.work;
	},
	methods: {
		showHide() {
			this.selectItems = !this.selectItems;
		},
		changeSearchFilter(searchName) {
			this.search = searchName;
			this.selectItems = !this.selectItems;
		},
	},
	computed: {
		computed_items: function() {
			if (this.search === 'tout') {
				return this.work;
			} else if (this.search === 'plus ancien') {
				let array = this.work;
				return array.sort((a, b) => a.id - b.id);
			} else if (this.search === 'plus recent') {
				let array = this.work;
				return array.sort((a, b) => b.id - a.id);
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
		cursor: pointer;
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
.optionals {
	margin-top: 20px;
	border: 5px dashed rgba(255, 166, 0, 0.164);
	padding: 10px 30px;
	cursor: pointer;
	.optional-box {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		.label {
			color: orange;
			min-width: 110px;
		}
		.chosen {
			width: 100%;
			text-align: center;
			opacity: 0.5;
		}
		@media screen and (max-width: 320px) {
			flex-direction: column;
		}
	}
	.selections {
		text-align: center;
		color: orange;
		padding: 30px;
		width: 100%;
		cursor: pointer;
		.select {
			padding: 2px 0 0;
			opacity: 0.5;
			max-width: 300px;
			margin: auto;
			&:hover {
				background-color: #00000019;
				opacity: 1;
			}
		}
	}
	@media screen and(max-width: 700px) {
		padding: 10px;
	}
}

.slide-down-enter-active,
.slide-down-leave-active {
	transition: max-height 1s linear;
}

.slide-down-enter-to,
.slide-down-leave {
	overflow: hidden;
	max-height: 1000px;
}

.slide-down-enter,
.slide-down-leave-to {
	overflow: hidden;
	max-height: 0;
}
</style>
