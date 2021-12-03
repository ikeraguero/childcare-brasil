<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1"></h1>
    <v-row>
      <v-col cols=5>
     <mosaico-animais />
      </v-col>
      <v-col>
        <p class="slogan">
            Doe um lar, adote um animal.  
        </p>

        <br><br>

          <div class="d-flex justify-space-around mt-16 ">

            <v-btn icon min-width="200" link to="/queroadotar">
            <v-img 
            link to="/perfil"
            class="posicao"
            lazy-src="@/assets/imagens/3.png"
            max-height="600px"
            max-width="500px"
            src="@/assets/imagens/3.png" 
          ></v-img>
            </v-btn>

            <v-btn icon min-width="200" link to="/queroajudar">

            <v-img
            class="posicao"
            lazy-src="@/assets/imagens/4.png"
            max-height="600"
            max-width="500"
            src="@/assets/imagens/4.png"
          ></v-img>
            </v-btn> 
          </div>
          <br> <br> <br>
          <div class="d-flex justify-space-around">
            <h1>Quero Adotar</h1> 
            <h1>Quero Ajudar</h1>
          </div>
        
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1 class="titulo-resto">Animigos</h1>
      </v-col>
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

.slogan {
  font-family: 'Reenie Beanie', cursive;
  text-align: center;
  color: #f8f8f2;
  font-size: 60px;
}

h1{
  color: #f8f8f2;
  font-family: 'Reenie Beanie', cursive;
  font-size: 60px;
}

.titulo-resto{
  text-align: center;
}


</style>