<template>
  <article>
    <header>
      <div class="header-2 container">
        <div>
          <v-row>
            <v-col cols="10">
              <mosaico class="mosaico mt-4 ml-3" />
            </v-col>
          </v-row>
        </div>
        <div class="header-text">
          <h1 class="header-title">
            Nos ajude a mudar a vida de milhares de crianças brasileiras!
          </h1>
          <h2 class="header-description">
            Doe agora para as nossas escolas e crianças registradas.
          </h2>
          <div class="header-btns">
            <router-link to="/criancas" class="donation-btn"
              >Crianças</router-link
            >
            <router-link to="/escolas" class="donation-btn"
              >Escolas</router-link
            >
          </div>
          <div class="donations-made">
            <div class="donators-images">
              <img
                src="../assets/imagens/1.jpg"
                alt="Donator 1"
                class="donator-img"
              />
              <img
                src="../assets/imagens/2.jpg"
                alt="Donator 2"
                class="donator-img"
              />
              <img
                src="../assets/imagens/3.jpg"
                alt="Donator 3"
                class="donator-img"
              />
              <img
                src="../assets/imagens/4.jpg"
                alt="Donator 4"
                class="donator-img"
              />
              <img
                src="../assets/imagens/5.jpg"
                alt="Donator 5"
                class="donator-img"
              />
              <img
                src="../assets/imagens/6.jpg"
                alt="Donator 6"
                class="donator-img"
              />
            </div>
            <div class="donators-text overflow whitespace-nowrap">
              <span>R$500.000+</span> em doações no último ano!
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="sections">
      <section class="donate-section container">
        <div class="section-header">
          <span class="section-title">DOAR</span>
          <span class="section-subtitle">Doe agora mesmo!</span>
        </div>
        <div class="features-container">
          <div class="feature-box">
            <strong class="feature-title"
              ><ion-icon name="heart-outline" class="feature-icon"></ion-icon>
              Fazendo o bem</strong
            >
            <p class="feature-text">
              Comece a doar e tenha a certeza de ajudar uma causa extremamente
              importante em todo o país.
            </p>
          </div>

          <div class="feature-box">
            <strong class="feature-title"
              ><ion-icon name="cash-outline" class="feature-icon"></ion-icon>
              Honestidade com seu dinheiro</strong
            >
            <p class="feature-text">
              Não visamos lucros, 100% do seu dinheiro é destinado à escola ou
              criança escolhida por você!
            </p>
          </div>

          <div class="feature-box">
            <strong class="feature-title">
              <ion-icon
                name="stats-chart-outline"
                class="feature-icon"
              ></ion-icon>
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
      <section class="testimonials-section container">
        <div class="section-header" id="testimonials">
          <span class="section-title">DOADORES</span>
          <span class="section-subtitle">Depoimentos de quem faz o bem</span>
        </div>
        <div class="testimonials-grid">
          <div class="quote-photo photo--isabela">
            <img
              src="../assets/imagens/donator1.jpg"
              alt=""
              class="quote-donator-img"
            />
          </div>
          <div class="quote-text">
            <blockquote>
              “E eu tenho uma preocupação muito grande com as crianças, como
              elas se desenvolvem, como elas crescem, como são educadas. No
              Brasil e no mundo faltam recursos para que essas crianças sejam
              educadas da maneira devida e é por essa razão que eu doo.”
            </blockquote>
            <p class="quote-author">
              &ndash; Isabela dos Santos, doadora do Childcare Brasil
            </p>
          </div>

          <div class="quote-text">
            <blockquote>
              “Eu sou doadora e quero convidar você também para ser um novo
              doador. Eu faço isso porque eu acredito no trabalho, acredito que
              as crianças necessitam de apoio e de ajuda e eu não conheço
              ninguém melhor do que o Childcare Brasil para fazer esse
              trabalho.”
            </blockquote>
            <p class="quote-author">
              &ndash; Alice Moraes, doadora do Childcare Brasil
            </p>
          </div>
          <div class="quote-photo photo--alice">
            <img
              src="../assets/imagens/donator2.jpg"
              alt=""
              class="quote-donator-img"
            />
          </div>

          <div class="quote-photo photo--ricardo">
            <img
              src="../assets/imagens/donator3.jpg"
              alt=""
              class="quote-donator-img"
            />
          </div>
          <div class="quote-text">
            <blockquote>
              “Que alegria sinto em saber que muitas crianças estão sendo
              protegidas e alimentadas. Sinto imenso orgulho de todas as pessoas
              envolvidas nesta causa.”
            </blockquote>
            <p class="quote-author">
              &ndash; Ricardo Rodrigues, doador do Childcare Brasil
            </p>
          </div>
        </div>
      </section>
      <section class="cta container" id="contact">
        <div class="cta-container">
          <div class="text-box">
            <h2 class="cta-title">Registre crianças e escolas!</h2>
            <p class="cta-subtitle">
              Preencha as informações abaixo caso seja representante de uma
              escola e possua alunos que deseja inserir em nosso sistema para
              doações.
            </p>
            <form action="" class="cta-grid">
              <div class="cta-form-grid-item">
                <label for="full-name">Qual o seu nome completo?</label>
                <input type="text" placeholder="João da Silva" id="full-name" />
              </div>
              <div class="cta-form-grid-item">
                <label for="email">Qual o seu email?</label>
                <input type="text" placeholder="eu@exemplo.com" id="email" />
              </div>
              <div class="cta-form-grid-item">
                <label for="">Aonde ouviu falar de nós?</label>
                <select name="" id="">
                  <option value="Youtube">Youtube</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Twitter">Twitter/X</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Others">Outros</option>
                </select>
              </div>
              <button class="cta-button">Enviar os dados</button>
            </form>
          </div>
          <div class="img-box">
            <img
              src="../assets/imagens/cta-photo.jpeg"
              alt=""
              class="cta-img"
            />
          </div>
        </div>
      </section>
    </div>
  </article>
</template>

<script>
import Mosaico from "@/components/template/Mosaico";
import axios from "axios";

export default {
  name: "Home",
  components: { Mosaico },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
    openMenu() {
      console.log("Test");
    },
  },
  data() {
    return {
      cards: [],
      showControls: true,
    };
  },
  props: {
    myNavRef: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    axios
      .get("https://childcare-brasil.vercel.app/api/donations")
      .then((response) => (this.cards = response));
    this.$emit("navRef", this.$refs.myNav);
  },
};
</script>

<style>
.container {
  width: 110rem;
}

header {
  background-color: #fff6ee;
}

body,
h1,
.slogan {
  color: #fff6ee;
}

html,
body {
  overflow-x: hidden;
}

body,
template {
  font-family: "Rubik", sans-serif;
}

.mosaico {
  box-shadow: 1px 20px 30px 2px rgb(0, 0, 0, 0.07);
}

.container-footer {
  width: 120rem;
  margin: 0 auto;
}

.grid {
  display: grid;
}

.grid--2-cols {
  grid-template-columns: repeat(2, 1fr);
}

.grid--3-cols {
  grid-template-columns: repeat(3, 1fr);
}

.grid--5-cols {
  grid-template-columns: repeat(5, 1fr);
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
  color: #333;
}

.header-title {
  line-height: 1;
  font-size: 5.2rem;
  letter-spacing: -3px;
  font-weight: 500;
}

.nav-item-mobile {
  font-size: 3.2rem;
  color: #333;
  font-family: "Rubik", system-ui, sans-serif;
  text-decoration: none;
  letter-spacing: 0.1rem;
  font-weight: bold;
}

.nav-links-mobile li:hover,
.nav-links-mobile li:active {
  color: #743d31;
}

.white-nav {
  display: none;
}

.header-description {
  margin-top: 1.4rem;
  font-size: 20px;
}

.header-2 {
  display: grid;
  padding: 6.4rem 4.8rem 9.2rem 4.8rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: 0px;
  gap: -2.8rem;
}

.header-btns {
  display: flex;
  gap: 8px;
  margin-top: 2.4rem;
}

.donation-btn:hover {
  background-color: #855348;
}

.donation-btn {
  background-color: #743d31;
  font-size: 1.8rem;
  padding: 8px 32px;
  border-radius: 9px;
  font-weight: 600;
}

.features-container {
  display: grid;
  margin-left: 15px;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 4.8rem;
  margin-top: 7.8rem;
}

.feature-title {
  font-size: 24px;
  letter-spacing: -0.7px;
}

.feature-text,
.quote-text blockquote {
  margin-top: 10px;
  font-size: 18px;
  line-height: 1.8;
  color: #555;
}

.feature-icon {
  color: #743d31;
  width: 3.2rem;
  height: 3.2rem;
  background-color: #fff6ee;
  border-radius: 50%;
  display: block;
  padding: 1.6rem;
  margin-bottom: 1.2rem;
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

.donators-images,
.donations-made {
  display: flex;
}

.donator-img {
  width: 5.4rem;
  border-radius: 50%;
  border: solid 3px #fff6ee;
}

.donator-img:not(:first-child) {
  margin-left: -1.2rem;
}

.donations-made {
  align-items: center;
  gap: 1.8rem;
  padding-top: 3.2rem;
}

.donators-text {
  font-size: 1.8rem;
  font-weight: 500;
  letter-spacing: -0.7px;
}

.donators-text span {
  color: #621200;
}

.section-header {
  display: flex;
  flex-direction: column;
}

.section-title {
  color: #743d31;
  font-size: 1.4rem;
  letter-spacing: 0.3px;
  font-weight: 600;
}

.section-subtitle {
  color: #333;
  font-size: 3.6rem;
  letter-spacing: 0.4px;
  font-weight: 700;
}

section {
  margin-top: 9.6rem;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
  row-gap: 6.4rem;
  align-items: center;
  margin-top: 7.8rem;
}

.quote-text {
  grid-column: span 2;
  font-size: 1.6em;
}

.quote-text blockquote {
  color: #444;
  font-size: 1.9rem;
}

.quote-author {
  margin-top: 2rem;
  color: #555555c2;
}
.quote-photo {
  justify-self: center;
}

.quote-photo img {
  width: 20.4rem;
  border-radius: 50%;
  border: 4px #743d31 solid;
  box-shadow: 1px 20px 30px 2px rgb(0, 0, 0, 0.07);
}

.text-box {
  grid-column: span 2;
  padding: 3.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cta-container {
  background-color: #743d31;
  border-radius: 9px;
  font-family: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  box-shadow: 1px 20px 30px 2px rgb(0, 0, 0, 0.07);
}

.img-box {
  display: flex;
  justify-content: flex-end;
}

.cta-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.cta-img {
  width: 100%;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
}

.cta-title {
  font-size: 4.4rem;
  font-weight: 600;
}

.cta-subtitle {
  margin-top: 1.2rem;
  font-size: 1.8rem;
}

.cta-form-grid-item {
  margin-top: 2.4rem;
  display: flex;
  flex-direction: column;
}

.cta-form-grid-item label {
  font-size: 1.6rem;
}

form {
  column-gap: 2.4rem;
  row-gap: 1.2rem;
}

form input,
form select,
.cta-button {
  background-color: #fff6ee;
  padding: 1.2rem 1.2rem;
  font-size: 1.8rem;
  border-radius: 9px;
  margin-top: 0.8rem;
}

.cta-button {
  background-color: #fff6ee;
  display: block;
  text-decoration: none;
  border-radius: 9px;
  min-width: 0;
  min-height: 5.2rem;
  align-self: flex-end;
}

.footer-section {
  margin-top: 9.6rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;
  gap: 4.8rem;
}

.column-footer-title {
  font-size: 1.8rem;
  color: #111;
  font-weight: 400;
}

.footer-list {
  font-size: 1.4rem;
  margin-top: 1.4rem;
  list-style: none;
  padding-left: 0 !important;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #555;
}

.logo-footer {
  color: #743d31;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  font-size: 1.6rem;
}

.address,
.cellphone,
.email {
  font-size: 1.4rem;
  color: #555;
}

.contact-info {
  margin-top: 1.4rem;
}

.social-media-icons {
  margin-top: 1.2rem;
  display: flex;
  gap: 3.2rem;
}

.footer-icons {
  color: #555;
  width: 2.6rem;
  height: 2.6rem;
}

/* MEDIA QUERIES */

@media (max-width: 79em) {
  .donations-made {
    flex-direction: column;
    align-items: normal;
  }
}

@media (max-width: 68em) {
  .footer-grid {
    gap: 1.2rem;
    grid-template-columns: repeat(5, 1fr);
  }
  .nav-links {
    gap: 2.8rem;
  }
}

@media (max-width: 55em) {
  .mosaico {
    display: none;
  }
  .header-2 {
    display: flex;
    text-align: center;
    position: relative;
    top: 0;
    flex-direction: column;
  }
  .header-text {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section {
    margin-top: 3.2rem;
  }
  .footer-section {
    padding-top: 3.6rem;
  }
  .cta {
    padding-top: 2.4rem;
  }

  .nav-links-mobile {
    background-color: #fff;
    z-index: 9999;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 3.2rem;
  }

  .nav-item {
    font-size: 6.4rem;
  }

  .white-nav {
    height: 100vh;
    padding: 0;
    position: absolute;
    width: 100%;
  }
  .header-btns {
    padding-top: 2.4rem;
  }
}

@media (max-width: 49em) {
  .container {
    padding: 9.6rem 6.4rem 2.4rem 6.4rem;
    width: 80rem !important;
  }
  .features-container {
    grid-template-columns: 1fr;
    row-gap: 3.6rem;
  }
  .cta-grid {
    grid-template-columns: 1fr;
    row-gap: 0.8rem;
  }
  .cta-button {
    margin-top: 4.2rem;
  }
  .cta-form-grid-item label {
    font-size: 2rem;
  }
  .cta-img {
    width: 100%;
  }
  .text-box {
    grid-column: span 1;
  }
  .cta-container {
    grid-template-columns: 1.5fr 1fr;
  }
}
@media (max-width: 45em) {
  .testimonials-grid {
    margin-top: 3.2rem;
    grid-template-columns: 1fr;
    text-align: center;
    align-items: center;
    justify-content: center;
    row-gap: 2.8rem;
  }
  .quote-photo {
    align-self: center;
    justify-self: center;
    margin-top: 2.8rem;
  }

  .quote-photo img {
    width: 18.6rem;
  }
  .photo--alice {
    grid-row: 3;
  }

  .cta-img {
    display: none;
  }
  .text-box {
    grid-column: span 2;
  }
}
@media (max-width: 43.8em) {
  .container {
    width: 68rem !important;
  }
}
@media (max-width: 37em) {
  .container {
    width: 50rem !important;
  }
  .section-header {
    text-align: center;
  }
}
@media (max-width: 26.6em) {
  .container {
    width: 40rem !important;
  }
}
@media (max-width: 21.2em) {
  .container {
    width: 30rem !important;
  }
}
</style>
