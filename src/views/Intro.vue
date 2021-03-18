<template>
  <div class="box">
    <div class="left">
      <Title msg="Lorem ipsum, dolor" />
      <p>
        Je m'appelle Juliana Melo, j'ai 36 ans et j'habite à Mansonville dans le
        Tarn-et-Garonne.
      </p>
      <p>
        D'origine portugaise, en étant jeune j'ai eu l'occasion de voyager avec
        mes parents un peu partout dans le monde et d'habiter dans une colonie
        portugaise à Macao en Chine, où j'ai fait mes premières années d'école.
        à mes treize ans, juste avant que Macao soit rendue aux chinois, je n'ai
        pas eu d'autre choix que de suivre ma famille et de repartir vivre au
        Portugal. En 2004 j'ai eu mon Bac professionnel en tant que modéliste.
        J'ai démarré le monde du travail avec deux jobs en même temps, modéliste
        en stage pendant la semaine dans une usine de confection et caissière
        les weekends et jours fériés dans un supermarché. Mes deux contrats
        finis, j'ai trouvé du travail dans une autre usine de confection ou très
        vite je suis devenue polyvalente. J'étais modéliste, mais je remplaçais
        mon patron dès qu'il s'absentait. Je gérais les stocks des accessoires,
        je répondais au téléphone, j'étais en contact direct avec les clients et
        les fournisseurs et parfois je trouvais même le temps d' aider dans la
        production pour que les commandes ne prennent pas de retard. J'aimais
        beaucoup mon travail, mais mon salaire ne parvenait pas à suivre les
        besoins de ma famille.
      </p>
      <p>
        En 2008 j'ai pris la décision de venir travailler en France. J'ai
        démarré en tant qu'étiqueteuse l'été, dans une station fruitière. Je ne
        savais pas parler français, mais en aucun cas cela m'a empêché de bien
        faire mon travail. L'hiver je travaillais aussi dans une autre station
        fruitière en tant que trieuse de pommes. Très vite mon français
        s'est amélioré et je suis devenue cheffe de ligne d'une équipe d'environ
        10 personnes.
      </p>
      <p>
        En 2011, j'ai arrêté mon contrat pour me mettre à mon propre compte. Je
        suis devenue commerçante ambulante sur les marchés et foires de France.
        Je vendais des bijoux et du tatouage temporaire l'été et des gants,
        bonnets, chaussettes et écharpes en hiver.
      </p>
      <p>
        En 2013 j'ai eu mon premier enfant, qui s'est vite suivi de mon deuxième
        et troisième petit loup. J'ai arrêté mon activité en 2017, pour me
        consacrer à eux et savourer les meilleurs moments de tendresse dans leur
        plus jeune âge.
      </p>
      <p>
        C'est pendant mes congés parentaux que j'ai découvert mon goût pour la
        programmation. En effet, mon mari avait pris mon affaire et demandé de
        créer un site e-commerce pour pouvoir vendre les affaires du marché. Je
        lui ai donc créé un site sur PrestaShop. Comme je ne connaissais rien,
        j'ai regardé des vidéos sur Youtube, où il expliquait comment modifier
        certaines fonctionnalités de base et les adapter à nos besoins. C'est là
        que j'ai touché au code pour la première fois. J'ai tellement  aimé, que
        je me suis dit que je voulais faire de ça mon métier.
      </p>
      <p>
        En 2019 j'ai donc décidé de me lancer en autodidacte et j'ai démarré mes
        premières leçons de JavaScript, HTML et CSS sur Khan Academy. J'ai vite
        pris goût au code et mon rêve de devenir développeuse Web et mobile est
        apparue. Aujourd'hui je passe des heures et des heures à apprendre sans
        me lasser.
      </p>
      <p>
        Récemment admise à l'école Openclassrooms, je suis le parcours de
        développeuse d'application iOS, car pour moi, pour devenir une meilleure
        développeuse mobile, il faut démarrer par le native. J'ai comme objectif
        par la suite d'apprendre android native, mais aussi iOS/Android hybride.
        Je ne compte pas m'arrêter là car je sais que le monde du web est en
        constante évolution.
      </p>
      <p>
        Alors si vous connaissez quelqu'un qui veut bien m'embaucher en contrat
        de professionnalisation d'une durée de 24 mois au rythme de 4 jours
        entreprise 1 jour école, n'hésitez pas à entrer en contact avec moi.
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
p {
  columns: 3;
}
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
