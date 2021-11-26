<template>
  <v-row>
    <item-mosaico v-for="(imagem, i) in imagens" :key="i" :imagem="imagem" />

  </v-row>
</template>

<script>
import ItemMosaico from './ItemMosaico.vue'
export default {
    components: { ItemMosaico },
    data() {
        return {
            imagens: [
               "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_2731.jpg",
               "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_2731.jpg",
               "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_2731.jpg",
               "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_2731.jpg",
                "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_2731.jpg",
               "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_2731.jpg",
               "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_2731.jpg",
               "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_2731.jpg",
               "https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_2731.jpg" 
            ]
        }
    }
}
</script>

<style>

.imgAnimais {
    margin: 0;
    padding: 1px !important;
}

</style>