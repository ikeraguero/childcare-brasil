<template>
    <div class="flex justify-center max-w-3xl mx-auto py-10">
        <div class="w-full h-full ">
            <form class="rounded px-12 pt-8 pb-8 mt-8 mb-8" action="http://localhost:7777/api/schoolupdate" method="post">

<div class="flex mb-4">

    <img :src="school.photo" class="rounded-lg h-48 w-52" alt="Avatar" id="img" />

    <div class="px-4">
        <label class="block text-white text-sm font-bold" for="image">
                Foto
            </label>
            <input
                type="file"
                class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none" 
                @change="uploadImage($event.target.files[0])"
                accept="image/*"
                >
            <label class="block text-white text-sm font-bold mb-2" for="username">
                Nome da Escola
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                id="name" type="text" placeholder="Nome da Criança" name="schoolname" v-model="school.name">
            <label class="block text-white text-sm font-bold mb-1 mt-2" for="username">
            Sexo
        </label>

        <select class="form-select appearance-none
                block
                w-full
                px-3
                py-2
                text-base
                font-normal
                text-black
                bg-white 
                rounded" name="schoolgender" v-model="school.gender">
            <option value="menino">Menino</option>
            <option value="menina">Menina</option>
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
            id="age" type="text" placeholder="Idade" name="schoolage" v-model="school.age">
    </div>
    <div class="mb-4 ml-3">
        <label class="block text-white text-sm font-bold mb-2">
            Escola
        </label>
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="school" type="text" placeholder="Escola" name="schoolschool" v-model="school.school">
    </div>
    <div class="mb-4 ml-5">
        <label class="block text-white text-sm font-bold mb-2">
            CPF
        </label>
        <input
            class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="cpf" type="text" placeholder="CPF" name="schoolcpf" v-model="school.cpf">
    </div>
    </div>


  <div class="flex justify-start"> 
    <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="username">
            Endereço
        </label>
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="address" type="text" placeholder="Endereço" name="schooladdress" v-model="school.address">
    </div>
    <div class="mb-4 ml-7">
            <label class="block text-white text-sm font-bold mb-2" for="username">
            Estado
        </label>
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="state" type="text" placeholder="Estado" name="schoolstate" v-model="school.state">
    </div>


     <div class="mb-4 ml-5">
        <label class="block text-white text-sm font-bold mb-2">
            Cidade
        </label>
        <input
            class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="city" type="text" placeholder="Cidade" name="schoolcity" v-model="school.city">
    </div>
</div>

<div class="mb-4">
    <label class="block text-white text-sm font-bold mb-2">
        Descrição
    </label>
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
        id="description" type="text" placeholder="Descrição" name="schooldesc" v-model="school.description">
</div>

<div class="mb-4">
    <label class="block text-white text-sm font-bold mb-2" for="username">
        Nome do Responsável
    </label>
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
        id="responsable" type="text" placeholder="Nome do Responsável" name="schoolowner" >
</div>
<div class="mb-4">
    <label class="block text-white text-sm font-bold mb-2" for="username">
        Observações
    </label>
    <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
        id="observations" type="text" placeholder="Observações" name="schoolobs">
</div>

<!-- save button -->
<div class="flex justify-center">
        <div>
        
            <button @click="uploadImage()"></button>
            <router-link to="/adminn/criancas/" class="btn bg-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" value="Cancelar">Cancelar</router-link >

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
    data() {
        return {
            school: [],
        };
    },
    mounted() {
        axios.get("http://localhost:7777/api/school/" + this.$route.params.id)
            .then(response => {
                this.school = response.data;
            })
    },
};
</script>

<style scoped>

form{
    background-color: #FFF6EE;
}

.block {
    color: #621200;
}

.btn {
    background-color: #621200;
    color: #FFF6EE;
}

</style>