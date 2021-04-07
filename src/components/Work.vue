<template>
	<transition name="work" appear>
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
</template>

<script>
import ImageBox from '@/components/ImageBox.vue';

export default {
	name: 'work',
	components: { ImageBox },
	data() {
		return {
			showWork: false,
		};
	},
	mounted() {
		this.loadingTimer();
		this.work = this.getWork();
	},
	computed: {
		computed_items: function() {
			this.loadingTimer();
			if (this.$store.state.search === 'voir tout') {
				return this.work;
			} else if (this.$store.state.search === '+ ancien') {
				let array = this.work;
				return array.sort((a, b) => a.id - b.id);
			} else if (this.$store.state.search === '+ recent') {
				let array = this.work;
				return array.sort((a, b) => b.id - a.id);
			} else {
				let array = this.work;
				return array.filter(element => {
					for (let i in element.tag) {
						if (element.tag[i].name == this.$store.state.search) return true;
					}
				});
			}
		},
	},
	methods: {
		loadingTimer: function() {
			this.$store.commit('loadingState', true);
			this.showWork = false;

			setTimeout(
				function() {
					this.$store.commit('loadingState', false);
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
	},
};
</script>
<style lang="scss" scoped>
@import '../../src/sass/work';
</style>
