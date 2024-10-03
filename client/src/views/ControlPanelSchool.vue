<template>
  <div
    v-if="$auth.isAuthenticated && $auth.user.email == 'ikerpires407@gmail.com'"
  >
    <div>
      <AddButton
        route="/adminn/escolas/adicionar"
        buttonText="Adicionar Escola"
      />
      <br />
      <div
        class="schools-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
      >
        <div v-for="item in cardList" :key="item.id">
          <SchoolCards :card="item">
            <template v-slot:buttons>
              <router-link
                :to="'/adminn/escolas/' + item.id"
                class="btn inline-block px-6 py-2.5 ml-3 bg-white cursor-pointer font-semibold text-xs leading-tight uppercase shadow-md"
                >Editar</router-link
              >
              <button
                @click="excluir(item.id)"
                class="btn inline-block px-6 py-2.5 ml-3 bg-white cursor-pointer font-semibold text-xs leading-tight uppercase shadow-md"
                value="Excluir"
              >
                Deletar
              </button>
            </template>
          </SchoolCards>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="msg flex justify-center py-10 text-4xl text-[#15393C] font-semibold"
  >
    Você não têm acesso à essa página
  </div>
</template>

<script>
import axios from "axios";
import AddButton from "../components/AddButton.vue";
import SchoolCards from "../components/SchoolCards.vue";

export default {
  components: { SchoolCards, AddButton },
  data() {
    return {
      cardList: [],
    };
  },
  mounted() {
    this.fetchCardData();
  },
  methods: {
    async fetchCardData() {
      try {
        const response = await fetch(
          "https://childcare-brasil.vercel.app/api/schools"
        );
        const data = await response.json();
        this.cardList = data;
      } catch (error) {
        console.error("Failed to fetch card data:", error);
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
.schools-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  justify-content: center; /* Centers the grid items horizontally within the grid container */
  padding: 0 9.4rem;
}

.btn {
  color: #fff6ee;
  font-size: 1.2rem;
  background-color: #743d31;
  border-radius: 999999rem;
  display: flex;
  align-items: center;
}

.btn:hover {
  background-color: #855348;
}
</style>
