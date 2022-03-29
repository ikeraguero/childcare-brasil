<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="titulo">Quero Ajudar</h2>
      <listar-animais v-if="!detalhes" v-model="items" @adotar="adotar" />
      <detalhes-animal v-else v-model="animalSelecionado" />
    </v-container>
  </div>
</template>

<script>
import ListarAnimais from "@/components/adocao/ListarAnimais.vue";
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
</script>

<style>
.titulo {
  text-align: center;
  font-family: "Reenie Beanie", cursive;
  font-size: 80px;
  color: #E9FEFF;
}
</style>