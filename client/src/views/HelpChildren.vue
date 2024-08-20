<template>
  <div class="section-header text-center">
    <span class="section-title pt-8">Você está doando para</span>
    <h1 class="section-subtitle pb-4">Crianças</h1>
    <div
      class="children-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
    >
      <div v-for="item in cardList" :key="item.id">
        <ChildrenCards :card="item" class="card-item">
          <template v-slot:buttons>
            <router-link
              :to="'/criancas/doar/' + item.id"
              class="btn inline-block px-6 py-2.5 ml-3 bg-white cursor-pointer font-semibold text-xs leading-tight uppercase shadow-md"
              >Doar</router-link
            >
            <router-link
              to=""
              class="btn inline-block px-6 py-2.5 ml-3 bg-white cursor-pointer font-semibold text-xs leading-tight uppercase shadow-md"
              >Informações</router-link
            >
          </template>
        </ChildrenCards>
      </div>
    </div>
  </div>
</template>

<script>
import ChildrenCards from "@/components/ChildrenCards.vue";

export default {
  components: { ChildrenCards },
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
  },
};
</script>

<style scoped>
.children-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  justify-content: center; /* Centers the grid items horizontally within the grid container */
  padding: 0 9.4rem;
}

.btn {
  color: #fff6ee;
  font-size: 12px;
  background-color: #743d31;
  border-radius: 1000px;
  display: flex;
  align-items: center;
}

.btn:hover {
  background-color: #855348;
}
</style>
