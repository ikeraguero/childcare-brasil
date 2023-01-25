<template>
   <div class="flex justify-center max-w-3xl mx-auto py-10">
        <div class="w-full h-full ">

            <p>{{ image }}</p>

            <form class="bg-[#15393C] rounded px-12 pt-8 pb-8 mb-8" action="https://childcare-brasil.vercel.app/api/schooladd" method="post">
                <div class="flex mb-4">
                    <img src="https://i.imgur.com/Wp6hAjO.jpg" class="rounded-lg h-48 w-52" alt="Avatar" id="img" />
                    <div class="px-4 mt-3">
                        <label class="block text-white text-sm font-bold mb-2" for="image">
                            Link da Imagem
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-96 py-2 px-3 mb-2 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white" 
                            placeholder="Link da Imagem"
                            name="schoolphoto"
                            >
                        <label class="block text-white text-sm font-bold mb-2 mt-5" for="username">
                            Nome da Escola
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="name" type="text" placeholder="Nome da Escola" name="schoolname">            
                    </div>
                </div>
                <div class="flex justify-start"> 
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2">
                            Código INEP
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="age" type="text" placeholder="Código INEP" maxlength="18" name="schoolinepcode">
                    </div>
                    <div class="mb-4 ml-3">
                        <label class="block text-white text-sm font-bold mb-2">
                            Telefone
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-56 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="weight" type="text" placeholder="Telefone" maxlength="14" name="schoolcellphone">
                    </div>
                    <div class="mb-4 ml-5">
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Email
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="name" type="text" placeholder="Email" name="schoolemail" >
                    </div>
                </div>
                <div class="flex justify-start"> 
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2">
                            Endereço
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="address" type="text" placeholder="Endereço" name="schooladdress" >
                    </div>
                    <div class="mb-4 ml-3">
                        <label class="block text-white text-sm font-bold mb-2">
                            Estado
                        </label>
                        <select class="shadow appearance-none border rounded w-56 py-2 px-2 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="state" placeholder="Estado" name="schoolstate">
                            <option v-for="state in states.data" :key="state.index">{{ state.name }}</option>
                        </select>
                    </div>
                    <div class="mb-4 ml-5">
                        <label class="block text-white text-sm font-bold mb-2">
                            Cidade
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="city" type="text" placeholder="Cidade" name="schoolcity">
                    </div>
                </div>
                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2">
                        Materiais Necessitados (opcional)
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                        id="desc" type="text" placeholder="Materiais Necessitados" name="schoolmaterialsneeded" >
                </div>   
                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Diretor(a) (opcional)
                    </label>           
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                        id="name" type="text" placeholder="Diretor(a)" name="schooldirector">
                </div>
                <div class="flex justify-center">
                    <div>
                        <router-link to="/adminn/escolas/" class="btn bg-white text-[#15393C] font-bold py-2.5 px-4 rounded focus:outline-none focus:shadow-outline" type="button" value="Cancelar">Cancelar</router-link>        
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

            states: [],
            showControls: true,
        };
    },
    mounted() {

        axios.get("https://childcare-brasil.vercel.app/api/states").then((response) => (this.states = response));
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