<template>
  <div class="box">
    <div class="left">
      <Title msg="Un peut de Moi" />
      <p>
        D'origine portugaise, à l'âge d'un an et demi, je suis parti vivre avec
        mes parents à Macau en Chine. J'ai fait mes premièeres années d'études
        et amitiées.
      </p>
      <p>
        Ce n'est que à l'âge de 13 ans que je suis repartie vivre au Portugal
        pour finir mes études et devenir modeliste à temps plêin.
      </p>
      <p>
        Pour des soucis financier et le décés de mon pêre, je suis parti
        travailler en France pour venir aux besoins de ma famille. Ne pas parler
        français ne mas pas en aucans cas empecher de trouver mon premier
        travaille dans le térritoire français en tant que saisionnièere dans une
        usine de fruits. Meme si le travaille semblait insignifiant je me sui
        investi à font et donner de mon meilleur. J'ai appris a parler Français
        ce que ma permis de trouver un autre travaille pour combler
      </p>

      <div class="buttons-box">
        <StyleButton text="Mes réalizations" link="realisations" />
        <StyleButton text="Contact" link="contact" />
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import StyleButton from "@/components/styleButton.vue";
import Title from "@/components/title.vue";
export default {
  name: "Intro",
  components: {
    StyleButton,
    Title
  }
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
  background-image: url("../../src/assets/ordinateur-portable.png");
}
</style>
