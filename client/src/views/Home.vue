<template>
  <article>
    <header class="header-2">
      <div>
        <v-row>
          <v-col cols="10">
            <mosaico class="mt-4 ml-3" />
          </v-col>
        </v-row>
      </div>
      <div class="header-text">
        <h1 class="header-title">
          Realize uma doação e nos ajude a mudar a vida de milhares de crianças!
        </h1>
        <h2 class="header-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor
          massa id neque aliquam. Sed faucibus turpis in eu mi bibendum neque
          egestas
        </h2>
        <div class="header-btns">
          <router-link to="/criancas" class="donation-btn"
            >Doe para Crianças</router-link
          >
          <router-link to="/escolas" class="donation-btn"
            >Doe para Escolas</router-link
          >
        </div>
      </div>
    </header>

    <section class="counters mt-20">
      <div class="boxtwo rounded-sm">
        <v-row class="counter-text" justify="center">CONTADOR</v-row>
      </div>
      <v-col>
        <div v-if="cards.data.length <= 9">
          <div class="counter mb-4">0{{ cards.data.length }}</div>
          <h3 class="text-2xl text-center">Total de Doações Realizadas</h3>
        </div>
        <div v-else>
          <div class="counter mb-4">{{ cards.data.length }}</div>
          <h3 class="text-2xl text-center">Total de Doações Realizadas</h3>
        </div>
      </v-col>
    </section>
    <v-row>
      <v-col>
        <h1 class="title-rest"></h1>
      </v-col>
    </v-row>
  </article>
</template>

<script>
import Mosaico from "@/components/template/Mosaico";
import axios from "axios";

export default {
  components: { Mosaico },
  methods: {},
  data() {
    return {
      cards: [],
      showControls: true,
    };
  },
  mounted() {
    axios
      .get("https://childcare-brasil.vercel.app/api/donations")
      .then((response) => (this.cards = response));
  },
};
</script>

<style>
.counters,
.counter-text,
.counter {
  color: #621200;
}

.slogan,
.counter-text,
h1 {
  font-family: "Proxima Nova", system-ui, sans-serif;
}

.box,
.boxtwo {
  display: flex;
  background-color: #fff6ee;
  width: 100%;
  align-content: center;
}

body,
h1,
.slogan {
  color: #fff6ee;
}

.counters {
  background: #fff6ee;
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
  font-family: "Roboto", sans-serif;
  background: lightskyblue
    url("https://i.pinimg.com/originals/3c/24/46/3c24462450c2a902bf7e18f3d9aada81.jpg");
  /* Push to bottom */
}

.posicao {
  display: inline-block;
}

.slogan {
  text-align: center;
  font-size: 40px;
}

.counter-text {
  text-align: center;
  font-size: 40px;
  min-height: 20px;
  margin-top: 20px;
}

h1 {
  font-size: 30px;
}

.title-rest {
  text-align: center;
}
.box {
  padding: 35px;
}
.boxtwo {
  margin-top: 5px;
  margin-left: 0;
  margin-right: 0;
  padding: 10px;
}
.counter {
  margin-top: 10px;
  font-size: 100px;
  text-align: center;
}
.bottom {
  font-size: 25px;
  text-align: center;
  height: 20px;
  padding: 0px;
}

* {
  box-sizing: border-box;
}

.counter-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 50px;
}

.v-btn {
  position: relative;
  margin: 0;
}

.header-title,
.header-description {
  color: rgb(92, 92, 92);
}

.header-title {
  line-height: 1;
  font-size: 48px;
  letter-spacing: -3px;
}

.header-description {
  margin-top: 20px;
  font-size: 20px;
}

.header-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  align-items: center;
  min-height: 0px;
}

.header-btns {
  display: flex;
  gap: 30px;
  margin-top: 20px;
}

.donation-btn:hover {
  background-color: #855348;
}

.donation-btn {
  background-color: #743d31;
  font-size: 15px;
  padding: 15px 13px;
  border-radius: 1000px;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
