<template>
  <span>
    <div
      class="grid gap-0 grid-cols-4 grid-rows-0 overflow whitespace-nowrap"
      id="container"
    >
      <div v-for="card in cards.data" :key="card.index">
        <div class="px-2 m-4 snap-center max-w-max">
          <div
            class="teste rounded-lg shadow-md w-96lg:w-410 overflow-hidden"
            style="overflow-wrap: anywhere"
          >
            <a href="/">
              <router-link v-bind:to="'/criancas/perfil/' + card.id"
                ><img class="rounded-t-lg h-80" :src="card.photo"
              /></router-link>
            </a>
            <div class="p-6">
              <div class="flex justify-between">
                <h5 class="text-white text-xl font-medium mb-2">
                  {{ card.name }}
                </h5>
                <h5 class="text-white text-xl font-medium mb-2">
                  {{ card.age }} {{ age(card.age) }}
                </h5>
              </div>

              <p class="text-white text-base absolute w-fit">
                {{ card.city }}, {{ card.state }}
              </p>
              <div class="buttons flex justify-center mt-20 h-fit">
                <router-link
                  v-bind:to="'/criancas/doar/' + card.id"
                  type="button"
                  class="inline-block px-6 py-2.5 ml-3 bg-white text-[#15393C] cursor-pointer font-semibold text-xs leading-tight uppercase rounded shadow-md"
                  >Doar</router-link
                >
                <router-link
                  v-bind:to="'/criancas/perfil/' + card.id"
                  type="button"
                  class="inline-block px-6 py-2.5 ml-3 bg-white text-[#15393C] cursor-pointer font-semibold text-xs leading-tight uppercase rounded shadow-md"
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
      .get("https://childcare-brasil.vercel.app/api/children")
      .then((response) => (this.cards = response));
  },
  methods: {
    age(age) {
      if (age > 1) {
        return "anos";
      } else {
        return "ano";
      }
    },
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
.rounded-t-lg {
  width: 388px;
}
.teste {
  height: 550px;
}
#container {
  overflow: auto;
}
</style>
