<template>
  <v-row>
    <item-mosaico v-for="(imagem, i) in imagens" :key="i" :imagem="imagem" />
  </v-row>
</template>

<script>
import ItemMosaico from "./ItemMosaico.vue";
export default {
  components: { ItemMosaico },
  data() {
    return {
      imagens: [
        "https://i.ibb.co/f8qgfvx/3.jpg",

        "https://i.ibb.co/TcyJzbC/2.jpg",

        "https://i.ibb.co/f8qgfvx/3.jpg",

        "https://i.ibb.co/qBWPjP4/6.jpg",

        "https://i.ibb.co/myWNqKF/7.jpg",

        "https://i.ibb.co/0hPRF13/4.jpg",

        "https://i.ibb.co/myWNqKF/7.jpg",

        "https://i.ibb.co/z5S1sRy/8.jpg",

        "https://i.ibb.co/yfrry0P/9.jpg",
      ],
    };
  },
};
</script>

<style>
.imgMosaico {
  margin: 0;
  padding: 0.5rem !important;
}
</style>
