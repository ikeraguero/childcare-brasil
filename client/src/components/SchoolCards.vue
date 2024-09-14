<template>
  <div class="card-item px-2 m-4 snap-center p-6">
    <div class="card-wrapper rounded-lg flex flex-col">
      <router-link v-bind:to="`escolas/doar/${card.id}`">
        <img class="card-photo rounded-t-lg" :src="card.photo" />
      </router-link>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div class="card-content">
          <h3 class="card-name text-left">{{ card.name }}</h3>
          <p class="card-details">
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
    baseRoute: {
      type: String,
      required: true,
    },
    iconPath: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-item {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.card-wrapper {
  box-shadow: 0.1rem 2rem 3rem 0.2rem #00000012;
  background-color: #fff6ee;
  width: 100%;
  height: 100%;
}
.card-details,
.card-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-photo {
  width: 100%;
  height: 22.4rem;
  object-fit: cover;
}

.card-wrapper div {
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

.card-details {
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
</style>
