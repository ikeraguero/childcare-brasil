<template>
  <span>
    <div
      class="grid gap-1 grid-cols-4 grid-rows-0 whitespace-nowrap no-scrollbar scroll-smooth snap-x"
      id="container"
    >
      <div v-for="card in cards.data" :key="card.index">
        <div class="px-0 m-2 snap-center">
          <div
            class="donation-content rounded-lg shadow-md w-[300px] lg:w-[410px] overflow-hidden"
          >
            <div class="p-6">
              <div class="flex justify-between">
                <h5 class="donation-detail text-xl font-medium mb-2 text-base">
                  Doação #{{ card.index }}
                </h5>
                <h5 class="text-xl font-medium mb-2"></h5>
              </div>
              <p class="donation-detail text-base mb-1 h-6">
                <b>ID: </b>{{ card.id }}
              </p>
              <p class="donation-detail capitalize text-base mb-1 h-6">
                <b>Doador: </b> {{ card.donator }}
              </p>
              <p v-if="card.cpf" class="donation-detail text-base mb-1 h-6">
                <b> CPF: </b>{{ card.cpf }}
              </p>
              <p v-if="card.cnpj" class="donation-detail text-base mb-1 h-6">
                <b>CNPJ: </b>{{ card.cnpj }}
              </p>
              <p class="text-base mb-1 h-6"><b>Tipo: </b>{{ card.type }}</p>
              <p
                v-if="card.value == '0.26'"
                class="donation-detail text-base mb-1 h-6"
              >
                <b>Valor: </b> R$1.00
              </p>
              <p
                v-if="card.value == '2.57'"
                class="donation-detail text-base mb-1 h-6"
              >
                <b>Valor: </b> R$10.00
              </p>
              <p
                v-if="card.value == '7.71'"
                class="donation-detail text-base mb-1 h-6"
              >
                <b>Valor: </b> R$30.00
              </p>
              <p
                v-if="card.value == '12.86'"
                class="donation-detail text-base mb-1 h-6"
              >
                <b>Valor: </b> R$50.00
              </p>
              <p
                v-if="card.value == '25.72'"
                class="donation-detail text-base mb-1 h-6"
              >
                <b>Valor: </b> R$100.00
              </p>
              <p
                v-if="card.value == '64.30'"
                class="donation-detail text-base mb-1 h-6"
              >
                <b>Valor: </b> R$250.00
              </p>
              <p
                v-if="card.value == '257.18'"
                class="donation-detail text-base mb-1 h-6"
              >
                <b>Valor: </b> R$1,000.00
              </p>
              <p
                v-if="card.materials"
                class="donation-detail text-base mb-1 h-6"
              >
                <b>Materiais: </b> {{ card.materials }}
              </p>
              <p class="donation-detail text-base mb-1 h-6">
                <b>Para: </b> {{ card.donatedto }}
              </p>
              <p class="donation-detail text-base mb-1 h-6">
                <b>Data: </b> {{ card.data }}
              </p>
              <div class="flex justify-center flex-row">
                <button
                  @click="excluir(card.id)"
                  class="delete-btn inline-block mt-2 px-6 py-2.5 ml-3 bg-white cursor-pointer font-semibold text-xs leading-tight uppercase rounded shadow-md"
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
      .get("https://childcare-brasil.vercel.app/api/donations")
      .then((response) => (this.cards = response));
  },
  methods: {
    excluir(card_id) {
      axios
        .post(`https://childcare-brasil.vercel.appapi/donationdel/${card_id}`)
        .then((response) => {
          this.$router.push("/adminn");
          return response.data;
        });
    },
    concluir(card_id) {
      axios
        .put(`https://childcare-brasil.vercel.app/api/donation/${card_id}`, {
          status: "Aprovada",
        })
        .then((response) => {
          this.$router.push("/adminn");
          return response.data;
        });
    },
  },
};
</script>

<style scoped>
div:empty {
  display: none;
}
.donation-content {
  background-color: #fff6ee;
}
.donation-detail {
  color: #743d31;
}
.delete-btn {
  color: #fff6ee;
  background-color: #743d31;
}
</style>
