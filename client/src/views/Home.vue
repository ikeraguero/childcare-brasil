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
          Realize uma doação e nos ajude a mudar a vida de milhares de crianças
          brasileiras!
        </h1>
        <h2 class="header-description">
          Doe agora para as nossas escolas e crianças registradas
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
    <div class="sections">
      <section>
        <div class="features-container">
          <div class="feature-box">
            <strong class="feature-title"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="feature-icon w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              Fazendo o bem</strong
            >
            <p class="feature-text">
              Doe agora mesmo para nossas escolas e crianças e se sinta bem
              consigo mesmo por ajudar uma causa tão importante.
            </p>
          </div>

          <div class="feature-box">
            <strong class="feature-title"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="feature-icon w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Honestidade com seu dinheiro</strong
            >
            <p class="feature-text">
              Somos uma organização que não visa o lucro, portanto, doe e tenha
              a consciência que 100% do seu dinheiro será destinado a escola ou
              criança escolhida por você!
            </p>
          </div>

          <div class="feature-box">
            <strong class="feature-title">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="feature-icon w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>
              Contador de doações</strong
            >
            <p class="feature-text">
              Até o momento, o contador de doações do Childcare Brasil
              atualizado em tempo real contabiliza um total de
              <strong>{{ cards.data.length }}</strong> doações.
            </p>
          </div>
        </div>
      </section>
      <section class="quote-section">
        <div class="imagequote">
          <img
            src="../assets/imagens/Screenshot from 2023-09-06 13-15-40.png"
            alt=""
            class="img-quote"
          />
        </div>
        <div class="blockquote">
          <div class="quote-text font-bold">
            “E eu tenho uma preocupação muito grande com as crianças, como elas
            se desenvolvem, como elas crescem, como são educadas. No Brasil e no
            mundo faltam recursos para que essas crianças sejam educadas da
            maneira devida e é por essa razão que eu doo.”
          </div>
          <p class="mt-6">
            - Yasmim Bernardi, co-fundadora do Childcare Brasil
          </p>
        </div>
      </section>
    </div>
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
body,
h1,
.slogan {
  color: #fff6ee;
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

h1 {
  font-size: 30px;
}

* {
  box-sizing: border-box;
}

.v-btn {
  position: relative;
  margin: 0;
}

.header-title,
.header-description,
.features-container {
  color: #343a40;
}

.header-title {
  line-height: 1;
  font-size: 48px;
  letter-spacing: -3px;
}

.header-description {
  margin-top: 15px;
  font-size: 20px;
}

.header-2 {
  display: grid;
  padding: 50px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: 0px;
}

.header-btns {
  display: flex;
  gap: 20px;
  margin-top: 25px;
}

.donation-btn:hover {
  background-color: #855348;
}

.donation-btn {
  background-color: #743d31;
  font-size: 15px;
  padding: 15px 13px;
  border-radius: 15px;
  font-weight: bold;
  text-transform: uppercase;
}

.features-container {
  display: grid;
  margin-left: 15px;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  margin-top: 86px;
  margin-bottom: 86px;
}

.feature-title {
  font-size: 24px;
  letter-spacing: -0.7px;
}

.feature-text {
  margin-top: 10px;
  font-size: 18px;
  line-height: 22px;
}

.feature-icon {
  stroke: #743d31;
}

.blockquote {
  color: #fff6ee;
  font-size: 24px;
}

.quote-section {
  display: grid;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 2fr;
  padding: 20px;

  background-color: #743d31;
  margin: 0 auto;
}

.img-quote {
  margin: 0 auto;
  border-radius: 10px;
  width: 80%;
}

.sections {
  margin: 0 auto;
  width: 90%;
}

svg {
  margin-bottom: 10px;
}
</style>
