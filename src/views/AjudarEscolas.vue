<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="titulo">Quero Ajudar</h2>
      <br>
      <LoginButton/>
    </v-container>
  </div>
</template>

<script>
import LoginButton from "../components/LoginButton.vue";

export default {
      components: {
        LoginButton
    },
  }
</script>

<style>
.titulo {
  text-align: center;
  font-family: "Reenie Beanie", cursive;
  font-size: 70px;
  color: #FFF6EE;
}
</style>