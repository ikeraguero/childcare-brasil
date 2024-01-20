<template>
  <span>
    <div
      class="children-grid grid gap-0 grid-cols-4 grid-rows-0 overflow whitespace-nowrap"
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
                ><img
                  class="children-photo rounded-t-lg h-80"
                  :src="card.photo"
              /></router-link>
            </a>
            <div class="p-5">
              <div class="card-content" id="card-content">
                <h3 class="card-name text-left">{{ card.name }}</h3>
                <p class="card-age">
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
                      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                    />
                  </svg>
                  {{ card.age }} anos
                </p>
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
              <div class="buttons flex justify-center mt-10 h-fit">
                <router-link
                  v-bind:to="'/criancas/doar/' + card.id"
                  type="button"
                  class="btn inline-block px-6 py-2.5 ml-3 bg-white cursor-pointer font-semibold text-xs leading-tight uppercase shadow-md"
                  >Doar</router-link
                >
                <router-link
                  to=""
                  type="button"
                  class="btn inline-block px-6 py-2.5 ml-3 bg-white cursor-pointer font-semibold text-xs leading-tight uppercase shadow-md"
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
    /* document.addEventListener("DOMContentLoaded", function () {
      if (
        document.getElementById("card-content").offsetWidth <=
        document.getElementById("container").offsetWidth
      ) {
        document.getElementById("card-content").style.padding = "16px";
      }
    }), */
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
  .children-grid {
    grid-template-columns: repeat(3, 1fr);
    .children-photo {
      height: 29.6rem;
    }
  }
  @media (max-width: 67em) {
    .children-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .children-photo {
      width: 86rem;
    }
  }

  @media (max-width: 45em) {
    .teste {
      width: 36rem;
    }
  }
  @media (max-width: 39em) {
    .children-grid {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
