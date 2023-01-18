<template>
  <v-app>
    <nav>
      <div class="logo">
        <router-link to="/"><h4>Childcare Brasil</h4></router-link>
      </div>
      <ul class="nav-links">
        <router-link v-if="$auth.isAuthenticated && $auth.user.email == 'ikerpires407@gmail.com'" to="/adminn">Admin</router-link > 
        <router-link to="/">Home</router-link>
        <router-link to="/contato">Contato</router-link>
        <router-link to="/comodoar">Como doar</router-link>
        <router-link to="/perfil">Perfil</router-link > 
        <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark"><strong>Entrar</strong></a>
        <a v-if="$auth.isAuthenticated" @click="logout" class="button is-dark"><strong>Sair</strong></a>
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
      ><span class="caption">ChildcareBrasil &copy;2022</span></v-footer
    >
  </v-app>

</template>
<script>
export default {
  name: 'Nav',
  methods: {
  // Log the user in
  login() {
    this.$auth.loginWithRedirect();
  },
  // Log the user out
  logout() {
    this.$auth.logout({
      returnTo: window.location.origin
    });
  }
  }
}
</script>

<style>



*{
  margin: 0;
}

.v-application a{
  color: #621200;
}
.fundo{
  background-image: linear-gradient(120deg, #621200, #7c3403);
}
.conta{
  padding: auto 9px;
  color: #621200;
}

.v-list-item__content {
  color: #621200;
}
.v-list-item__icon {
  color: #621200;
}

.menu{
  color:#621200;
  display:inline;
  margin: 10px;
  padding:0px;
}
.teste {
  justify-content: center;
}

nav{
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background-color: #FFF6EE;
}
.logo{
  color: #621200;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 20px;
}
.nav-links {
  display: flex;
  justify-content: space-around;
  width: 40%
}
.nav-links a{
  color: #621200;
  font-family: "Proxima Nova", system-ui, sans-serif;
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 14px;
}

.nav-links li{
  list-style: none;
}

.burguer{
  display: none
}

.burguer div{
  width: 25px;
  height: 3px;
  background-color:#621200;
  margin: 5px;
  cursor: pointer;
}

@media screen and (max-width:1024px){
  .nav-linha{
    width:60%
  }
}

@media screen and (max-width:768px){
  body {
    overflow-x: hidden;
  }
  .nav-links{
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 8vh;
    background-color:#FFF6EE;
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
}
</style>