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
          Nos ajude a mudar a vida de milhares de crianças brasileiras!
        </h1>
        <h2 class="header-description">
          Doe agora para as nossas escolas e crianças registradas.
        </h2>
        <div class="header-btns">
          <router-link to="/criancas" class="donation-btn"
            >Crianças</router-link
          >
          <router-link to="/escolas" class="donation-btn">Escolas</router-link>
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
          <div class="donators-text">
            <span>R$500.000+</span> em doações no último ano!
          </div>
        </div>
      </div>
    </header>
    <div class="sections">
      <section>
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
              Comece a doar e tenha a certeza de ajudar uma causa extremamente importante em todo o país.
            </p>
          </div>

          <div class="feature-box">
            <strong class="feature-title"
              ><ion-icon name="cash-outline" class="feature-icon"></ion-icon>
              Honestidade com seu dinheiro</strong
            >
            <p class="feature-text">
              Não visamos lucros, 100% do seu dinheiro é destinado à escola ou criança escolhida por você!
            </p>
          </div>

          <div class="feature-box">
            <strong class="feature-title">
              <ion-icon name="stats-chart-outline" class="feature-icon"></ion-icon>
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
      <div class="section-header">
          <span class="section-title">DOADORES</span>
          <span class="section-subtitle">Depoimentos de quem faz o bem</span>
        </div>
      <section class="testimonials-section">
          <div class="quote-photo"><img src="../assets/imagens/1.jpg" alt="" class="quote-donator-img"></div>
          <div class="quote-text"><blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corporis tenetur sunt nihil illum vero, perspiciatis iure exercitationem voluptate ex animi architecto sequi eligendi. Dignissimos tempore recusandae modi nulla voluptatibus.</blockquote></div>
        
          <div class="quote-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius ab facere veniam accusamus dolore. Dolorum fugit voluptates quisquam provident veniam, commodi molestiae perferendis debitis, odio nihil voluptate esse quod.</div>
          <div class="quote-photo"><img src="../assets/imagens/1.jpg" alt="" class="quote-donator-img"></div>
        
        
          <div class="quote-photo"><img src="../assets/imagens/1.jpg" alt="" class="quote-donator-img"></div>
          <div class="quote-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, atque dolor fugiat corrupti ipsa, nesciunt consequuntur aliquid optio doloremque natus commodi architecto? Natus voluptas maxime, praesentium possimus et ipsa asperiores?</div>
        
      </section>
      <section class="cta">
        <div class="cta-container grid grid--3-cols">
          <div class="text-box">
            <h2 class="cta-title">Registre crianças e escolas!</h2>
            <p class="cta-subtitle">Preencha as informações abaixo caso seja representante de uma escola e possua alunos que deseja inserir em nosso sistema para doações. </p>
            <form action="" class="grid grid--2-cols">
              <div class="cta-form-grid-item">
                <label for="full-name">Qual o seu nome completo?</label>
                <input type="text" placeholder="João da Silva" id="full-name">
              </div>
              <div class="cta-form-grid-item">
                <label for="email">Qual o seu email?</label>
                <input type="text" placeholder="eu@exemplo.com" id="email">
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
            <img src="../assets/imagens/cta-photo.jpeg" alt="" class="cta-img">
          </div>
        </div>
      </section>
      <footer class="footer-section grid grid--5-cols">
        <div class="column">
          <span class="logo-footer">CHILDCARE BRASIL</span>
          <div class="social-media-icons">
            <a href="#"><ion-icon name="logo-facebook" class="footer-icons"></ion-icon></a>
            <a href="#"><ion-icon name="logo-instagram" class="footer-icons"></ion-icon></a>
            <a href="#"><ion-icon name="logo-twitter" class="footer-icons"></ion-icon></a>
          </div>
        </div>
        <div class="column">
          <span class="column-footer-title">Contato</span>
          <div class="contact-info">
            <p class="address">Rua Dona Cezarina, 101, Joinville, Santa Catarina</p>
            <p class="cellphone">(47) 99963-2311</p>
            <p class="email">childcarebrasil@gmail.com</p>
          </div>
        </div>
        <div class="column">
          <span class="column-footer-title">Conta</span>
          <ul class="footer-list">
            <li>Criar uma conta</li>
            <li>Fazer Log In</li>
            <li>iOS</li>
            <li>Android</li>
          </ul>
        </div>
        <div class="column">
          <span class="column-footer-title">Empresa</span>
          <ul class="footer-list">
            <li>Sobre ChildcareBrasil</li>
            <li>Para Negócios</li>
            <li>Parceiros</li>
          </ul>
        </div>
        <div class="column">
          <span class="column-footer-title">Recursos</span>
          <ul class="footer-list">
            <li>Doações</li>
            <li>Central de Ajuda</li>
            <li>Termos de privacidade</li>
          </ul>
        </div>
      </footer>
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

.header-description {
  margin-top: 1.4rem;
  font-size: 20px;
}

.header-2 {
  display: grid;
  padding: 1.2rem 4.8rem 6.4rem 4.8rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: 0px;
  gap: -2.8rem;
  max-width: 130rem;
  background-color: #fff6ee;
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
  margin-bottom: 9.6rem
}


.feature-title {
  font-size: 24px;
  letter-spacing: -0.7px;
}

.feature-text {
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

section:nth-child(2) {
  padding-top: 10.8rem;
}

section {
  margin-top: 8.4rem;
}


.testimonials-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.8rem;
  row-gap: 6.4rem;
  align-items: center;
  }

  .quote-text {
    grid-column: span 2;
    font-size: 1.6em;
  }
  .quote-photo {
    justify-self: center;
  }

  .quote-photo img {
    width: 14.8rem;
    border-radius: 50%;
    border: 4px #743d31 solid;
  }

  .text-box {
    grid-column: span 2;
    padding: 4.8rem 3.6rem 3.6rem 3.6rem;
  }

  .cta-container {
    background-color: #743d31;
    border-radius: 9px;
    font-family: inherit;
  }

  .img-box {
    display: flex;
    justify-content: flex-end;
  }

  .cta-img {
    width: 90%;
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

  form input, form select, .cta-button {
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
  font-size: 1.6rem
  }

  .address, .cellphone, .email {
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


</style>
