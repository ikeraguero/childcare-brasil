<template>
  <button 
    class="btn btn-block"
    v-if="!$auth.isAuthenticated"
    @click="login"
  >
      LOGIN
  </button>
</template>

<script>
  export default {
    name: 'LoginButton',
    methods: {
      login() {
        this.$auth.loginWithRedirect();
      },
    },
  };
</script>
<style>
.btn{
  color:#621200;
};
</style>