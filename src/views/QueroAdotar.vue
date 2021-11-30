<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="titulo">Quero Adotar</h2>
      <v-row>
        <v-col v-for="item in items" :key="item.id" class="d-flex child-flex" cols="6" sm="4">
          <v-card flat tile class="d-flex">
            
            <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "QueroAdotar",
  data() {
    return {
      items: [
        {
          id: 1,
          src: require("../assets/imagens/1.jpg"),
        },
        {
        id: 2,
          src: require("../assets/imagens/2.jpg")
        },
        {
          id: 3,
          src: require("../assets/imagens/3.jpg")
          
        },
        {
          id: 4,
          src: require("../assets/imagens/4.jpg")
        },
        {
          id: 5,
          src: require("../assets/imagens/5.png")
        },
        {
          id: 6,
          src: require("../assets/imagens/6.jpg")
        },
        {
          id: 7,
          src: require("../assets/imagens/7.jpg")
        },
        {
          id: 8,
          src: require("../assets/imagens/8.jpg")
        },
        {
          id: 9,
          src: require("../assets/imagens/9.jpg")
        }
      ]
    };
  }
};
</script>

<style>
.titulo {
  text-align: center;
  font-family: 'Reenie Beanie', cursive;
  font-size: 80px;
  color: #f8f7f2;
}
</style>