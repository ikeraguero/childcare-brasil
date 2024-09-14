<template>
  <div class="flex justify-center max-w-3xl mx-auto py-10">
    <div class="w-full h-full">
      <form
        class="rounded px-12 pt-8 pb-8 mt-8 mb-8"
        v-bind:action="
          'https://childcare-brasil.vercel.app/api/schoolupdate/' + school.id
        "
        method="post"
      >
        <div class="flex mb-4">
          <img
            :src="school.photo"
            class="rounded-lg h-48 w-52"
            alt="Avatar"
            id="img"
          />
          <div class="px-4 mt-3">
            <label class="block text-white text-sm font-bold mb-2" for="image">
              Link da Imagem
            </label>
            <input
              class="shadow appearance-none border rounded w-96 py-2 px-3 mb-2 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              placeholder="Link da Imagem"
              name="schoolphoto"
              v-model="school.photo"
            />
            <label
              class="block text-white text-sm font-bold mb-2 mt-5"
              for="username"
            >
              Nome da Escola
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="name"
              type="text"
              placeholder="Nome da Escola"
              name="schoolname"
              v-model="school.name"
            />
          </div>
        </div>
        <div class="flex justify-start">
          <div class="mb-4">
            <label class="block text-white text-sm font-bold mb-2">
              Código INEP
            </label>
            <input
              class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="age"
              type="text"
              placeholder="Código INEP"
              name="schoolage"
              v-model="school.inepcode"
            />
          </div>
          <div class="mb-4 ml-3">
            <label class="block text-white text-sm font-bold mb-2">
              Telefone
            </label>
            <input
              class="shadow appearance-none border rounded w-56 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="school"
              type="text"
              placeholder="Telefone"
              name="schoolschool"
              v-model="school.cellphone"
            />
          </div>
          <div class="mb-4 ml-5">
            <label class="block text-white text-sm font-bold mb-2">
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="cpf"
              type="text"
              placeholder="Email"
              name="schoolcpf"
              v-model="school.email"
            />
          </div>
        </div>
        <div class="flex justify-start">
          <div class="mb-4">
            <label class="block text-white text-sm font-bold mb-2">
              Endereço
            </label>
            <input
              class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="address"
              type="text"
              placeholder="Endereço"
              name="schooladdress"
              v-model="school.address"
            />
          </div>
          <div class="mb-4 ml-3">
            <label class="block text-white text-sm font-bold mb-2">
              Estado
            </label>
            <select
              class="shadow appearance-none border rounded w-56 py-2 px-4 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="state"
              placeholder="Estado"
              name="schoolstate"
              v-model="school.state"
            >
              <option v-for="state in states.data" :key="state.index">
                {{ state.name }}
              </option>
            </select>
          </div>
          <div class="mb-4 ml-5">
            <label class="block text-white text-sm font-bold mb-2">
              Cidade
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              id="city"
              type="text"
              placeholder="Cidade"
              name="schoolcity"
              v-model="school.city"
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2">
            Materiais Necessitados (opcional)
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="desc"
            type="text"
            placeholder="Materiais Necessitados"
            name="schoolmaterialsneeded"
            v-model="school.materialsneeded"
          />
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm font-bold mb-2" for="username">
            Diretor(a) (opcional)
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="name"
            type="text"
            placeholder="Diretor(a)"
            name="schooldirector"
            v-model="school.director"
          />
        </div>
        <div class="flex justify-center">
          <div>
            <router-link
              to="/adminn/escolas/"
              class="btn bg-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              value="Cancelar"
              >Cancelar</router-link
            >
            <input
              class="btn bg-white font-bold py-1 px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline"
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
      school: [],
      states: [],
    };
  },
  mounted() {
    axios
      .get("https://childcare-brasil.vercel.app/api/states")
      .then((response) => (this.states = response));
    axios
      .get(
        "https://childcare-brasil.vercel.app/api/school/" +
          this.$route.params.id
      )
      .then((response) => {
        this.school = response.data;
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
</style>
