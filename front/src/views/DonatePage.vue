<template>

       
    <v-container class="flex justify-center text-white">
        <form class="bg-[#FFF6EE] rounded px-12 pt-8 pb-8 mb-8 block text-white text-sm font-bold mb-2" >
            Nome completo
            <label>
            <input 
            type="text"
            class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none"
            />
            Email para contato
            </label>
            <label>
            <input 
            type="email"
            class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none"
            />
            Telefone para contato
            </label>
            <label>
            <input 
            type="text"
            class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none"
            />
            CPF
            </label>
            <label>
            <input 
            type="text"
            class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none"
            />
            </label>
            Residência
            <label>
            <input 
            type="text"
            class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none"
            />
            </label>
            <label class="block text-white text-sm font-bold mb-2" for="username">
              Tipo de doação
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
            <option value="dinheiro">Dinheiro</option>
            <option value="material">Material Escolar</option>
        </select>
        </form>

    </v-container>
</template>

<script>

export default {
    data() {
        return {
            nome:"Iker"
        }
    }
}

</script>

<style>
 .v-container {
    color: #FFF6EE,
 }
</style>