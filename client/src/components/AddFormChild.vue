<template>
  <div class="rounded">
    <div class="container">
      <p>{{ image }}</p>

      <form
        class="add-form rounded px-12 pt-8 pb-8 mb-8"
        action="https://childcare-brasil.vercel.app/api/childadd"
        method="post"
      >
        <div class="flex mb-4 w-full">
          <img
            src="https://i.imgur.com/Wp6hAjO.jpg"
            class="rounded-lg h-50 w-2/6"
            alt="Avatar"
            id="img-preview"
          />
          <div class="px-4">
            <label class="block text-white text-sm font-bold" for="image">
              Link da Imagem
            </label>
            <input
              class="shadow appearance-none border rounded-2xl w-full py-2 px-3 mb-2 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              placeholder="Link da Imagem"
              name="childphoto"
            />
            <label class="block text-white text-sm font-bold">
              Nome da Criança
            </label>
            <input
              class="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="name"
              type="text"
              placeholder="Nome da Criança"
              name="childname"
            />
            <label class="block text-white text-sm font-bold"> Sexo </label>
            <select
              class="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              name="childgender"
              id="gender"
            >
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>
        </div>
        <div class="flex justify-start">
          <div class="mb-4">
            <label class="block text-white text-sm font-bold"> Idade </label>
            <input
              class="shadow appearance-none w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white border rounded-2xl"
              id="age"
              type="text"
              placeholder="Idade"
              maxlength="2"
              name="childage"
            />
          </div>
          <div class="mb-4 ml-3">
            <label class="block text-white text-sm font-bold"> Escola </label>
            <select
              class="shadow appearance-none border border rounded-2xl w-56 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="school"
              type="text"
              placeholder="Escola"
              name="childschool"
            >
              <option v-for="card in cards.data" :key="card.index">
                {{ card.name }}
              </option>
            </select>
          </div>
          <div class="mb-4 ml-4">
            <label class="block text-white text-sm font-bold"> CPF </label>
            <input
              class="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="cpf"
              type="text"
              placeholder="CPF"
              maxlength="14"
              name="childcpf"
            />
          </div>
        </div>
        <div class="flex justify-start">
          <div class="mb-4">
            <label class="block text-white text-sm font-bold"> Endereço </label>
            <input
              class="shadow appearance-none border rounded-2xl w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="address"
              type="text"
              placeholder="Endereço"
              name="childaddress"
            />
          </div>
          <div class="mb-4 ml-3">
            <label class="block text-white text-sm font-bold"> Estado </label>
            <select
              class="shadow appearance-none border rounded-2xl w-56 py-2 px-2 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white mr-0"
              id="state"
              placeholder="Estado"
              name="childstate"
            >
              <option v-for="state in states.data" :key="state.index">
                {{ state.name }}
              </option>
            </select>
          </div>
          <div class="mb-4 ml-4">
            <label class="block text-white text-sm font-bold"> Cidade </label>
            <input
              class="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="city"
              type="text"
              placeholder="Cidade"
              name="childcity"
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold">
            Materiais Necessitados (opcional)
          </label>
          <input
            class="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="description"
            type="text"
            placeholder="Materias Necessitados"
            name="childmaterialsneeded"
          />
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold" for="username">
            Nome do Responsável (opcional)
          </label>
          <input
            class="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="responsable"
            type="text"
            placeholder="Nome do Responsável"
            name="childresponsables"
          />
        </div>
      </form>
      <div class="flex justify-center gap-5">
        <router-link
          to="/adminn/criancas/"
          class="donation-btn text-white"
          type="button"
          value="Cancelar"
          >Cancelar</router-link
        >
        <button
          class="donation-btn text-white"
          style="display: block"
          type="submit"
          value="Salvar"
        >
          Salvar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddForm",

  data() {
    return {
      cards: [],
      states: [],
      showControls: true,
    };
  },
  mounted() {
    axios
      .get("https://childcare-brasil.vercel.app/api/schools")
      .then((response) => (this.cards = response));
    axios
      .get("https://childcare-brasil.vercel.app/api/states")
      .then((response) => (this.states = response));
  },
};
</script>

<style scoped>
.form-add input {
  color: #000000;
}

form {
  background-color: #743d31;
  width: 65%;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.add-form label {
  color: #fff6ee;
  font-size: 1.7rem;
  margin-top: 2rem;
}
.v-application a {
  color: #fff6ee;
}

.btn {
  background-color: #743d31;
  color: #fff6ee;
  font-size: 1.8rem;
  padding: 0.8rem 3.2rem;
  border-radius: 0.9rem;
  font-weight: 600;
}

#gender {
  color: #000000;
}

.top-form {
  justify-content: center;
}

.cancel-btn {
  padding: 3.8rem !important;
}
</style>
