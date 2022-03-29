<template>
  <v-app>
    <v-app-bar app color="#E9FEFF" dark height="100">
      
      <v-btn icon min-width="250px" link to="/">
      <v-img
        src="@/assets/imagens/logo1.png"
        max-width="300px"
        max-height="350px"
      >
      </v-img>
      </v-btn>
      
      <v-spacer></v-spacer>
      <v-btn icon color="#728b88" large on click link to="/perfil"><v-icon>mdi-account</v-icon></v-btn>
      <v-app-bar-nav-icon color="#728b88" large @click.stop="sidebar = !sidebar"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer color="#E9FEFF" right app v-model="sidebar" :mini-variant.sync="mini">
      <v-list dense color="#E9FEFF" dark height="100">
        <v-list-item>
          <v-list-item-action>
            <v-icon color="#728b88" @click.stop="sidebar = !sidebar">mdi-chevron-right</v-icon>
          </v-list-item-action>
          <v-list-item-title>
            <h3 class="conta" >Minha Conta</h3>
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list-item class="px=2"  @click="mini = !mini">
        <v-list-item-avatar>
          <v-icon  standard>mdi-account</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>Usuário</v-list-item-content>
        <v-btn icon small><v-icon>mdi-chevron-right</v-icon></v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item of items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="fundo">
      <router-view></router-view>
    </v-main>
    <v-footer app class="py-3"
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
        { title: "Home", icon: "mdi-home", to: "/" },
        { title: "Perfil", icon: "mdi-account-cog", to: "/perfil" },
        { title: "Quem somos", icon: "mdi-account-group", to: "/quemSomos" },
        { title: "Contato", icon: "mdi-contacts", to: "/contato" },
        { title: "Cuidados", icon: "mdi-hand-heart", to: "/cuidados" },
        { title: "FAQ", icon: "mdi-help-circle", to: "/faq" },
        { title: "Sair", icon: "mdi-exit-to-app", to: "/login" },
      ],
    };
  },
};
</script>

<style>
.fundo{
  background-color: #287679 ;
}
.conta{
  padding: auto 9px;
  color: #287679;
}

.v-list-item__content {
  color: #287679;
}
.v-list-item__icon {
  color: #287679;
}
</style>