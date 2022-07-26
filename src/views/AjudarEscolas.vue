<template>
  <div class="block galleryBlock">
    <v-container>
      <h2 class="titulo">Quero Ajudar</h2>
      <br>
      <listar-animais v-if="!detalhes" v-model="items" @adotar="adotar" />
      <detalhes-animal v-else v-model="animalSelecionado" />
    </v-container>
  </div>
</template>

<script>
export default {
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