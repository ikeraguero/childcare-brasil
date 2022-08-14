<template>
  <v-container class="pa-8 px-0" fluid>
    <h1 class="h1"></h1>
    <v-row>
      <v-col cols=5>
     <mosaico/>
      </v-col>
      <v-col>
        <p class="slogan">
            Faça sua doação para:  
        </p>

        <br><br>
        

          <div class="d-flex justify-space-around mt-20 ">

            <v-btn icon min-width="200" link to="/criancas">
              
            <v-img 
            class="posicao"
            max-height="300px"
            max-width="350px"
            src="@/assets/imagens/1a.png" 
          ></v-img>
            </v-btn>
            <v-btn icon min-width="200" link to="/escolas">

            <v-img
            class="posicao"
            max-height="300"
            max-width="350"
            src="@/assets/imagens/2a.png"
          ></v-img>
            </v-btn> 
          </div>      
          <br>
          <div class="d-flex justify-space-around mt-16 text-3xl" height="100">
            <h1>Crianças</h1> 
            <h1>Escolas</h1>


            
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
         <div class="counter-container">
      <div class="counter" data-target="1500"> {{reaisDoados }}</div>
      <span class="bottom">Reais Doados</span>
    </div>
        </v-col>
        <v-col>
        <div class="counter-container">
      <div class="counter" data-target="1500">{{ materiaisDoados }}</div>
      <span class="bottom">Materiais Doados</span>
    </div>
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

const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 200;
        
        if (c < target) {
        counter.innerText = `${Math.ceil(c +
        increment)}`;
        setTimeout(updateCounter, 1);
    } else {
        counter.innerText = target;
    }
    };
    updateCounter();
});

import Mosaico from '@/components/template/Mosaico'


export default {
  components: {Mosaico},
  methods: {
    teste() {
      alert('oioioi')
    },
    login() {
      this.$auth.loginWithRedirect();
    },
  },
  data() {
    return {
      reaisDoados: 10.01,
      materiaisDoados: 10
    }
  }
  
};


</script>

<style>
.posicao{
  display: inline-block;
}

.slogan {
  font-family: "Proxima Nova", system-ui, sans-serif;
  text-align: center;
  color: #FFF6EE;
  font-size: 40px;
}

.counter-text {
  font-family: "Proxima Nova", system-ui, sans-serif;
  text-align: center;
  color:#621200;
  font-size: 40px;
  min-height: 20px;
  margin-top: 30px;
}

h1{
  color: #FFF6EE;
  font-family: "Proxima Nova", system-ui, sans-serif;
  font-size: 30px;
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
  margin-left: 0%;
  margin-right: 0%;
  display: flex;
  background-color: #FFF6EE;
  width: 100%;
  padding: 10px;
  align-content: center;
  
}
.counter{
  font-size: 100px;
  color: #621200;
   text-align: center;

}
.bottom {
  font-size:25px;
  text-align: center;
  height: 20px;
  padding:0px;
}

* {
  box-sizing: border-box;
}

.counter-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin:30px 50px;
}

.v-btn {
  position: relative;
  margin: 0;
}


</style>