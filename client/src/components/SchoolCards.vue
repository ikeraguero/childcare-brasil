<template>
  <div class="card-item px-2 m-4 snap-center p-6">
    <div class="card-wrapper rounded-lg flex flex-col">
      <router-link :to="`${baseRoute}/${card.id}`">
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
                :d="iconPath"
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
  box-shadow: 1px 20px 30px 2px rgba(0, 0, 0, 0.07);
  background-color: #fff6ee;
  width: 100%;
  height: 100%;
}

.card-photo {
  width: 100%;
  height: 22.4rem;
  object-fit: cover;
}

.p-5 {
  flex-grow: 1;
}

.buttons {
  padding-bottom: 24px;
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-name {
  color: #343a40;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
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
