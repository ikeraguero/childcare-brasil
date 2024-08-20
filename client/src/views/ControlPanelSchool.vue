<template>
  <!--

    <div
    v-if="$auth.isAuthenticated && $auth.user.email == 'ikerpires407@gmail.com'"
    >
  -->
  <div>
    <AddButton
      route="/adminn/escolas/adicionar"
      buttonText="Adicionar Escola"
    />
    <br />
    <SchoolCardsAdmin />
  </div>
  <!--

  </div>
  <div
  v-else
  class="msg flex justify-center py-10 text-4xl text-[#15393C] font-semibold"
  >
  Você não têm acesso à essa página
</div>
--></template>

<script>
import AddButton from "../components/AddButton.vue";
import SchoolCardsAdmin from "../components/SchoolCardsAdmin.vue";
export default {
  components: {
    AddButton,
    SchoolCardsAdmin,
  },
};
</script>

<style>
.msg {
  color: #333;
}
</style>
