<template>
  <v-app>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Rubik:wght@400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
    <nav>
      <div>
        <router-link to="/"><h1 class="logo">Childcare Brasil</h1></router-link>
      </div>
      <ul class="nav-links">
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
        <a href="#testimonials"><li class="nav-item">Depoimentos</li></a>
        <router-link to="/perfil"><li class="nav-item">Perfil</li></router-link>
        <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark"
          ><strong class="auth-btn">Comece a doar</strong></a
        >
        <a v-if="$auth.isAuthenticated" @click="logout" class="button is-dark"
          ><strong class="auth-btn">Sair</strong></a
        >
      </ul>
      <div class="burguer">
        <div class="linha1"></div>
        <div class="linha2"></div>
        <div class="linha3"></div>
      </div>
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
  </v-app>
</template>
<script>
export default {
  name: "Nav",
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
  gap: 40px;
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

@media screen and (max-width: 1024px) {
  .nav-linha {
    width: 60%;
  }
}

@media screen and (max-width: 768px) {
  body {
    overflow-x: hidden;
  }
  .nav-links {
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 8vh;
    background-color: #fff6ee;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }
  .nav-links li {
    opacity: 0;
  }
  .burguer {
    display: block;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown:hover .dropdown-content {
    display: block;
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
footer {
  padding: 9.6rem 0;
}
</style>
