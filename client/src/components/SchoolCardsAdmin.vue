<template>
  <span>
    <div
      class="grid gap-0 grid-cols-4 grid-rows-0 overflow whitespace-nowrap no-scrollbar relative scroll-smooth snap-x"
      id="container"
    >
      <div v-for="card in cards.data" :key="card.index">
        <div class="card-item px-2 m-4 snap-center max-w-max p-6">
          <div
            class="teste rounded-lg w-96lg:w-410 overflow-hidden"
            style="overflow-wrap: anywhere"
          >
            <a href="/">
              <router-link v-bind:to="'/criancas/perfil/' + card.id"
                ><img class="school-photo rounded-t-lg h-80" :src="card.photo"
              /></router-link>
            </a>
            <div class="p-5">
              <div class="card-content" id="card-content">
                <h3 class="card-name text-left">{{ card.name }}</h3>
                <p class="card-location" id="card-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="card-icon"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  {{ card.city }}, {{ card.state }}
                </p>
              </div>
              <div class="buttons flex justify-center mb-2 mt-14 h-fit">
                <a
                  v-bind:href="'/adminn/escolas/' + card.id"
                  type="button"
                  class="btn inline-block px-6 py-2.5 ml-3 bg-white cursor-pointer font-semibold text-xs leading-tight uppercase shadow-md"
                  >Editar</a
                >
                <button
                  @click="excluir(card.id)"
                  class="btn inline-block px-6 py-2.5 ml-3 bg-white cursor-pointer font-semibold text-xs leading-tight uppercase shadow-md"
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
.btn {
  color: #fff6ee;
  font-size: 12px;
  background-color: #743d31;
  border-radius: 1000px;
}

.btn:hover {
  background-color: #855348;
}
.rounded-t-lg {
  width: 388px;
}
.teste {
  box-shadow: 1px 20px 30px 2px rgb(0, 0, 0, 0.07);
}
#container {
  overflow: auto;
}

.card-content li {
  color: #343a40;
  display: flex;
  align-content: center;
}

.card-content li {
  list-style: none;
}
.card-name {
  color: #343a40;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
}

.card-age,
.card-location {
  display: flex;
  font-size: 18px;
  align-items: flex-start;
  margin-bottom: 5px;
  gap: 10px;
}

.card-icon {
  stroke: #743d31;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.buttons {
  padding-bottom: 24px;
}
@media (max-width: 75em) {
  .school-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .school-photo {
    height: 29.6rem;
  }
}
@media (max-width: 67em) {
  .school-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .school-photo {
    width: 86rem;
  }
}

@media (max-width: 45em) {
  .teste {
    width: 36rem;
  }
}
@media (max-width: 39em) {
  .school-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
