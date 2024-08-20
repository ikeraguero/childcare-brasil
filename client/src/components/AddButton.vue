<template>
  <div class="flex items-center py-5 px-7">
    <router-link
      :to="route"
      class="font-semibold text-white rounded-lg py-1 px-3"
    >
      <span class="button text-lg font-semibold"> + {{ buttonText }} </span>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddButton",
  props: {
    route: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
.button {
  color: #743d31;
  font-size: 1.4rem;
}
</style>
