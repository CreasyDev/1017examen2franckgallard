<template>
  <div>
    <h3>{{ 'welcome' | translate }}!</h3>
    <div v-if="isLogged">
      <label class="">
        {{ 'connectedMessage' | translate }}.
        <a href="#" @click="toggleLogin">{{ 'logout' | translate }}</a>
      </label>
      <hr />
      <h2 class="profil">{{ 'myProfile' | translate }}</h2>
      <br />
      <div class="block">
        <row container :gutter="50">
          <column :xs="12" :md="4" :lg="3">
            <div class="text_align_left">
              <h2>Franck Gallard</h2>
              <h5>{{ 'frontEndDeveloper' | translate }}</h5>
            </div>
          </column>
          <column :xs="12" :md="8" :lg="9">
            <div class="block_about">
              <h3 class="text_align_left">{{ 'aboutMe' | translate }}</h3>
              <p>{{ 'myProfileContent1' | translate }}.
              </p>
              <p>{{ 'myProfileContent2' | translate }}.
              </p>
            </div>
          </column>
        </row>
        <row container :gutter="50">
          <column :xs="0" :md="4" :lg="3"> </column>
          <column :xs="12" :md="8" :lg="9">
            <div class="block_about">
              <h3 class="text_align_left">{{ 'experiences' | translate }}</h3>
              <div class="experience">
                <h4>{{ 'experienceOneTitle' | translate }} - PIGISTE</h4>
                <strong>Cowansville, Qc . 2013 - {{ 'today' | translate }} </strong>
                <p class="clearfix">{{ 'myExperienceContent1' | translate }}.
                </p>
              </div>
              <div class="experience">
                <h4>{{ 'designer' | translate }} / {{ 'experienceOneTitle' | translate }} - EXEKO</h4>
                <strong>Montréal, Qc . 2012 - 2013 </strong>
                <p class="clearfix">{{ 'myExperienceContent2' | translate }}.
                </p>
              </div>
              <div class="experience">
                <h4>{{ 'webMaster' | translate }} - LA CASA NELLA</h4>
                <strong>Montréal, Qc . 2008 - 2012 </strong>
                <p class="clearfix">{{ 'myExperienceContent3' | translate }}.
                </p>
              </div>
            </div>
          </column>
        </row>
        <row container :gutter="50">
          <column :xs="0" :md="4" :lg="3"> </column>
          <column :xs="12" :md="8" :lg="9">
            <div class="block_about">
              <h3 class="text_align_left">{{ 'educations' | translate }}</h3>
              <div class="experience">
                <h4>2019-2021 | A.E.C Developpement Web Front-end</h4>
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
        {{ 'notConnectedMessage' | translate }}.
        <a href="#" @click="toggleLogin">{{ 'login' | translate }}</a>
      </label>
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
  name: "Home",
  beforeMount() {
    this.loggedIn = true;
  },
  mixins: [mixin],
  data() {
    return {
      language : "en",
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
