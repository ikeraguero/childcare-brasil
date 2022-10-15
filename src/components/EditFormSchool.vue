<template>
    <div class="flex justify-center max-w-3xl mx-auto py-10">
        <div class="w-full h-full ">
            <form class="bg-[#15393C] rounded px-12 pt-8 pb-8 mb-8" v-bind:action="'https://localhost:7777/api/schoolupdate/' + school.id" method="post">
                <div class="flex mb-4">
                    <img :src="school.photo" class="rounded-lg h-48 w-52" alt="Avatar" />
                    <div class="px-4">
                        <label class="block text-white text-sm font-bold" for="image">
                                Foto
                            </label>
                            <input
                                class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none"
                                id="default_size" type="file">
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                                Nome do Animal
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" type="text" placeholder="Nome do Animal" name="schoolname" v-model="school.name">
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                            Sexo do Animal
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
                                rounded" name="schoolgender">
                            <option value="macho">Macho</option>
                            <option value="femea">Femea</option>
                        </select>
                    </div>

                </div>
                <div class="flex justify-start"> 
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2">
                            Idade
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                            id="age" type="text" placeholder="Idade" name="schoolage" v-model="school.age">
                        </div>
                    </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2">
                        Descrição
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                        id="desc" type="text" placeholder="Descrição" name="schooldesc" v-model="school.description">
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Nome do Cuidador
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                        id="owner" type="text" placeholder="Nome do Cuidador" name="schoolowner">
                </div>
                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Observações
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-4 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" type="text" placeholder="Observações" name="schoolobs" v-model="school.observations">
                </div>

                <div class="flex justify-between">
                        <div>
                 
                            <a href="/admin" class="bg-white text-[#15393C] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" value="Cancelar">Cancelar</a>    
            
                            <input class="bg-white text-[#15393C] font-bold py-2 px-6 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" type="submit" value="Salvar">                     
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