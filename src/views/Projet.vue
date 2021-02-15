<template>
  <div>
    <h2 class="projet_title">{{ 'myProjects' | translate }}</h2>
    <br />
    <div class="block">
      <row container :gutter="50">
        <column :xs="12">
          <div class="block_about">
            <div class="project">
              <h4>Spotify</h4>
              <strong>Cegep de Trois-Rivières</strong>
              <p class="clearfix">
                {{ 'projectContent1' | translate }}.
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
                {{ 'projectContent2' | translate }}.
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
                {{ 'projectContent3' | translate }}.
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
                {{ 'projectContent4' | translate }}.
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
import mixin from '../mixins/mixin.js'

Vue.component("row", Row);
Vue.component("column", Column);

export default {
  name: "Projet",
  mixins: [mixin]
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
