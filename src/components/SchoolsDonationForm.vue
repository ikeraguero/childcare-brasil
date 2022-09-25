<template>
    <div class="flex justify-center max-w-3xl mx-auto py-10">
    <div class="w-full h-full">
        <form class="rounded px-18 pt-8 pb-8 mb-8" action="http://localhost:7777/api/donationadd" method="post">
        <div class="test1 mb-0 flex justify-center">Você está doando para:</div>
        <div class="test1 mb-8 flex justify-center font-bold">{{ school.name }}</div>
        <label class="block text-white text-sm font-bold mb-0" for="username">
          <div class="test">Doar como:</div>
        </label>
        <select class="form-select appearance-none
        shadow appearance-none border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white" name="donationdonatortype" id="donatortype" @click="test1">
        <option value="0"></option>    
        <option value="1">Pessoa Física</option>
        <option value="2">Empresa</option>
            </select>
        <label class='block text-sm font-bold mb-3 mt-3' name="donationcpf" id="person" style="display: none">
                        <div class="test">CPF</div>
        <input 
        type="text"
        class="shadow appearance-none font-medium border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
        />
        </label>
        <label class='block text-sm font-bold mb-3 mt-3' name="donationcnpj" id="company" style="display: none">
                        <div class="test">CNPJ</div>
        <input 
        type="text"
        class="shadow appearance-none font-medium border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
        />
        </label>
        <label class='block text-sm font-bold mb-3 mt-3' name="donationdonator">
            <div class="test">Nome Completo</div>
        <input 
        type="text"
        class="shadow appearance-none font-medium border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
        required>
        </label>
        <label class='block text-sm font-bold mb-3' name="donationemail">
                    <div class="test">Email para contato</div>
        <input 
        type="email"
        class="shadow appearance-none font-medium border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
        required>
        </label>
        <label class='block text-sm font-bold mb-3' name="donationcellphone">
                    <div class="test">Telefone para contato</div>
        <input 
        type="text"
        class="shadow appearance-none font-medium border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
        required>
        </label>

        <label class='block text-sm font-bold mb-3' >
                        <div class="test">Residência</div>
        <input 
        type="text"
        class="shadow appearance-none font-medium border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
        required>
        </label>
        <label class="block text-sm font-bold mb-0" for="username">
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
        <label class='block text-sm font-bold mb-3 mt-3' name="donationvalue" id="money" style="display: none"/>

        <label class='block text-sm font-bold mb-3 mt-3' name="donationmaterials" id="materials" style="display: none">
                        <div class="test">Materiais</div>
        <input 
        type="text"
        class="shadow appearance-none font-medium border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
        />
        </label>
        <div class="flex justify-center">
                    <div class="mt-6 flex justify-center">
                    
                        <router-link to="/escolas/" class="bg-white text-[#15393C] font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2" type="button" value="Cancelar">Cancelar</router-link >    
                            <form action="https://donate.stripe.com/test_4gw03M7353JQ8Pm9AA" class="ml-2 bg-white text-[#15393C] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="moneypayment" style="display: none" >
                         <input type="submit" value="Prosseguir"/>
                             </form>
                         <input class="bg-white text-[#15393C] font-medium py-2 px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" 
                         id="materialpayment" type="submit" value="Prosseguir" style="display: none">

                         <input class="bg-white text-[#15393C] font-medium py-2 px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" 
                         id="nothing" type="submit" value="Prosseguir" style="display: block">
                    </div>
                </div> 
    </form>
</div>
</div>
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
        
        if (document.getElementById("donationtype").value == '0') {
        document.getElementById('money').removeAttribute('style')
        document.getElementById('materials').style.display = 'none';
        document.getElementById('nothing').removeAttribute('style')
        document.getElementById('materialpayment').style.display = 'none';
        document.getElementById('moneypayment').style.display = 'none';
        } else {
        document.getElementById('money').style.display = 'none';
        document.getElementById('moneypayment').style.display = 'none';
        document.getElementById('nothing').style.display = 'none';
        


        if (document.getElementById("donationtype").value == '1') {
        document.getElementById('nothing').style.display = 'none';
        document.getElementById('money').removeAttribute('style')
        document.getElementById('materials').style.display = 'none';
        document.getElementById('moneypayment').removeAttribute('style')
        document.getElementById('materialpayment').style.display = 'none';
        } else {
        document.getElementById('money').style.display = 'none';
        document.getElementById('moneypayment').style.display = 'none';
        document.getElementById('nothing').style.display = 'block';

        


        if (document.getElementById("donationtype").value == '2') {
        document.getElementById('nothing').style.display = 'none';
        document.getElementById('materials').removeAttribute('style')
        document.getElementById('money').style.display = 'none';
        document.getElementById('materialpayment').removeAttribute('style')
        document.getElementById('moneypayment').style.display = 'none';
        } else {
        document.getElementById('materials').style.display = 'none';
        document.getElementById('materialpayment').style.display = 'none';
        document.getElementById('nothing').style.display = 'block';
}
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
.test1 {
color: #FFF6EE;
font-family: "Proxima Nova", system-ui, sans-serif;
font-size: 26px;

}
</style>