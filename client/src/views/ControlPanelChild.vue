<template>
  <div>
    <AddButton
      route="/adminn/criancas/adicionar"
      buttonText="Adicionar Criança"
    />
    <br />
    <ChildrenCardsAdmin />
  </div>
</template>

<script>
import AddButton from "../components/AddButton.vue";
import ChildrenCardsAdmin from "../components/ChildrenCardsAdmin.vue";
export default {
  components: {
    AddButton,
    ChildrenCardsAdmin,
  },
};
</script>

<style>
.msg {
  color: #333;
}
</style>
