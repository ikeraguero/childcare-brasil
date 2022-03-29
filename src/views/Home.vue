<template>
  <v-container class="pa-8" fluid>
    <h1 class="h1"></h1>
    <v-row>
      <v-col cols=5>
     <mosaico-animais />
      </v-col>
      <v-col>
        <p class="slogan">
            Faça sua doação para:  
        </p>

        <br><br>

          <div class="d-flex justify-space-around mt-16 ">

            <v-btn icon min-width="200" min-height="200" link to="/ajudarescolas">
            <v-img 
            link to="/perfil"
            class="posicao"
            lazy-src="@/assets/imagens/3.png"
            max-height="225px"
            max-width="225px"
            src="@/assets/imagens/botao1.png" 
          ></v-img>
            </v-btn>

            <v-btn icon min-width="200" min-height="200" link to="/ajudarcriancas">

            <v-img
            class="posicao"
            lazy-src="@/assets/imagens/4.png"
            max-height="225px"
            max-width="225px"
            src="@/assets/imagens/imagem1.png"
          ></v-img>
            </v-btn> 
          </div>
          <br>
          <div class="d-flex justify-space-around" height="100">
            <h1>Escolas</h1> 
            <h1>Crianças</h1>
          </div>
        
      </v-col>
      <br>
    </v-row>
    <v-row>
      <v-col>
        <h1 class="titulo-resto"></h1>
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
  font-family: "Architects Daughter", cursive;
  text-align: center;
  color: #E9FEFF;
  font-size: 60px;
}

h1{
  color: #E9FEFF;
font-family: "Architects Daughter", italic, cursive;
  font-size: 60px;
}

.titulo-resto{
  text-align: center;
}


</style>