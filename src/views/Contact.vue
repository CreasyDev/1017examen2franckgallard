<template>
  <div>
    <h2 class="contact_title">Contact</h2>
    <br />
    <div class="block">
      <row container :gutter="50">
        <column :xs="12" :md="6" :lg="6">
          <div class="text_align_left">
            <h2>Franck Gallard</h2>
            <p>{{ 'contactMe' | translate }}!</p>
          </div>
        </column>
        <column :xs="12" :md="6" :lg="6">
          <div class="block_contact">
            <h2 class="contact_title">{{ 'form' | translate }}</h2>
            <hr />
            <form>
              <div>
                <label for="lastName">{{ 'lastName' | translate }}</label>
                <input v-model="lastName" type="text" />
              </div>
              <br />
              <div>
                <label for="prenom">{{ 'firstName' | translate }}</label>
                <input v-model="prenom" type="text"  />
              </div>
              <br />
              <div>
                <label for="email">{{ 'email' | translate }}</label>
                <input v-model="email" type="text"  />
              </div>
              <br />
              <div>
                <label for="category">{{ 'category' | translate }}</label>
                <select>
                  <option v-for="option in listOptions" :key="option.value">
                    {{ option.label }}
                  </option>
                </select>
              </div>
              <br />
              <button @click="showThisModal">
                {{ 'submit' | translate }}
              </button>
              <br />
            </form>
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
  name: "Contact",
  mixins: [mixin],
  data: function() {
    return {
      listOptions: [
        { value: null, label: "Sélectionner une catégorie:" },
        { value: "demande_info", label: "Demande d'information" },
        { value: "offre_post_permanent", label: "Offre de post permanent" },
        {
          value: "offre_emploi_partiel",
          label: "Offre d'emploi à temps partiel",
        },
        { value: "offre_contrat", label: "Offre d'emploi de contrat" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.block {
  margin: auto 10%;
}
.block_contact {
  border: 1px solid #0083f5;
  padding: 10px;
  border-radius: 5px;
}
.contact_title {
  color: #0083f5;
}

form div {
  display: block;
  margin: 20px;
  clear: left;
}

form div label {
  margin-right: 30px;
  display: block;
}
</style>