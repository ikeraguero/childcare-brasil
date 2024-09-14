<template>
  <div class="card-item px-2 m-4 snap-center p-6">
    <div
      class="teste rounded-lg flex flex-col"
      style="overflow-wrap: anywhere; height: 100%; width: 100%"
    >
      <a href="/">
        <router-link v-bind:to="'/criancas/perfil/' + card.id">
          <img class="children-photo rounded-t-lg" :src="card.photo" />
        </router-link>
      </a>
      <div class="p-5 flex-1 flex flex-col justify-between">
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
          <slot name="buttons"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-item {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.card-item div {
  box-shadow: 0.1rem 0.5rem 1rem 0.2rem rgb(0, 0, 0, 0.07);
  background-color: #fff6ee;
  width: 100%;
  height: 100%;
}

.children-photo {
  width: 100%;
  height: 22.4rem;
  object-fit: cover;
}

.p-5 {
  flex-grow: 1;
}

.buttons {
  padding-bottom: 2.4rem;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-name {
  color: #343a40;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.card-age,
.card-location {
  display: flex;
  font-size: 1.8rem;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 1rem;
}

.card-location,
.card-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-icon {
  stroke: #743d31;
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
}
</style>
