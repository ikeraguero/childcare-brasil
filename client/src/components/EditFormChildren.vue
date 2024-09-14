<template>
  <div class="flex justify-center max-w-3xl mx-auto py-10">
    <div class="w-full h-full">
      <form
        class="rounded px-12 pt-8 pb-8 mt-8 mb-8"
        v-bind:action="
          'https://childcare-brasil.vercel.app/api/childupdate/' + child.id
        "
        method="post"
      >
        <div class="flex mb-4">
          <img
            :src="child.photo"
            class="rounded-lg h-48 w-52"
            alt="Avatar"
            id="img"
          />
          <div class="px-4">
            <label class="block text-white text-sm font-bold mb-2" for="image">
              Link da Imagem
            </label>
            <input
              class="shadow appearance-none border rounded w-96 py-2 px-3 mb-2 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              placeholder="Link da Imagem"
              name="childphoto"
              v-model="child.photo"
            />
            <label
              class="block text-white text-sm font-bold mb-2"
              for="username"
            >
              Nome da Criança
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="name"
              type="text"
              placeholder="Nome da Criança"
              name="childname"
              v-model="child.name"
            />
            <label
              class="block text-white text-sm font-bold mb-1 mt-2"
              for="username"
            >
              Sexo
            </label>
            <select
              class="shadow form-select appearance-none block w-full px-3 py-2 text-base font-normal text-black bg-white rounded"
              name="childgender"
              id="gender"
              v-model="child.gender"
            >
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>
        </div>
        <div class="flex justify-start">
          <div class="mb-4">
            <label class="block text-white text-sm font-bold mb-2">
              Idade
            </label>
            <input
              class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="age"
              type="text"
              placeholder="Idade"
              name="childage"
              v-model="child.age"
            />
          </div>
          <div class="mb-4 ml-3">
            <label class="block text-white text-sm font-bold mb-2">
              Escola
            </label>
            <select
              class="shadow appearance-none border rounded w-56 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
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
          <div class="mb-4 ml-5">
            <label class="block text-white text-sm font-bold mb-2"> CPF </label>
            <input
              class="shadow appearance-none border rounded w-48 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="cpf"
              type="text"
              placeholder="CPF"
              name="childcpf"
              v-model="child.cpf"
            />
          </div>
        </div>
        <div class="flex justify-start">
          <div class="mb-4">
            <label
              class="block text-white text-sm font-bold mb-2"
              for="username"
            >
              Endereço
            </label>
            <input
              class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="address"
              type="text"
              placeholder="Endereço"
              name="childaddress"
              v-model="child.address"
            />
          </div>
          <div class="mb-4 ml-4">
            <label class="block text-white text-sm font-bold mb-2">
              Estado
            </label>
            <select
              class="shadow appearance-none border rounded w-56 py-2 px-2 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white mr-0"
              id="state"
              placeholder="Estado"
              name="childstate"
              v-model="child.state"
            >
              <option v-for="state in states.data" :key="state.index">
                {{ state.name }}
              </option>
            </select>
          </div>
          <div class="mb-4 ml-4">
            <label class="block text-white text-sm font-bold mb-2">
              Cidade
            </label>
            <input
              class="shadow appearance-none border rounded w-48 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="city"
              type="text"
              placeholder="Cidade"
              name="childcity"
              v-model="child.city"
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2">
            Materiais Necessitados (opcional)
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="description"
            type="text"
            placeholder="Materias Necessitados"
            name="childmaterialsneeded"
            v-model="child.materialsneeded"
          />
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="username">
            Nome do Responsável (opcional)
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="responsable"
            type="text"
            placeholder="Nome do Responsável"
            name="childresponsables"
            v-model="child.responsables"
          />
        </div>
        <div class="flex justify-center">
          <div>
            <router-link
              to="/adminn/criancas/"
              class="btn bg-white font-bold py-2.5 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              value="Cancelar"
              >Cancelar</router-link
            >
            <input
              class="btn bg-white font-bold py-2 px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline"
              type="submit"
              value="Salvar"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      child: [],
      cards: [],
      states: [],
    };
  },
  mounted() {
    axios
      .get("https://childcare-brasil.vercel.app/api/schools")
      .then((response) => (this.cards = response));
    axios
      .get("https://childcare-brasil.vercel.app/api/states")
      .then((response) => (this.states = response));
    axios
      .get(
        "https://childcare-brasil.vercel.app/api/child/" + this.$route.params.id
      )
      .then((response) => {
        this.child = response.data;
      });
  },
};
</script>

<style scoped>
form {
  background-color: #fff6ee;
}

form label {
  color: #621200;
}

.btn {
  background-color: #621200;
  color: #fff6ee;
}

#gender {
  color: #000000;
}
</style>
