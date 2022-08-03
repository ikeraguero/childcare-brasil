<template>
  <button 
    class="btn btn-block"
    v-if="!$auth.isAuthenticated"
    @click="login"
  >
      Login
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
  color: #621200;
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 14px;
};
</style>