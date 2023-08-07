<template>
  <span>
    <div
      class="grid gap-1 grid-cols-4 grid-rows-0 whitespace-nowrap"
      id="container"
    >
      <div v-for="card in cards.data" :key="card.index">
        <div class="px-2 m-2" style="overflow-wrap: anywhere">
          <div
            class="teste rounded-lg shadow-md w-96lg:w-410 overflow-hidden"
            style="overflow-wrap: anywhere"
          >
            <a href="/">
              <router-link v-bind:to="'/escolas/perfil/' + card.id"
                ><img class="rounded-t-lg h-80" :src="card.photo"
              /></router-link>
            </a>
            <div class="p-6">
              <div class="flex justify-between">
                <h5 class="text-white text-xl font-medium mb-2">
                  {{ card.name }}
                </h5>
              </div>

              <p class="text-white text-base absolute w-fit">
                <i class="fa fa-map-pin" aria-hidden="true"></i>
                {{ card.city }}, {{ card.state }}
              </p>
              <div class="buttons flex justify-center mt-20 h-fit">
                <router-link
                  v-bind:to="'/escolas/doar/' + card.id"
                  type="button"
                  class="
                    inline-block
                    px-6
                    py-2.5
                    ml-3
                    bg-white
                    cursor-pointer
                    font-semibold
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                  "
                  >Doar</router-link
                >
                <router-link
                  v-bind:to="'/escolas/perfil/' + card.id"
                  type="button"
                  class="
                    inline-block
                    px-6
                    py-2.5
                    ml-3
                    bg-white
                    cursor-pointer
                    font-semibold
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                  "
                  >Informações</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      cards: [],
      showControls: true,
    };
  },
  mounted() {
    axios
      .get("https://childcare-brasil.vercel.app/api/schools")
      .then((response) => (this.cards = response));
  },
};
</script>

<style scoped>
.card-control {
  background-color: transparent;
  border: none;
  position: absolute;
  width: 70px;
  top: calc(50% - 25px);
  color: #15393c81;
  transition: 0.5s;
}
.card-control:hover {
  color: #15393c;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
.rounded-lg {
  background-color: #fff6ee;
}
.text-white {
  color: #621200;
}
.inline-block {
  color: #fff6ee;
  background-color: #621200;
}
.teste {
  height: 550px;
}
#container {
  overflow: auto;
}
</style>
