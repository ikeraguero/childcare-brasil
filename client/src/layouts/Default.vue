<template>
  <v-app>
    <nav>
      <div class="logo">
        <router-link to="/"><h4>Childcare Brasil</h4></router-link>
      </div>
      <ul class="nav-links">
        <router-link to="/adminn">
          <li
            v-if="
              $auth.isAuthenticated &&
              $auth.user.email == 'ikerpires407@gmail.com'
            "
          >
            Admin
          </li>
        </router-link>
        <router-link to="/"><li>Início</li></router-link>
        <router-link to="/contato"><li>Contato</li></router-link>
        <router-link to="/comodoar"><li>Como Doar</li></router-link>
        <router-link to="/perfil"><li>Perfil</li></router-link>
        <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark"
          ><strong class="auth-btn">Fazer Login</strong></a
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
    <v-footer app class="py-1"
      ><span class="caption">ChildcareBrasil &copy;2023</span></v-footer
    >
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
}

.v-application a {
  color: #fff6ee;
}
.fundo {
  background-color: #fff6ee;
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
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  background-color: #743d31;
}
.logo {
  color: #fff6ee;
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
li {
  color: #fff6ee;

  font-family: "Proxima Nova", system-ui, sans-serif;
  text-decoration: none;
  letter-spacing: 0px;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
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
  color: #743d31;
  background-color: #fff6ee;
  padding: 5px 20px;
  border-radius: 1000px;
}

.auth-btn:hover {
  background-color: #ffffff;
}
</style>
