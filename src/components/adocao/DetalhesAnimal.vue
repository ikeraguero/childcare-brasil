<template>
  <v-row>
    <v-col cols="1" sm="4">
      <v-card flat tile class="d-flex" @click="$emit('fechar')">
        <v-img :src="value.src" aspect-ratio="1" class="grey lighten-2">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-card>
    </v-col>
    <v-col>

    <v-col>
      <v-row class="caracteristicas">
        <div class="">
          <p>Animal: {{ value.animal }}</p>
          <p>Nome: {{ value.nome }}</p>
          <p>Idade: {{ value.idade }}</p>
          <p>Sexo: {{ value.sexo }}</p>
          <p>Raça: {{ value.raca }}</p>
          <p>Porte: {{ value.porte }}</p>
          <p>Descrição: {{ value.descricao}}</p>
        </div>
        <v-col class="d-flex justify-end">
          <v-row class="d-flex justify-center ">
            <v-btn  class="config-botao" max-width="230" link to="/">
              <v-img
              lazy-src="@/assets/imagens/queroadotar.png"
              src="@/assets/imagens/queroadotar.png"
              max-height="350px"
              max-width="400px"
            ></v-img>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  
      


    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.titulo{
  font-size: 60px;
  font-family:'Reenie Beanie', cursive;
  color: #f8f7f2;
}
.caracteristicas{
  font-size: 25px;
  font-family: 'Cardo';
  color: #f8f7f2;
  text-justify: auto;
  padding-top: 31x;
}

.config-botao{
  margin-top: 120px;
}


</style>