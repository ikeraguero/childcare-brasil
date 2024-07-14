<template>
  <div
    v-if="$auth.isAuthenticated && $auth.user.email == 'ikerpires407@gmail.com'"
    class="block galleryBlock"
  >
    <v-container>
      <h1 class="flex justify-center py-10 text-4xl font-semibold">Doações</h1>
      <DonationCards class="flex drop-shadow-md mb-9" />
    </v-container>
  </div>
  <div v-else class="msg flex justify-center py-10 text-4xl font-semibold">
    Você não têm acesso à essa página
  </div>
</template>

<script>
export default {
  name: "Donation",
  components: {},
};
</script>

<style>
.msg {
  color: #333;
}
</style>
