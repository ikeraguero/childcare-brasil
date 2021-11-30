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

          <div class="d-flex justify-center mt-16 ">

            <v-btn icon min-width="200" link to="/queroadotar">
            <v-img 
            link to="/perfil"
            class="posicao"
            lazy-src="@/assets/imagens/1.png"
            max-height="350"
            max-width="250"
            src="@/assets/imagens/1.png" 
          ></v-img>
          
            </v-btn>

            <v-btn icon min-width="200" link to="/queroajudar">

            <v-img
            class="posicao"
            lazy-src="@/assets/imagens/2.png"
            max-height="350"
            max-width="250"
            src="@/assets/imagens/2.png"
          ></v-img>
            </v-btn>

          </div>

        
      </v-col>
    </v-row>
    <v-row>
      <h1></h1>
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
  font-family: 'Reenie Beanie', cursive;;
  text-align: center;
  color: #f8f8f2;
  font-size: 60px;
}

</style>