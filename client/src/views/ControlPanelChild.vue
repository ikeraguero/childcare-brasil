<template>
  <div
    v-if="$auth.isAuthenticated && $auth.user.email == 'ikerpires407@gmail.com'"
  >
    <div>
      <AddButton
        route="/adminn/criancas/adicionar"
        buttonText="Adicionar Criança"
      />
      <br />
      <div
        class="children-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
      >
        <div v-for="item in cardList" :key="item.id">
          <ChildrenCards :card="item">
            <template v-slot:buttons>
              <router-link
                :to="'/adminn/criancas/' + item.id"
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
          </ChildrenCards>
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
import ChildrenCards from "../components/ChildrenCards.vue";

export default {
  components: { ChildrenCards, AddButton },
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
          "https://childcare-brasil.vercel.app/api/children"
        );
        const data = await response.json();
        this.cardList = data;
      } catch (error) {
        console.error("Failed to fetch card data:", error);
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
.children-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  justify-content: center; /* Centers the grid items horizontally within the grid container */
  padding: 10rem 10.4rem;
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
