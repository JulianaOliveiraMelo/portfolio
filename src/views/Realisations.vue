<template>
  <div class="realisations">
    <h1>Mes réalisations</h1>
    <div id="box">
      <div class="box-container">
        <div class="container" v-for="project in work" :key="project.id">
          <div class="box-image">
            <ImageShadow
              class="work-image"
              :width="width"
              :shadowBlur="10"
              :src="require('/public/images/' + project.image.source)"
            />
          </div>
          <div class="box-info">
            <div class="title">
              <h4>{{ project.name }}</h4>
            </div>
            <div class="info">
              <div class="box-icons">
                <li v-for="icon in project.icons" :key="icon.id" class="icons">
                  <ImageShadow
                    :width="35"
                    :shadowBlur="20"
                    :src="require('/public/icons/' + icon)"
                  />
                </li>
              </div>
              <div class="context">
                <p>{{ project.text }}</p>
                <h6>{{ project.schoolName }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../main.js";
import ImageShadow from "vue-image-shadow";
export default {
  name: "realisations",
  data() {
    return {
      work: {},
      width: "100%"
    };
  },
  components: {
    ImageShadow
  },

  created() {
    this.work = bus.work;
  }
};
</script>

<style lang="scss" scoped>
#box {
  margin: 15px;
  text-align: center;
  width: 100%;
}
.box-container {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-self: center;
  align-items: center;
}
//left
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 50%;
  margin-bottom: 20px;
  overflow: hidden;
}

.box-image {
  display: block;
  max-width: 35%;
  text-align: center;
}
.work-image {
  border-radius: 20px;
  width: 100%;
  object-fit: cover;
  border-right: 5px dashed yellowgreen;
}
//right
.box-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
}

.info {
  display: flex;
  flex-direction: row;
}
.box-icons {
  display: flex;
  flex-direction: column;
  width: 40px;
}
.box-icons {
  & > img {
    max-width: 20px;
  }
  & > li {
    list-style-type: none;
  }
}
.image-shadow-icons {
  width: 100%;
  border: 2px solid yellowgreen;
  transform: scale(0.8);
  object-fit: cover;
  background-position-y: 2px;
  background-size: contain;
  background-repeat: no-repeat;
  backdrop-filter: blur(10px);
}
.context {
  text-align: left;
  align-self: flex-end;
}
.box-info:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.056);
}
@media screen and (max-width: 800px) {
  .container {
    width: 100%;
  }
  .box-image {
    width: 100%;
  }
  .box-info {
    width: 100%;
  }
}
</style>
