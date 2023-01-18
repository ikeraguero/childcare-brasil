<template>
    <div class="popup flex justify-center max-w-3xl mx-auto py-10">
        <div class="popup-inner w-full h-full ">
            <form class="rounded px-12 pt-8 pb-8 mt-8 mb-8" v-bind:action="'http://localhost:7777/api/childupdate/' + child.id" method="post">

<div class="flex mb-4">

    <img :src="child.photo" class="rounded-lg h-48 w-52" alt="Avatar" id="img" />

    <div class="px-4">
        <label class="block text-white text-sm font-bold mb-2" for="image">
                                ID
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-96 py-2 px-3 mb-2 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white" 
                                placeholder="Link da Imagem"
                                name="childphoto"
                                v-model="donation.photo"
                                >
            <label class="block text-white text-sm font-bold mb-2" for="username">
                Nome da Criança
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                id="name" type="text" placeholder="Nome da Criança" name="childname" v-model="donation.donator">
            <label class="block text-white text-sm font-bold mb-1 mt-2" for="username">
            Sexo
        </label>
    </div>

</div>

<div class="flex justify-start"> 
    <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2">
            CNPJ
        </label>
        <input
            class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="age" type="text" placeholder="Idade" name="childage" v-model="donation.cpf">
    </div>
    <div class="mb-4 ml-3">
        
    </div>
    <div class="mb-4 ml-5">
        <label class="block text-white text-sm font-bold mb-2">
            CPF
        </label>
        <input
            class="shadow appearance-none border rounded w-48 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="cpf" type="text" placeholder="CPF" name="childcpf" v-model="donation.cnpj">
    </div>
    </div>


  <div class="flex justify-start"> 
    <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="username">
            Tipo
        </label>
        <input
            class="shadow appearance-none border rounded w-15 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            id="address" type="text" placeholder="Endereço" name="childaddress" v-model="donation.type">
    </div>
                     <div class="mb-4 ml-4">
                        <label class="block text-white text-sm font-bold mb-2">
                            Valor
                        </label>
                        <input
                            class="shadow appearance-none border rounded w-48 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                            id="city" type="text" placeholder="Cidade" name="childcity" v-model="donation.value">
                    </div>
</div>

<div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2">
                        Materiais Necessitados
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                        id="description" type="text" placeholder="Materias Necessitados" name="childmaterialsneeded" v-model="donation.materials">
                </div>

                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Nome do Responsável
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                        id="responsable" type="text" placeholder="Nome do Responsável" name="childresponsables" v-model="donation.donatedto">
                </div>
                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Nome do Responsável
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                        id="responsable" type="text" placeholder="Nome do Responsável" name="childresponsables" v-model="donation.data">
                </div>
                <div class="mb-4">
                    <label class="block text-white text-sm font-bold mb-2" for="username">
                        Nome do Responsável
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
                        id="responsable" type="text" placeholder="Nome do Responsável" name="childresponsables" v-model="donation.status">
                </div>


<!-- save button -->
<div class="flex justify-center">
        <div>
        
            <button @click="uploadImage()"></button>
            <button class="popup-close btn bg-white font-bold py-2.5 px-4 rounded focus:outline-none focus:shadow-outline" type="button" value="Cancelar">Cancelar</button >

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
            donation: [],

        };
    },
    mounted() {
        axios.get("http://localhost:7777/api/donation/" + this.$route.params.id)
            .then(response => {
                this.child = response.data;
            })
    },
};
</script>

<style lang="scss" scoped>

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
.popup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    .popup-inner {
        background:#FFF;
        padding: 32px;
    }

}

</style>