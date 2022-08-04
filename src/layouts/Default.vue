<template>
  <v-app>
    <nav>
      <div class="logo">
        <h4>Childcare Brasil</h4>
      </div>
      <ul class="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/contato">Contato</a></li>
        <li><a href="/comodoar">Como doar</a></li>
        <li><a v-if="$auth.isAuthenticated" href="/perfil">Perfil </a ></li> 
        <li><AuthenticationButton /></li>
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
    data() {
        return {
            sidebar: true,
            mini: false,
            items: [
                { title: "HOME", to: "/" },
                { title: "PERFIL", to: "/perfil" },
                { title: "QUEM_SOMOS", to: "/quemSomos" },
                { title: "ENTRE_EM_CONTATO", to: "/contato" },
                { title: "COMO_DOAR", to: "/comodoar" },
                { title: "FAQ", to: "/faq" },
            ],
        };
    }
    ,
    components: { AuthenticationButton }
};
</script>

<style>


*{
  margin:0px;
  padding:0px;
  box-sizing: border-box;
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