<template>
  <v-container class="pa-8 px-0" fluid>
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

            <v-btn icon min-width="200" min-height="150" link to="/ajudarescolas">
            <v-img 
            link to="/perfil"
            class="posicao"
            lazy-src="@/assets/imagens/3.png"
            max-height="220px"
            max-width="18%"
            src="@/assets/imagens/1a.png" 
          ></v-img>
            </v-btn>

            <v-btn icon min-width="220" min-height="150" link to="/ajudarcriancas">

            <v-img
            class="posicao"
            lazy-src="@/assets/imagens/4.png"
            max-height="20%"
            max-width="18%"
            src="@/assets/imagens/2a.png"
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

    <p></p>
    <div class="boxtwo" >
     <v-row class="counter-text" justify="center">CONTADOR:</v-row>
     </div>
      <div class="box" > 
        <v-col>
         <h2 class="top">{{ reaisDoados }}</h2>
        <h3 class="bottom">R$ doados</h3>
        </v-col>
        <v-col>
        <h2 class="top">{{ materiaisDoados }}</h2>
        <h3 class="bottom">materiais doados</h3>
        </v-col>
        
      </div>
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
  },
  data() {
    return {
      reaisDoados: 10.01,
      materiaisDoados: 10
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
  color: #FFF6EE;
  font-size: 50px;
}

.counter-text {
  font-family: "Architects Daughter", cursive;
  text-align: center;
  color:#621200;
  font-size: 40px;
  min-height: 20px;
  margin-top: 30px;
}

h1{
  color: #FFF6EE;
font-family: "Architects Daughter", italic, cursive;
  font-size: 45px;
}

.titulo-resto{
  text-align: center;
}
.box {

  display: flex;
  background-color: #FFF6EE;
  width: 100%;
  padding: 35px;
  align-content: center;
  
}
.boxtwo {
  margin-top: 100px;
  display: flex;
  background-color: #FFF6EE;
  width: 100%;
  padding: 10px;
  align-content: center;
  
}
.top{
  font-size: 130px;
  color: #621200;
   text-align: center;

}
.bottom {
  font-size:25px;
  text-align: center;
  height: 20px;
  padding:0px;


}


</style>