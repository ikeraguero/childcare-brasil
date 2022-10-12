<template>
    <div v-if="$auth.isAuthenticated && $auth.user.email == 'ikerpires407@gmail.com'" >
        <AddButtonChild />   
        <br>
        <ChildrenCards />
    </div>
    <div v-else class="msg flex justify-center py-10 text-4xl text-[#15393C] font-semibold">Você não têm acesso à essa página</div>
</template>

<script>

import AddButtonChild from "../components/AddButtonChild.vue";
import ChildrenCards from "../components/ChildrenCards.vue";
export default {
    components: {

        AddButtonChild,
        ChildrenCards,
    },
};
</script>

<style>
.msg {
  color: #FFF6EE;
}
</style>