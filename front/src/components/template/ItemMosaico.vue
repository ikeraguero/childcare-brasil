<template>
  <v-col
      class="d-flex child-flex imgMosaico"
      cols="4"
    >
      <v-img
        :src="imagem"
        :lazy-src="imagem"
        aspect-ratio="1"
        class="grey lighten-2 "
        height="200px"
        width="400px"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
</template>

<script>
export default {
    props: ['imagem']
}
</script>

<style>

</style>