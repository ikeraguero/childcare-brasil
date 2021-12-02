<template>
  <v-row>
    <v-col
      v-for="animal in value"
      :key="animal.id"
      class="d-flex child-flex"
      cols="6"
      sm="4"
    >
      <v-card flat tile class="d-flex" @click="$emit('adotar', animal)">
        <v-img :src="animal.src" aspect-ratio="1" class="grey lighten-2">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>