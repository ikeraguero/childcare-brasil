<template>
  <div class="flex items-center py-5 px-7">
    <router-link
      to="/adminn/criancas/adicionar"
      class="font-semibold text-white rounded-lg py-1 px-3"
    >
      <span
        class="text-lg font-semibold"
        style="color: #743d31; font-size: 1.4rem"
        >+ Adicionar Criança</span
      >
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AddButtonChild",
};
</script>
