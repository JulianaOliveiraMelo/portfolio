<template>
	<div class="keepOnTop">
		<h1 class="hello">Mes réalisations</h1>
		<div key="optionals" class="optionals">
			<div class="optional-box" @click="showHide()">
				<div class="label">
					Filtrer par :
				</div>
				<div class="chosen">
					{{ search }}
				</div>
			</div>
			<!-- Filter -->
			<transition-group name="slide-down" mode="in-out">
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
		<!-- work displayed -->

		<!-- loading icon -->
		<transition name="showing">
			<LoadingIcon v-show="loading" />
		</transition>

		<!-- work -->
		<transition name="showing">
			<div v-if="showWork">
				<div v-for="w in computed_items" :key="w.id" class="container-box">
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
			</div>
		</transition>
	</div>
</template>

<script>
import ImageBox from '@/components/ImageBox.vue';
import fetchMixin from '@/mixins/fetchMixin.js';
import LoadingIcon from '../components/LoadingIcon.vue';

// import { gsap } from 'gsap/dist/gsap';
export default {
	name: 'Realisations',
	components: { ImageBox, LoadingIcon },
	mixins: [fetchMixin],
	data: () => ({
		tags: [],
		work: null,
		search: 'voir tout',
		selectItems: false,
		loading: false,
		showWork: false,
	}),
	computed: {
		computed_items: function() {
			this.loadingTimer();
			if (this.search === 'voir tout') {
				return this.work;
			} else if (this.search === '+ ancien') {
				let array = this.work;
				return array.sort((a, b) => a.id - b.id);
			} else if (this.search === '+ recent') {
				let array = this.work;
				return array.sort((a, b) => b.id - a.id);
			} else {
				let array = this.work;
				return array.filter(element => {
					for (let i in element.tag) {
						if (element.tag[i].name == this.search) return true;
					}
				});
			}
		},
	},
	mounted() {
		this.loading = true;
		this.showWork = false;
		this.loadingTimer();
		this.work = this.getWork();
	},
	created() {
		this.fetchInfo('tags'); //fetch all tags
	},
	methods: {
		loadingTimer: function() {
			this.loading = true;
			this.showWork = false;

			setTimeout(
				function() {
					this.loading = false;
					this.showWork = true;
				}.bind(this),
				1500
			);
		},
		async getWork() {
			try {
				const response = await this.$http.get(`work.json`);
				let data = response.data;
				this.work = data;
			} catch (error) {
				throw new Error(error);
			}
		},

		//"filter open/close"
		showHide() {
			this.selectItems = !this.selectItems;
		},
		//chose option from list
		changeSearchFilter(searchName) {
			this.search = searchName;
			this.selectItems = false;
		},
		//animations for transitions
		enter(el, done) {
			el.style = 'background-green; opacity: 1; transition: all 5s';
			console.log('enter');
			done();
		},
		enterActive(el, done) {
			el.style = 'opacity: 0; background-red; transition: all 3s';
			console.log('enter Active');
			done();
		},
		leave(el, done) {
			el.style = 'opacity: 0; transition: all 7s';
			console.log('leave');
			done();
		},
		leaveActive(el, done) {
			el.style = 'opacity: 0.9; transition all 7s';
			console.log('leave Active');
			done();
		},
	},
};
</script>
<style lang="scss" scoped>
@import '../../src/sass/realisations';
.showing-enter-active,
.showing-leave-active {
	transition: all 3s;
}
.showing-leave-to {
	transition: all 3s;
	opacity: 0;
	max-height: 0;
	margin-top: 0;
	overflow: hidden;
}
.showing-enter {
	transition: all 3s;
	opacity: 0;
}
</style>
