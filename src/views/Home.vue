<template>
  <div>
    <h3>Bienvenue!</h3>
    <div v-if="isLogged">
      <label class="">
        Vous êtes connectés.
        <a href="#" @click="toggleLogin">Se déconnecter</a>
      </label>
      <hr />
      <h2 class="profil">Mon profile</h2>
      <br />
      <div class="block">
        <row container :gutter="50">
          <column :xs="12" :md="4" :lg="3">
            <div class="text_align_left">
              <h2>Franck Gallard</h2>
              <h5>Développeur Front-end</h5>
            </div>
          </column>
          <column :xs="12" :md="8" :lg="9">
            <div class="block_about">
              <h3 class="text_align_left">À Propos de Moi</h3>
              <p>
                De nature autodidacte, j'ai construit mon expérience à travers
                mes treize années passées dans l'univers du Web. En tant
                qu'intégrateur j'ai travaillé sur des projets variés pour des
                petites et moyennes entreprises. J'ai réussi à relever de
                nombreux défis. Notamment, lorsque la complexité de certaines
                demandes techniques allaient bien au-delà de mes compétences.
              </p>
              <p>
                J'aime le visuel, c'est ce qui me permet de penser une interface
                pour en faire une expérience utilisateur adaptée. Bien que
                l'esprit d'initiative fasse partie de ma personnalité,
                l'intégrité, le partage et la cohésion de groupe sont des traits
                que je possède. Mon objectif à court terme est d'évoluer au sein
                d'une agence Web en tant que Développeur Front-end Junior.
              </p>
            </div>
          </column>
        </row>
        <row container :gutter="50">
          <column :xs="0" :md="4" :lg="3"> </column>
          <column :xs="12" :md="8" :lg="9">
            <div class="block_about">
              <h3 class="text_align_left">Expériences</h3>
              <div class="experience">
                <h4>Intégrateur Web - PIGISTE</h4>
                <strong>Cowansville, Qc . 2013 - Aujourd'hui </strong>
                <p class="clearfix">
                  Participer au développement de services web et mobiles: HTML5
                  | SASS | JavaScript. Programmer des interfaces afin qu'elles
                  soient animées et interactives : JavaScript. Effectuer la
                  refonte de différentes parties d'un projet en utilisant: HTML5
                  | CSS3 | SASS Déployer différents projets et effectuer des
                  tests afin de s'assurer qu'ils soient fonctionnels.
                </p>
              </div>
              <div class="experience">
                <h4>Designer / Intégrateur Web - EXEKO</h4>
                <strong>Montréal, Qc . 2012 - 2013 </strong>
                <p class="clearfix">
                  Intégrer du contenu sur le site de l'organisme via les
                  langages hypers médias: HTML | CSS. Rendre les pages
                  interactives au moyen de la librairie et langage: JQuery |
                  JavaScript natif. Réaliser les flyers, newsletters,
                  banderoles, photomontages avec: Photoshop | Illustrator | HTML
                  | CSS.
                </p>
              </div>
              <div class="experience">
                <h4>Webmestre - LA CASA NELLA</h4>
                <strong>Montréal, Qc . 2008 - 2012 </strong>
                <p class="clearfix">
                  Gérer l'hébergement ainsi que les mises à jour du site web de
                  l'entreprise: HTML | CSS. Veiller à la stabilité des
                  fonctionnalités liées à la base de données: PHP | MySQL.
                  Charger de la communication des nouveaux produits et de
                  l'information via les médias sociaux.
                </p>
              </div>
            </div>
          </column>
        </row>
        <row container :gutter="50">
          <column :xs="0" :md="4" :lg="3"> </column>
          <column :xs="12" :md="8" :lg="9">
            <div class="block_about">
              <h3 class="text_align_left">Mes Formations</h3>
              <div class="experience">
                <h4>2019-2021 | A.E.C Développement Web Front-end</h4>
                <strong>Cegep de Trois-Rivières</strong>
                <p class="clearfix">
                  HMTL5, CSS3, SASS, Bootstrap, JavaScript, React JS, Angular,
                  Vue JS
                </p>
              </div>
              <div class="experience">
                <h4>2011-2012 | A.E.C Techniques Multimedias</h4>
                <strong>Collège Marsan, Montréal</strong>
                <p class="clearfix">
                  HMTL, CSS, JQuery, PHP, Photshop, Illustrator, Premiere, After
                  Effects, 3D Studio Max
                </p>
              </div>
            </div>
          </column>
        </row>
      </div>
    </div>
    <div v-else>
      <label class="">
        Vous n'êtes pas connectés.
        <a href="#" @click="toggleLogin">Se connecter</a>
      </label>
    </div>
  </div>
</template>
<button @click="showThisModal">
  Soumettre
</button>
<script>
import Vue from "vue";
import { Row, Column } from "vue-grid-responsive";

Vue.component("row", Row);
Vue.component("column", Column);

export default {
  name: "Home",
  beforeMount() {
    this.loggedIn = true;
  },
  data() {
    return {
      isLogged: this.loggedIn === undefined ? false : this.loggedIn,
    };
  },
  methods: {
    toggleLogin() {
      this.isLogged = !this.isLogged;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2,
h3,
h5 {
  margin-top: 0;
  margin-bottom: 0;
}
p {
  text-align: justify;
}
.block {
  margin: auto 10%;
}
.block_about {
  border: 1px solid #0083f5;
  padding: 10px;
  border-radius: 5px;
}
.profil {
  color: #0083f5;
}
.text_align_left {
  text-align: left;
}
.experience h4,
.experience h5 {
  text-align: left;
  margin-bottom: 0;
}
.experience strong {
  font-size: 13px;
  float: left;
  text-align: left;
  margin-bottom: 5px;
}
.clearfix {
  clear: left;
}
</style>
