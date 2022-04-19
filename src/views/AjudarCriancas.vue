<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="titulo">Quero Ajudar</h2>
      <listar-animais v-if="!detalhes" v-model="items" @adotar="adotar" />
      <detalhes-animal v-else v-model="animalSelecionado" />
    </v-container>
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  <br> 
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
</template>

<script>

/**import ListarAnimais from "@/components/adocao/ListarAnimais.vue";
import DetalhesAnimal from "@/components/adocao/DetalhesAnimal.vue";

import { collection, getDocs } from "firebase/firestore";
import { db } from "@/plugins/firebase";
export default {
  name: "AjudarCriancas",
  data() {
    return {
      detalhes: false,
      animalSelecionado: {},
      items: [
       
      ],
    };
  },
  
  components: { ListarAnimais, DetalhesAnimal },
  methods: {
    adotar(animal) {
      this.animalSelecionado = animal;
      this.detalhes = true;
    },
  },
    async created() {
    const querySnapshot = await getDocs(collection(db, "animais"));
    querySnapshot.forEach((doc) => {
      const src = doc.data().src
      this.items.push({id: doc.id, ...doc.data(), src: require(`@/assets/imagens/${src}`)})
    });
  },
};
*/
</script>

<style>
.titulo {
  text-align: center;
  font-family: "Reenie Beanie", cursive;
  font-size: 80px;
  color: #E9FEFF;
}
</style>