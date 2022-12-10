<template>
   <div class="flex justify-center max-w-3xl mx-auto py-10">
        <div class="w-full h-full ">

                <p>{{ image }}</p>

                <form class="rounded px-12 pt-8 pb-8 mb-8" action="http://localhost:7777/api/childadd" method="post">

                <div class="flex mb-4">

                    <img src="https://i.imgur.com/Wp6hAjO.jpg" class="rounded-lg h-50 w-52" alt="Avatar" id="img-preview" />

                    <div class="px-4">
                        <label class="block text-white text-sm font-bold mb-2" for="image">
                                Link da Imagem
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-96 py-2 px-3 mb-2 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white" 
                                placeholder="Link da Imagem"
                                name="childphoto"
                                >
                            <label class="block text-white text-sm font-bold mb-2">
                                Nome da Criança
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                id="name" type="text" placeholder="Nome da Criança" name="childname">
                            <label class="block text-white text-sm font-bold mb-1 mt-2">
                            Sexo
                        </label>

                        <select class="shadow form-select appearance-none
                                block
                                w-full
                                px-3
                                py-2
                                text-base
                                font-normal
                                text-black
                                bg-white 
                                rounded" name="childgender">
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
                            class="shadow appearance-none w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="age" type="text" placeholder="Idade" maxlength="2" name="childage">
                    </div>
                    <div class="mb-4 ml-3">
                        <label class="block text-white text-sm font-bold mb-2">
                            Escola
                        </label>
                        <select
                            class="shadow appearance-none border rounded w-56 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="school" type="text" placeholder="Escola" name="childschool">
                            <option v-for="card in cards.data" :key="card.index">{{ card.name }}</option>
                        </select>
                    </div>
                    <div class="mb-4 ml-4">
                        <label class="block text-white text-sm font-bold mb-2">
                            CPF
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="cpf" type="text" placeholder="CPF" maxlength="11" name="childcpf">
                    </div>
                    </div>


                  <div class="flex justify-start"> 
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2">
                            Endereço
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="address" type="text" placeholder="Endereço" name="childaddress" >
                    </div>
                    <div class="mb-4 ml-3">
                            <label class="block text-white text-sm font-bold mb-2">
                            Estado
                        </label>
                            <select class="shadow appearance-none border rounded w-56 py-2 px-2 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white mr-0"
                            id="state" placeholder="Estado" name="childstate">
                            <option v-for="state in states.data" :key="state.index">{{ state.name }}</option>
                        </select>
                    </div>


                     <div class="mb-4 ml-4">
                        <label class="block text-white text-sm font-bold mb-2">
                            Cidade
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="city" type="text" placeholder="Cidade" name="childcity">
                    </div>
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2">
                        Materiais Necessitados
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                        id="description" type="text" placeholder="Materias Necessitados" name="childmaterialsneeded" >
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Nome do Responsável
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                        id="responsable" type="text" placeholder="Nome do Responsável" name="childresponsables" >
                </div>

                <div class="flex justify-center">
                        <div>
                        
                            <button @click="uploadImage()"></button>
                            <router-link to="/adminn/criancas/" class="btn bg-white font-bold py-2.5 px-4 rounded focus:outline-none focus:shadow-outline" type="button" value="Cancelar">Cancelar</router-link >
            
                            <input class="btn bg-white font-bold py-2 px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" type="submit" value="Salvar">                     
                        </div>
                    </div>    

            </form>
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
        axios.get("http://localhost:7777/api/schools").then((response) => (this.cards = response));
        axios.get("http://localhost:7777/api/states").then((response) => (this.states = response));
    },
}

</script>

<style scoped>
.bg-white{
    color: black;
    }

form {
    background-color: #FFF6EE;
}

.block {
    color: #621200
}
.v-application a {
    color: #FFF6EE
}

.btn {
    background-color: #621200;
    color:  #FFF6EE
}
</style>