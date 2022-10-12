<template>
    <div v-if="$auth.isAuthenticated && $auth.user.email == 'ikerpires407@gmail.com'">
        <AddButtonSchool />   
        <br>
        <SchoolCards />
    </div>
    <div v-else class="msg flex justify-center py-10 text-4xl text-[#15393C] font-semibold">Você não têm acesso à essa página</div>
</template>

<script>

import AddButtonSchool from "../components/AddButtonSchool.vue";
import SchoolCards from "../components/SchoolCards.vue";
export default {
    components: {

        AddButtonSchool,
        SchoolCards,
    },
};
</script>

<style>
.msg {
  color: #FFF6EE;
}
</style>