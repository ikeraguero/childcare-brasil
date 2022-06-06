<template>
  <v-app>
    <v-app-bar app color="#FFF6EE" dark height="75">   
      <v-btn icon min-width="250px" link to="/">
      <v-img
        src="@/assets/imagens/3a.png"
        max-width="300px"
        max-height="300px"
      >
      </v-img>      
      </v-btn>
      <v-spacer>
        <h3>
        <v-list-item>
          <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
          <div class="menu">{{item.title}}</div>
          </v-list-item>
        </v-list-item>
        </h3>
      </v-spacer>
      <v-btn icon color="#621200" large on click link to="/perfil"><v-icon>mdi-account</v-icon></v-btn>
    </v-app-bar>

    <v-main class="fundo">
      <router-view></router-view>
    </v-main>
    <v-footer app class="py-1"
      ><span class="caption">Todos os direitos reservados &copy;2022</span></v-footer
    >
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sidebar: true,
      mini: false,
      items: [
        { title: "HOME", to: "/" },
        { title: "PERFIL", to: "/perfil" },
        { title: "QUEM SOMOS", to: "/quemSomos" },
        { title: "ENTRE EM CONTATO", to: "/contato" },
        { title: "COMO DOAR", to: "/comodoar" },
        { title: "FAQ", to: "/faq" },
      ],
    };
  },
};
</script>

<style>
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
  display: inline;
  margin: 10px;
}
.v-application{
  color: none;
}
</style>