<template>
   <div class="flex justify-center max-w-3xl mx-auto py-10">
        <div class="w-full h-full ">

                <p>{{ image }}</p>

                <form class="bg-[#15393C] rounded px-12 pt-8 pb-8 mb-8" action="http://localhost:7777/api/schooladd" method="post">

                <div class="flex mb-4">

                    <img src="https://i.imgur.com/Wp6hAjO.jpg" class="rounded-lg h-48 w-52" alt="Avatar" id="img" />

                    <div class="px-4">
                        <label class="block text-white text-sm font-bold" for="image">
                                Link da Imagem
                            </label>
                            <input
                                class="shadow block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none" 
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
                            CNPJ
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="age" type="text" placeholder="CNPJ" maxlength="14" name="schoolcpnj">
                    </div>
                    <div class="mb-4 ml-3">
                        <label class="block text-white text-sm font-bold mb-2">
                            Telefone
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="weight" type="text" placeholder="Telefone" maxlength="9" name="schoolcellphone">
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
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="address" type="text" placeholder="Endereço" name="schooladdress" >
                    </div>
                    <div class="mb-4 ml-4">
                            <label class="block text-white text-sm font-bold mb-2">
                            Estado
                        </label>
                            <select class="shadow appearance-none border rounded w-full py-2 px-4 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="state" placeholder="Estado" name="schoolstate">
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>


                     <div class="mb-4 ml-9">
                        <label class="block text-white text-sm font-bold mb-2">
                            Cidade
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="city" type="text" placeholder="Cidade" name="schoolcity">
                    </div>
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2">
                        Materiais Necessitados
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                        id="desc" type="text" placeholder="Materiais Necessitados" name="schoolmaterialsneeded" >
                </div>

                
                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Diretor(a)
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                        id="name" type="text" placeholder="Diretor(a)" name="schooldirector">
                </div>

                <!-- save button -->
                <div class="flex justify-center">
                        <div>
                        
                            <button @click="uploadImage()"></button>
                            <router-link to="/adminn/escolas/" class="btn bg-white text-[#15393C] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" value="Cancelar">Cancelar</router-link >    
            
                                <input class="btn bg-white font-bold py-2 px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" type="submit" value="Salvar">                   
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