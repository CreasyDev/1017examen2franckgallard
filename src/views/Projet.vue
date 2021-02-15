<template>
  <div>
    <h2 class="projet_title">Mes projets</h2>
    <br />
    <div class="block">
      <row container :gutter="50">
        <column :xs="12">
          <div class="block_about">
            <div class="project">
              <h4>Spotify</h4>
              <strong>Cegep de Trois-Rivières</strong>
              <p class="clearfix">
                Projet semblable à <b>Spotify</b> réalisé avec la technologie
                <b>ReactJs</b> dans le cadre de ma formation
                <b>A.E.C Développement Web Front-end</b>.
              </p>
            </div>
          </div>
        </column>
      </row>
      <row container :gutter="50">
        <column :xs="12">
          <div class="block_about">
            <div class="project">
              <h4>Saveurs Jamaicaines</h4>
              <strong>Cegep de Trois-Rivières</strong>
              <p class="clearfix">
                Projet de commande en ligne pour un restaurant
                <b>Saveurs Jamaicaines</b> développé en <b>PWA Reactjs</b> dans
                le cadre de ma formation
                <b>A.E.C Développement Web Front-end</b>.
              </p>
            </div>
          </div>
        </column>
      </row>
      <row container :gutter="50">
        <column :xs="12">
          <div class="block_about">
            <div class="project">
              <h4>App1</h4>
              <strong>Cegep de Trois-Rivières</strong>
              <p class="clearfix">
                <b>TP1</b> réalisé avec le framework <b>VueJs</b> dans le cadre
                de ma formation <b>A.E.C Développement Web Front-end</b>.
              </p>
            </div>
          </div>
        </column>
      </row>
      <row container :gutter="50">
        <column :xs="12">
          <div class="block_about">
            <div class="project">
              <h4>Forfait Voyage</h4>
              <strong>Cegep de Trois-Rivières</strong>
              <p class="clearfix">
                Projet de forfait vogage développé avec
                <b>Angular</b> dans le cadre de ma formation
                <b>A.E.C Développement Web Front-end</b>.
              </p>
            </div>
          </div>
        </column>
      </row>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Row, Column } from "vue-grid-responsive";

Vue.component("row", Row);
Vue.component("column", Column);

export default {
  name: "Projet",
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
.projet_title {
  color: #0083f5;
}
.text_align_left {
  text-align: left;
}
.project h4,
.project h5 {
  text-align: left;
  margin-bottom: 0;
}
.project strong {
  font-size: 13px;
  float: left;
  text-align: left;
  margin-bottom: 5px;
}
.clearfix {
  clear: left;
}
</style>
