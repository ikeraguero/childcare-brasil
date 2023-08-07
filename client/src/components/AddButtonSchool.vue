<template>
  <div class="flex items-center py-5 px-7">
    <router-link
      to="/adminn/escolas/adicionar"
      class="font-semibold text-white rounded-lg py-1 px-3"
    >
      <span><span class="text-lg">+ Adicionar Escola </span></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AddButtonSchool",
};
</script>
<style>
.text-lg {
  color: #fff6ee;
}
</style>
