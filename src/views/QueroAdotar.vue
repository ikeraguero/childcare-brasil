<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="titulo">Quero Adotar</h2>
      <listar-animais v-if="!detalhes" v-model="items" @adotar="adotar" />
      <detalhes-animal v-else v-model="animalSelecionado" />
    </v-container>
  </div>
</template>

<script>
import ListarAnimais from "@/components/adocao/ListarAnimais.vue";
import DetalhesAnimal from "@/components/adocao/DetalhesAnimal.vue";

export default {
  name: "QueroAdotar",
  data() {
    return {
      detalhes: false,
      animalSelecionado: {},
      items: [
        {
          id: 1,
          src: require("@/assets/imagens/1.jpg"),
        },
        {
          id: 2,
          src: require("@/assets/imagens/2.jpg"),
        },
        {
          id: 3,
          src: require("@/assets/imagens/3.jpg"),
        },
        {
          id: 4,
          src: require("@/assets/imagens/4.jpg"),
        },
        {
          id: 5,
          src: require("@/assets/imagens/5.png"),
        },
        {
          id: 6,
          src: require("@/assets/imagens/6.jpg"),
        },
        {
          id: 7,
          src: require("@/assets/imagens/7.jpg"),
        },
        {
          id: 8,
          src: require("@/assets/imagens/8.jpg"),
        },
        {
          id: 9,
          src: require("@/assets/imagens/9.jpg"),
        },
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
};
</script>

<style>
.titulo {
  text-align: center;
  font-family: "Reenie Beanie", cursive;
  font-size: 80px;
  color: #f8f7f2;
}
</style>