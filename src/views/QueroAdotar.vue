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
          animal: "Gato",
          nome: "Pandora",
          idade: "2 anos",
          sexo: "Fêmea",
          raca: "Vira Lata",
          porte: "Medio",
          descricao: "Pet carinhosa",

        },
        {
          id: 2,
          src: require("@/assets/imagens/2.jpg"),
          animal: "Cachorro",
          nome: "Belinha",
          idade: "4 anos",
          sexo: "Fêmea",
          raca: "Vira Lata",
          porte: "Grande",
          descricao: "Pet amável",
        },
        {
          id: 3,
          src: require("@/assets/imagens/3.jpg"),
          animal: "Gato",
          nome: "Nina",
          idade: "6 anos",
          sexo: "Fêmea",
          raca: "Vira Lata",
          porte: "Pequeno",
          descricao: "Pet tranquila e companheira",
        },
        {
          id: 4,
          src: require("@/assets/imagens/4.jpg"),
          animal: "Cachorro",
          nome: "Princesa",
          idade: "8 anos",
          sexo: "Fêmea",
          raca: "Vira Lata",
          porte: "Medio",
          descricao: "Pet carinhosa e brincalhona",
        },
        {
          id: 5,
          src: require("@/assets/imagens/5.png"),
          animal: "Gato",
          nome: "Hunter",
          idade: "3 anos",
          sexo: "Macho",
          raca: "Vira Lata",
          porte: "Médio",
          descricao: "Pet arisco, mas muito companheiro",
        },
        {
          id: 6,
          src: require("@/assets/imagens/6.jpg"),
          animal: "Cachorro",
          nome: "Zoey",
          idade: "9 anos",
          sexo: "Fêmea",
          raca: "Vira Lata",
          porte: "Grande",
          descricao: "Pet muito carinhosa",         
        },
        {
          id: 7,
          src: require("@/assets/imagens/7.jpg"),
          animal: "Gato",
          nome: "Lua",
          idade: "3 anos",
          sexo: "Fêmea",
          raca: "Vira Lata",
          porte: "Pequeno",
          descricao: "Pet calma e fácil de lidar",        
        },
        {
          id: 8,
          src: require("@/assets/imagens/8.jpg"),
          animal: "Cachorro",
          nome: "Chloe",
          idade: "3 anos",
          sexo: "Fêmea",
          raca: "Vira Lata",
          porte: "Pequeno",
          descricao: "Pet calma e fácil de lidar",
        },
        {
          id: 9,
          src: require("@/assets/imagens/9.jpg"),
          animal: "Gato",
          nome: "Pikki",
          idade: "3 anos",
          sexo: "Macho",
          raca: "Vira Lata",
          porte: "Pequeno",
          descricao: "Pet calmo e tranquilo",
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