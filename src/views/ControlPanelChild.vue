<template>
    <div>
        <AddButtonChild />   
        <br>
        <ChildrenCards />
    </div>
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

<style></style>