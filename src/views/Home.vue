<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1">Home</h1>
    <v-row>
      <v-col cols=5>
     <mosaico-animais />
      </v-col>
      <v-col>
        <p class="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p> <br> <br>

          <div class="d-flex justify-center mt-16 ">

            <v-btn icon min-width="200" link to="/perfil">
            <v-img 
            link to="/perfil"
            class="posicao"
            lazy-src="@/assets/imagens/queroadotar.png"
            max-height="350"
            max-width="250"
            src="@/assets/imagens/queroadotar.png" 
          ></v-img>
          
            </v-btn>

            <v-btn icon min-width="200" link to="/perfil">

            <v-img
            class="posicao"
            lazy-src="@/assets/imagens/queroajudar.png"
            max-height="350"
            max-width="250"
            src="@/assets/imagens/queroajudar.png"
          ></v-img>
            </v-btn>

          </div>

        
      </v-col>
    </v-row>
    <v-row>
      <h1>Resto do texto</h1>
    </v-row>
  </v-container>

</template>

<script>
import MosaicoAnimais from '@/components/template/MosaicoAnimais'
export default {
  components: {MosaicoAnimais},
  methods: {
    teste() {
      alert('oioioi')
    }
  }
}
</script>

<style>
.posicao{
  display: inline-block;
}

</style>