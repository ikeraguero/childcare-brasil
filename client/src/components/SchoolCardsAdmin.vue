<template>
  <span>
    <div
      class="grid gap-1 grid-cols-4 grid-rows-0 whitespace-nowrap"
      id="container"
    >
      <div v-for="card in cards.data" :key="card.index">
        <div class="px-2 m-2 max-w-max" style="overflow-wrap: anywhere">
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
                {{ card.city }}, {{ card.state }}
              </p>
            </div>
            <div class="buttons flex justify-center mb-2 mt-14 h-fit">
              <a
                v-bind:href="'/adminn/escolas/' + card.id"
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
                Deletar
              </button>
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
        .post(`https://childcare-brasil.vercel.app/api/schooldel/${card_id}`)
        .then((response) => {
          this.$router.push("/adminn");
          alert("Escola removida com sucesso");
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

.teste {
  height: 550px;
}
#container {
  overflow: auto;
}
</style>
