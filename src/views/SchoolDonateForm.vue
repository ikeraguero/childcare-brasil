<template>

       
    <v-container class="flex justify-center">
            <span class="text-align-center text-white">Você está doando para
                <div class="px-3 m-1">
                    {{ child.name }}
                    <img class="rounded-lg h-28 mt-20 justify-center" :src="child.photo" />
                </div>

            </span>

        <form class="bg-[#FFF6EE] rounded px-20 pt-8 pb-8 mb-8 ml-0" >
            <label class="block text-white text-sm font-bold mb-0" for="username">
              <div class="test">Doar como:</div>
            </label>
            <select class="form-select appearance-none
                block
                w-full
                px-3
                py-1
                text-base
                font-normal
                text-black
                bg-white 
                rounded" name="donationdonatortype" id="donatortype" @click="test1">
            <option value="0"></option>    
            <option value="1">Pessoa Física</option>
            <option value="2">Empresa</option>
                </select>
            <label class='block text-white text-sm font-bold mb-3 mt-3' name="donationcpf" id="person" style="display: none">
                            <div class="test">CPF</div>
            <input 
            type="text"
            class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none"
            />
            </label>
            <label class='block text-white text-sm font-bold mb-3 mt-3' name="donationcnpj" id="company" style="display: none">
                            <div class="test">CNPJ</div>
            <input 
            type="text"
            class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none"
            />
            </label>
            <label class='block text-white text-sm font-bold mb-3 mt-3' name="donationdonator">
                <div class="test">Nome Completo</div>
            <input 
            type="text"
            class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none"
            />
            </label>
            <label class='block text-white text-sm font-bold mb-3' name="donationemail">
                        <div class="test">Email para contato</div>
            <input 
            type="email"
            class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none"
            />
            </label>
            <label class='block text-white text-sm font-bold mb-3' name="donationcellphone">
                        <div class="test">Telefone para contato</div>
            <input 
            type="text"
            class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none"
            />
            </label>

            <label class='block text-white text-sm font-bold mb-3' >
                            <div class="test">Residência</div>
            <input 
            type="text"
            class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none"
            />
            </label>
            <label class="block text-white text-sm font-bold mb-0" for="username">
              <div class="test">Tipo de doação</div>
            </label>

            <select class="form-select appearance-none
                block
                w-full
                px-3
                py-1
                text-base
                font-normal
                text-black
                bg-white 
                rounded" name="donationtype" id="donationtype" @click='test'>
            <option value="0"></option>    
            <option value="1">Dinheiro</option>
            <option value="2">Material Escolar</option>
                </select>
            <label class='block text-sm font-bold mb-3 mt-3' name="donationvalue" id="money" style="display: none">
                            <div class="test">Quantia</div>
            <input 
            type="text"
            class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none"
            />
            </label>
            <label class='block text-sm font-bold mb-3 mt-3' name="donationmaterials" id="materials" style="display: none">
                            <div class="test">Materiais</div>
            <input 
            type="text"
            class="block mb-2 w-96 h-7 text-sm text-black-900 bg-white rounded border border-white cursor-pointer dark:text-gray-400 focus:outline-none"
            />
            </label>
            <div class="flex justify-center">
                        <div class="mt-6">
                        
                            <router-link to="/criancas/" class="bg-white text-[#15393C] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" value="Cancelar">Cancelar</router-link >    
            
                            <input class="bg-white text-[#15393C] font-bold py-2 px-6 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" type="submit" value="Salvar">                    
                        </div>
                    </div> 
        </form>

    </v-container>
</template>

<script>
import axios from "axios";

export default {
    name: "App",
    data() {
        return {
            school: [],
            showControls: true,
        };
    },
    mounted() {
        axios.get("http://localhost:7777/api/school/" + this.$route.params.id)
        .then(response => {
            this.school = response.data
        })
    },
    methods: {
        left() {
            document.getElementById("container").scrollLeft -= 320;
        },
        right() {
            document.getElementById("container").scrollLeft += 320;
        },
        age(age) {
            if (age > 1) {
                return "Anos";
            } else {
                return "Ano";
            }
        },    
        test() {
            if (document.getElementById("donationtype").value == '1') {
            document.getElementById('money').removeAttribute('style')
            document.getElementById('materials').style.display = 'none';
            } else {
            document.getElementById('money').style.display = 'none';


            if (document.getElementById("donationtype").value == '2') {
            document.getElementById('materials').removeAttribute('style')
            document.getElementById('money').style.display = 'none';
            } else {
            document.getElementById('materials').style.display = 'none';
    }
}

},
        test1() {
            if (document.getElementById("donatortype").value == '1') {
            document.getElementById('person').removeAttribute('style')
            document.getElementById('company').style.display = 'none';
            } else {
            document.getElementById('person').style.display = 'none';


            if (document.getElementById("donatortype").value == '2') {
            document.getElementById('company').removeAttribute('style')
            document.getElementById('person').style.display = 'none';
            } else {
            document.getElementById('company').style.display = 'none';
    }
}

},
    }
}
</script>

<style>
 .v-container {
    color: #FFF6EE,
 }
</style>