<template>
	<div class="outsider">
		<Title msg="Expériences" />
		<div v-for="e in experience" :key="e.id" class="experiences">
			<div class="top">
				<div v-if="e.businessLink" class="logo">
					<a :href="e.businessLink" target="_blank">
						<ImageBox
							:backgroundImage="require('../../public/logos/' + e.businessLogo)"
							:imageDescription="'logo de ' + e.businessName"
						/></a>
				</div>
				<div v-else class="logo">
					<ImageBox
						:backgroundImage="require('../../public/logos/' + e.businessLogo)"
						:imageDescription="'logo de ' + e.businessName"
					/>
				</div>
				<div class="objectives">
					<a class="hoverLink" :href="e.businessLink" _target="_blank">{{
						e.businessName
					}}</a>
					<ul>
						<li>
							Lieux : <span class="white">{{ e.businessCountry }}</span>
						</li>
						<li v-if="e.contract">
							Contrat : <span class="white">{{ e.contract }}</span>
						</li>
						<li>
							Durée :
							<span class="white">{{ e.startDate }} | {{ e.endDate }}</span>
						</li>
						<li v-for="text in e.objective" :key="text">
							<img
								src="../../public/listStyleType/icons8-rocket-48.png"
								alt="rocket-icon"
							/>
							{{ text }}
						</li>
					</ul>
				</div>
			</div>
			<div v-if="e.work" class="sites">
				<div v-for="w in e.work" :key="w.name">
					<div class="info-site">
						<a :href="w.link" target="_blank">
							<p v-html="w.name"></p>
						</a>
						<span>{{ w.type }}</span>
					</div>
					<div>
						<img
							v-if="w.image"
							class="siteImage"
							:src="require('../../public/experiences/' + w.image)"
							:alt="w.name"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Title from "@/components/title.vue";
import ImageBox from "@/components/ImageBox.vue";
import { bus } from "@/main";
export default {
	components: {
		Title,
		ImageBox
	},
	data() {
		return {
			experience: {}
		};
	},
	created() {
		this.experience = bus.experience;
	}
};
</script>
<style lang="scss" scoped>
.experiences {
  width: 100%;
  min-height: 305px;
  padding: 20px 20px;
  margin: 45px auto 25px;
  align-items: center;
  justify-content: center;
  border: 5px dashed #5083b619;
  display: flex;
  flex-direction: column;
}
.top {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 20px;
  align-items: center;
  a::after {
    display: none;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
  .logo {
    width: 100%;
    text-align: center;
  }
}

.objectives {
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  a {
    text-align: right;
  }
  ul {
    margin: auto;
    .white {
      opacity: 0.5;
    }
    > li {
      text-align: left;
      list-style-type: none;

      &:nth-child(2n) img {
        transform: rotate(200 + deg);
      }
      &:nth-child(3n) img {
        transform: rotate(260 + deg);
      }
      &:nth-child(5n) img {
        transform: rotate(300 + deg);
      }
      &:nth-child(7n) img {
        transform: rotate(30 + deg);
      }
    }
    img {
      margin-bottom: -5px;
      max-width: 20px;
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 500px) {
    margin-top: 70px;
    a {
      text-align: center;
    }
  }
}
.sites {
  text-align: center;
  padding-top: 20px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  div > div {
    margin-top: 20px;
    max-height: 350px;
    overflow: auto;
  }
  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 530px) {
    grid-template-columns: 1fr;
  }
  .info-site {
    display: flex;
    flex-direction: column;
    min-height: 80px;
    justify-content: space-between;
    display: inline-block;
    span {
      text-align: right;
      display: block;
      font-size: 14px;
    }
    a {
      display: inline;
      p {
        display: inline;
      }
    }
  }

  &::before {
    content: "";
    position: absolute;
    width: 40%;
    left: 50%;
    margin-left: -20%;
    border-top: 5px dashed #5083b619;
    transform: translateY(-20px);
  }
}
.siteImage {
  max-width: 100%;
}
</style>
