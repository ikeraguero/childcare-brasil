<template>
  <v-app>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Rubik:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <nav class="nav" ref="myNav">
      <div>
        <router-link to="/"><h1 class="logo">Childcare Brasil</h1></router-link>
      </div>
      <ul class="nav-links" id="links-nav">
        <router-link to="/adminn">
          <li
            class="nav-item"
            v-if="
              $auth.isAuthenticated &&
              $auth.user.email == 'ikerpires407@gmail.com'
            "
          >
            Admin
          </li>
        </router-link>
        <router-link to="/"><li class="nav-item">Início</li></router-link>
        <a href="#contact"><li class="nav-item">Contato</li></a>
        <router-link to="/comodoar"
          ><li class="nav-item">Como Doar</li></router-link
        >
        <a href="#testimonials"><li class="nav-item">Depoimentos</li></a>
        <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark"
          ><strong class="auth-btn">Comece a doar</strong></a
        >
        <a v-if="$auth.isAuthenticated" @click="logout" class="button is-dark"
          ><strong class="auth-btn">Sair</strong></a
        >
      </ul>
      <button class="nav-menu-mobile">
        <ion-icon
          class="nav-menu-mobile-icon"
          name="close-outline"
          id="open"
          @click="closeMenu"
        ></ion-icon>
        <ion-icon
          class="nav-menu-mobile-icon"
          name="menu-outline"
          id="closed"
          @click="openMenu"
        ></ion-icon>
      </button>
    </nav>

    <v-main class="fundo">
      <router-view></router-view>
    </v-main>
    <footer class="container-footer footer-section footer-grid">
      <div class="column">
        <span class="logo-footer">CHILDCARE BRASIL</span>
        <div class="social-media-icons">
          <a href="#"
            ><ion-icon name="logo-facebook" class="footer-icons"></ion-icon
          ></a>
          <a href="#"
            ><ion-icon name="logo-instagram" class="footer-icons"></ion-icon
          ></a>
          <a href="#"
            ><ion-icon name="logo-twitter" class="footer-icons"></ion-icon
          ></a>
        </div>
      </div>
      <div class="column">
        <span class="column-footer-title">Contato</span>
        <div class="contact-info">
          <p class="address">
            Rua Dona Cezarina, 101, Joinville, Santa Catarina
          </p>
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
      <div class="column-company">
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
  </v-app>
</template>
<script
  type="module"
  src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
></script>
<script
  nomodule
  src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
></script>
<script>
import Home from "../views/Home.vue";

export default {
  name: "Nav",
  components: {
    Home,
  },
  mounted() {
    this.$on("navRef", (navRef) => {
      this.myNavRef = navRef;
    });
  },
  data() {
    return {
      myNavRef: null,
    };
  },
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
      document.querySelector("nav").classList.add("mobile-menu");
      document.querySelector(".logo").style.display = "none";
      document.querySelector(".nav-item").style.marginTop = "30px";
      document.getElementById("links-nav").style.display = "block";
      document.getElementById("closed").style.display = "none";
      document.getElementById("open").style.display = "block";
      console.log(document.querySelector(".nav-item"));
    },
    closeMenu() {
      document.querySelector("nav").classList.remove("mobile-menu");
      document.querySelector(".logo").style.display = "block";
      document.getElementById("links-nav").style.display = "none";
      document.getElementById("closed").style.display = "block";
      document.getElementById("open").style.display = "none";
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: "Rubik", sans-serif;
}

.mobile-menu {
  height: 100vh;
  background-color: #fff;
  position: relative;
}

.mobile-menu-stay-at-top {
  display: none;
}

.appear {
  display: block;
}

.v-application a {
  color: #fff6ee;
}

.v-application {
  font-family: "Rubik", sans-serif;
}

.fundo {
  background-color: #fff;
}
.conta {
  padding: auto 9px;
  color: #fff6ee;
}

.v-list-item__content {
  color: #fff6ee;
}
.v-list-item__icon {
  color: #fff6ee;
}

.menu {
  color: #fff6ee;
  display: inline;
  margin: 10px;
  padding: 0px;
}
.teste {
  justify-content: center;
}

.nav-links-vertical-spacing {
  margin-top: 2.4rem;
}

nav {
  display: flex;
  justify-content: space-between;
  padding: 0 4.8rem;
  align-items: center;
  height: 9.6rem;
  background-color: #fff6ee;
}
.logo {
  color: #743d31;
  text-transform: uppercase;

  letter-spacing: 5px;
  font-size: 20px;
}
.nav-links {
  display: flex;
  justify-content: space-between;
  gap: 4rem;
}
.nav-links a,
.nav-item {
  color: #333;
  font-family: "Proxima Nova", system-ui, sans-serif;
  text-decoration: none;
  letter-spacing: 0.1rem;
  font-weight: bold;
  font-size: 1.8rem;
}

.nav-links li {
  list-style: none;
}

.burguer {
  display: none;
}

.burguer div {
  width: 25px;
  height: 3px;
  background-color: #621200;
  margin: 5px;
  cursor: pointer;
}

.nav-menu-mobile {
  display: none;
}

.spacing {
  margin-top: 1.8rem !important;
}

@media screen and (max-width: 1024px) {
  .nav-linha {
    width: 60%;
  }
}

.auth-btn {
  color: #fff6ee;
  background-color: #743d31;
  padding: 1.2rem 3.2rem;
  border-radius: 9px;
}

.auth-btn:hover {
  background-color: #855348;
}

.nav-item:hover,
.nav-item:active {
  color: #743d31;
}

.nav-item li a:hover,
.nav-item li a:active {
  color: #743d31;
}

ion-icon {
  width: 2.4rem;
  height: 2.4rem;
}

footer {
  padding: 9.6rem 4.6rem;
}

@media (max-width: 73em) {
  .footer-grid {
    gap: 1.2rem;
    grid-template-columns: repeat(5, 1fr);
  }
  .nav-links {
    gap: 1.6rem;
    font-size: 0.8rem;
  }
}
@media (max-width: 64em) {
  html {
    font-size: 55%;
  }
}

@media (max-width: 60em) {
  .footer-grid {
    grid-template-columns: repeat(6, 1fr);
  }
  html {
    font-size: 50%;
  }
}
@media (max-width: 55em) {
  .nav-links {
    display: none;
  }
  .nav-menu-mobile {
    display: block;
  }
  .nav-menu-mobile ion-icon {
    width: 24px;
    height: 24px;
  }
  #open {
    display: none;
  }
}
@media (max-width: 46em) {
  .footer-grid {
    grid-template-columns: 0.5fr 1fr;
    row-gap: 2.8rem;
  }
  .column-footer-title {
    font-size: 2.4rem;
  }
  .footer-list,
  .address,
  .cellphone,
  .email {
    font-size: 1.6rem;
  }
  .logo-footer {
    font-size: 2.4rem;
  }
}
@media (max-width: 40em) {
  .footer-grid {
    grid-template-columns: 1.5fr;
  }
}
</style>
