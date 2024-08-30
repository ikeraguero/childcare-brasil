<template>
  <div
    v-if="$auth.isAuthenticated && $auth.user.email == 'ikerpires407@gmail.com'"
  >
    <AddFormSchool />
  </div>
  <div v-else class="msg flex justify-center py-10 text-4xl font-semibold">
    Você não têm acesso à essa página
  </div>
</template>

<script>
import AddFormSchool from "../components/AddFormSchool.vue";
export default {
  components: {
    AddFormSchool,
  },
};
</script>

<style>
.msg {
  color: #333;
}
</style>
