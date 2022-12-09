<template>
   <div class="flex justify-center max-w-3xl mx-auto py-10">
        <div class="w-full h-full ">

                <p>{{ image }}</p>

                <form class="rounded px-12 pt-8 pb-8 mb-8" action="http://localhost:7777/api/childadd" method="post">

                <div class="flex mb-4">

                    <img src="https://i.imgur.com/Wp6hAjO.jpg" class="rounded-lg h-48 w-52" alt="Avatar" id="img-preview" />

                    <div class="px-4">
                        <label class="block text-white text-sm font-bold" for="image">
                                Link da Imagem
                            </label>
                            <input
                                class="shadow block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none" 
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
                            <option value="Masculino">Menino</option>
                            <option value="Feminino">Menina</option>
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
                            id="age" type="text" placeholder="Idade" maxlength="2" name="childage">
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
                            id="cpf" type="text" placeholder="CPF" maxlength="11" name="childcpf">
                    </div>
                    </div>


                  <div class="flex justify-start"> 
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2">
                            Endereço
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="address" type="text" placeholder="Endereço" name="childaddress" >
                    </div>
                    <div class="mb-4 ml-4">
                            <label class="block text-white text-sm font-bold mb-2">
                            Estado
                        </label>
                            <select class="shadow appearance-none border rounded w-full py-2 px-4 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="state" placeholder="Estado" name="childstate">
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
                            <router-link to="/adminn/criancas/" class="btn bg-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" value="Cancelar">Cancelar</router-link >
            
                            <input class="btn bg-white font-bold py-2 px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" type="submit" value="Salvar">                     
                        </div>
                    </div>    

            </form>
        </div>
    </div>
</template>

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script>
export default {
    name: "AddForm",
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