<template>
  <v-app>
    <nav>
      <div class="logo">
        <router-link to="/"><h4>Childcare Brasil</h4></router-link>
      </div>
      <ul class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/contato">Contato</router-link>
        <router-link to="/comodoar">Como doar</router-link>
        <router-link to="/perfil" v-if="$auth.isAuthenticated">Perfil</router-link > 
        <router-link to=""> <AuthenticationButton/> </router-link > 
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
import AuthenticationButton from "../components/AuthenticationButton.vue";

export default {
    components: { AuthenticationButton }
};
</script>

<style>




.v-application a{
  color: #621200;
}
.fundo{
  background-color: #621200 ;
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