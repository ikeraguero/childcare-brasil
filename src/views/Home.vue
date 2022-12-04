<template>
  <div class="pa-8 px-0" fluid>
    <h1 class="h1"></h1>
    <v-row>
      <v-col cols=5>
     <mosaico class="mt-4 ml-3" />
      </v-col>
      <v-col>
        <p class="slogan mt-24">
            Faça sua doação para  
        </p>

        <br><br>
        

          <div class="d-flex justify-space-around mt-20 ml-8">

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
          <div class="d-flex justify-space-around mt-16 text-3xl font-bold ml-7" height="100">
            <h1>Crianças</h1> 
            <h1>Escolas</h1>
          </div>
      </v-col>
      <br>
    </v-row>

    <p></p>
    <div class="boxtwo rounded-sm" >
     <v-row class="counter-text" justify="center">CONTADOR</v-row>
     </div>
        <section class="counters">
        
        <v-col>
        <div v-if="cards.data.length <= 9">
					<div class="counter mb-4"> 0{{cards.data.length}} </div>
					<h3 class="text-2xl text-center">Total de Doações Realizadas</h3>
				</div>
        <div v-else>
					<div class="counter mb-4">{{cards.data.length}} </div>
					<h3 class="text-2xl text-center">Total de Doações Realizadas</h3>
				</div>
        </v-col>
        
      </section> 
    <v-row>
      <v-col>
        <h1 class="titulo-resto"></h1>
      </v-col>
    </v-row>
      
  
  </div>
  

</template>

<script>

import Mosaico from '@/components/template/Mosaico'
import axios from "axios";

export default {
  components: {Mosaico},
  methods: {
    
  },
  data() {
        return {
            cards: [],
            showControls: true,
        };
    },
    mounted() {
        axios.get("http://localhost:7777/api/donations").then((response) => (this.cards = response));
    },
  
};


</script>

<style>

header {
	flex: 1;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

header h1 {
	font-size: 60px;
}

.counters {
	background: #FFF6EE;
	color: #621200;
	padding: 40px 20px;
  margin: 0px;
	border-top: 3px #621200, solid;
}

.counters .container {
	display: flex;
  margin: 0px;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 25px;
	text-align: center;
}

.counters i {
	color: lightskyblue;
	margin-bottom: 5px;
}

.counters .counter {
	font-size: 55px;

}

@media (max-width: 700px) {
	.counters .container {
		grid-template-columns: repeat(2, 1fr);
	}

	.counters .container > div:nth-of-type(1),
	.counters .container > div:nth-of-type(2) {
		border-bottom: 1px #621200, solid;
		padding-bottom: 20px;
	}
}
body {
	font-family: 'Roboto', sans-serif;
	background: lightskyblue
		url('https://i.pinimg.com/originals/3c/24/46/3c24462450c2a902bf7e18f3d9aada81.jpg');
	color: #fff;
	/* Push to bottom */
}

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
  margin-top: 20px;
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
  margin-left: 0;
  margin-right: 0;
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