<template>
  <div>
    <h2 class="contact_title">Contact</h2>
    <br />
    <div class="block">
      <row container :gutter="50">
        <column :xs="12" :md="6" :lg="6">
          <div class="text_align_left">
            <h2>Franck Gallard</h2>
            <p>Contactez-moi pour tout type d'opportunité!</p>
          </div>
        </column>
        <column :xs="12" :md="6" :lg="6">
          <div class="block_contact">
            <h2 class="contact_title">Formulaire</h2>
            <hr />
            <form>
              <div>
                <label for="nom">Nom</label>
                <input v-model="nom" type="text" placeholder="Nom" />
              </div>
              <br />
              <div>
                <label for="prenom">Prénom</label>
                <input v-model="prenom" type="text" placeholder="Prénom" />
              </div>
              <br />
              <div>
                <label for="courriel">Courriel</label>
                <input v-model="courriel" type="text" placeholder="Courriel" />
              </div>
              <br />
              <div>
                <label for="courriel">Catégorie</label>
                <select>
                  <option v-for="option in listOptions" :key="option.value">
                    {{ option.label }}
                  </option>
                </select>
              </div>
              <br />
              <button @click="showThisModal">
                Soumettre
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

Vue.component("row", Row);
Vue.component("column", Column);

export default {
  name: "Contact",
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