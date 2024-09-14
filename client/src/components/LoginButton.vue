<template>
  <button class="btn btn-block" v-if="!$auth.isAuthenticated" @click="login">
    Entrar
  </button>
</template>

<script>
export default {
  name: "LoginButton",
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
  },
};
</script>
<style>
.btn {
  color: #621200;
  text-decoration: none;
  letter-spacing: 0.3rem;
  font-weight: bold;
  font-size: 1.4rem;
}
</style>
