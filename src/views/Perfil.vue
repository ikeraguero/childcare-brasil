<template>
  <v-container class="pa-8" fluid>
    <h1 class="titulo">Meu perfil</h1>
    <v-form>
      <v-container>
        <v-text-field color="#f8f8f2" label="Nome" v-model="nome"></v-text-field>
        <v-text-field color="#f8f8f2" label="Sobrenome" v-model="sobrenome"></v-text-field>
        <v-btn color="#f8f8f2">Salvar</v-btn>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      nome: "",
      sobrenome: "",
    };
  },
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