<template>
	<div class="outsider">
		<Title msg="Mes réalisations" />
		<div key="optionals" class="optionals">
			<div class="optional-box" @click="showHide()">
				<div class="label">
					Filtrer par :
				</div>
				<div class="chosen">
					{{ search }}
				</div>
			</div>
			<transition-group name="slide-down">
				<div v-show="selectItems" key="selections" class="selections">
					<ul>
						<li
							v-for="i in tags"
							:key="i.name"
							class="select"
							@click="changeSearchFilter(i.name)"
						>
							{{ i.name }}
						</li>
					</ul>
				</div>
			</transition-group>
		</div>
		<transition-group name="shrink" mode="out-in" appear>
			<div v-for="w in work" :key="w.id" class="container-box">
				<div v-if="w.name" class="container">
					<div class="image-box">
						<a v-if="w.image.source" :href="w.image.link" target="blank">
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
								class="icons-image"
								:src="require('/public/icons/' + i)"
								:alt="key"
								@click="changeSearchFilter(key)"
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
		</transition-group>
	</div>
</template>

<script>
import Title from '@/components/PageTitle.vue';
import ImageBox from '@/components/ImageBox.vue';
import fetchMixin from '@/mixins/fetchMixin.js';
export default {
	name: 'Realisations',
	components: { Title, ImageBox },
	mixins: [fetchMixin],
	data: () => ({
		tags: [],
		work: null,
		search: 'voir tout',
		selectItems: false,
	}),
	created() {
		this.work = this.fetchInfoFilter('work', this.search); //fetch all work
		this.fetchInfo('tags'); //fetch all tags
	},
	methods: {
		//"filter open/close"
		showHide() {
			this.selectItems = !this.selectItems;
		},
		//chose option from list
		changeSearchFilter(searchName) {
			this.search = searchName;
			this.work = this.fetchInfoFilter('work', this.search); //fetch selected tags in work
			this.selectItems = false;
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
	transition: all 2s ease-in-out;
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
		padding: 30px 0;
		width: 100%;
		cursor: pointer;
		ul {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			justify-content: space-evenly;
			width: 100%;
			text-align: left;
			margin-left: 5%;
			li {
				list-style: none;
				display: inline-block;
				margin-left: 100px;
				&:before {
					content: '〄 '; /* use any character you fancy~! */
					position: absolute;
					margin-left: -20px;
					color: #3eb984;
					font-size: 13px;
					margin-top: 4px;
				}
			}
			@media screen and (max-width: 790px) {
				grid-template-columns: repeat(3, 1fr);
			}
			@media screen and (max-width: 640px) {
				grid-template-columns: repeat(2, 1fr);
				margin-left: 12%;
			}
			@media screen and (max-width: 470px) {
				grid-template-columns: 1fr;
				justify-content: center;
				text-align: center;
				margin-left: 0;
			}
		}
		.select {
			width: 100%;
			padding: 10px 0 0 20px;
			opacity: 0.5;
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
	transition: max-height 0.5s ease-in-out;
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
