<template>
  <div
    v-if="$auth.isAuthenticated && $auth.user.email == 'ikerpires407@gmail.com'"
  >
    <AddButtonChild />
    <br />
    <ChildrenCardsAdmin />
  </div>
  <div
    v-else
    class="msg flex justify-center py-10 text-4xl text-[#15393C] font-semibold"
  >
    Você não têm acesso à essa página
  </div>
</template>

<script>
import AddButtonChild from "../components/AddButtonChild.vue";
import ChildrenCardsAdmin from "../components/ChildrenCardsAdmin.vue";
export default {
  components: {
    AddButtonChild,
    ChildrenCardsAdmin,
  },
};
</script>

<style>
.msg {
  color: #333;
}
</style>
