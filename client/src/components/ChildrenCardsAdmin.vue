<template>
  <span>
    <div
      class="
        grid
        gap-0
        grid-cols-4 grid-rows-0
        overflow
        whitespace-nowrap
        no-scrollbar
        relative
        scroll-smooth
        snap-x
      "
      id="container"
    >
      <div v-for="card in cards.data" :key="card.index">
        <div class="flex px-3 m-2 snap-center max-w-max">
          <div class="rounded-lg shadow-md w-[300px] lg:w-[410px]">
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

              <p class="text-white text-base mb-4 h-20 w-fit">
                {{ card.city }}, {{ card.state }}
              </p>
              <div class="flex justify-center flex-row">
                <a
                  v-bind:href="'/adminn/criancas/' + card.id"
                  type="button"
                  class="
                    edit
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
                  >Editar</a
                >
                <button
                  @click="excluir(card.id)"
                  class="
                    del
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
                  type="button"
                  value="Excluir"
                >
                  Excluir
                </button>
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
    excluir(card_id) {
      axios
        .post(`https://childcare-brasil.vercel.app/api/childdel/${card_id}`)
        .then((response) => {
          this.$router.push("/adminn");
          alert("Criança removida com sucesso");
          return response.data;
        });
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
.edit {
  color: #fff6ee;
  background-color: #621200;
}

.del {
  color: #fff6ee;
  background-color: #bd0000;
}
.rounded-t-lg {
  width: 388px;
}
</style>
