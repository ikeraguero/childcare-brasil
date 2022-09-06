<template>
   <div class="flex justify-center max-w-3xl mx-auto py-10">
        <div class="w-full h-full ">

                <p>{{ image }}</p>

                <form class="rounded px-12 pt-8 pb-8 mb-8" action="http://localhost:7777/api/childadd" method="post">

                <div class="flex mb-4">

                    <img src="https://i.imgur.com/Wp6hAjO.jpg" class="rounded-lg h-48 w-52" alt="Avatar" id="img" />

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
                                Nome da Criança
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                                id="name" type="text" placeholder="Nome da Criança" name="childname">
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
                                rounded" name="childgender">
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
                            id="age" type="text" placeholder="Idade" name="childage">
                    </div>
                    <div class="mb-4 ml-3">
                        <label class="block text-white text-sm font-bold mb-2">
                            Escola
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="school" type="text" placeholder="Escola" name="childschool">
                    </div>
                    <div class="mb-4 ml-5">
                        <label class="block text-white text-sm font-bold mb-2">
                            CPF
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="cpf" type="text" placeholder="CPF" name="childcpf">
                    </div>
                    </div>


                  <div class="flex justify-start"> 
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="username">
                            Endereço
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="address" type="text" placeholder="Endereço" name="childaddress" >
                    </div>
                    <div class="mb-4 ml-7">
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                            Estado
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="state" type="text" placeholder="Estado" name="childstate" >
                    </div>


                     <div class="mb-4 ml-5">
                        <label class="block text-white text-sm font-bold mb-2">
                            Cidade
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="city" type="text" placeholder="Cidade" name="childcity">
                    </div>
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2">
                        Descrição
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                        id="description" type="text" placeholder="Descrição" name="childdesc" >
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Nome do Responsável
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                        id="responsable" type="text" placeholder="Nome do Cuidador" name="childowner" >
                </div>
                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Observações
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                        id="observations" type="text" placeholder="Observações" name="childobs">
                </div>

                <!-- save button -->
                <div class="flex justify-center">
                        <div>
                        
                            <button @click="uploadImage()"></button>
                            <router-link to="/adminn/criancas/" class="bg-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" value="Cancelar">Cancelar</router-link >
            
                            <input class="bg-white font-bold py-2 px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" type="submit" value="Salvar">                     
                        </div>
                    </div>    

            </form>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
export default {
    name: "AddForm",
    
    data() {
        return {
            image: "",
        };
    },
    methods: {
        uploadImage(image) {
            
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Client-ID 483db59972b36f5");
            var formdata = new FormData();
            formdata.append("image", image);
            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
            };
            fetch("https://api.imgur.com/3/image", requestOptions)
            .then(data => data.json()).then(data => {
                this.image = data.data.link;
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        }
    }
};
</script>

<style>
.bg-white{
    color: black;
    }

.block {
    color: #FFF6EE;
}
</style>