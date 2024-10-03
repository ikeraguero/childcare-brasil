<template>
  <div class="section-header text-center">
    <span class="section-title pt-8">Você está doando para</span>
    <h1 class="section-subtitle pb-4">Crianças</h1>
    <div class="children-grid grid grid-cols-4 gap-4 px-44 py-4">
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
.btn {
  color: #fff6ee;
  font-size: 1.2rem;
  background-color: #743d31;
  border-radius: 99999rem;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn:hover {
  background-color: #855348;
}
.section-title {
  color: #743d31;
  font-size: 1.4rem;
  letter-spacing: 0.3px;
  font-weight: 600;
}

.section-subtitle {
  color: #333;
  font-size: 3.6rem;
  letter-spacing: 0.4px;
  font-weight: 700;
}

@media (max-width: 77em) {
  .children-grid {
    @apply py-36;
  }
}

@media (max-width: 75em) {
  .children-grid {
    @apply grid-cols-3;
  }
}

@media (max-width: 54em) {
  .children-grid {
    @apply grid-cols-2;
  }
}

@media (max-width: 40em) {
  .children-grid {
    @apply grid-cols-1;
  }
}
</style>
