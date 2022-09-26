<template>
    <span>
        <div class="grid gap-1 grid-cols-5 grid-rows-0 overflow-hidden whitespace-nowrap no-scrollbar relative scroll-smooth snap-x" id="container">
            <div v-for="card in cards.data" :key="card.index">
                <div class="flex px-2 m-2 snap-center">
                    <div class="rounded-lg shadow-md w-[300px] lg:w-[410px]">
                        <div class="p-6">
                            <button @click="disappear">Teste</button>
                            <div class="flex justify-between">
                                <h5 class="text-xl font-medium mb-2 text-base">Doação #{{ card.index }}
                                </h5>
                                <h5 class="text-xl font-medium mb-2"></h5>
                            </div>
                            <p class="text-base mb-1 h-6">
                              <b>ID: </b>{{ card.id }}
                            </p>
                            <p class="text-base mb-1 h-6">
                               <b>Doador: </b><input id="donatorty" v-bind:value=card.donatortype />| {{ card.donator }}
                            </p>
                            <p class="text-base mb-1 h-6" id="cpf" style="display: none">
                                <b>CPF: </b>{{ card.cpf }}
                            </p>
                            <p class="text-base mb-1 h-6" id="cnpj" style="display: none">
                                <b>CNPJ: </b>{{ card.cnpj }}
                            </p>
                            <p class="text-base mb-1 h-6">
                                <b>Tipo: </b>{{ card.type }}
                            </p>
                            <p class="text-base mb-1 h-6" id="money" style="display: none">
                                <b>Valor: </b>R${{ card.value }}
                            </p>
                            <p class="text-base mb-1 h-6" id="materials" style="display: none">
                                <b>Materiais: </b> {{ card.materials }}
                            </p>
                            <p class="text-base mb-1 h-6" >
                                <b>Para: </b> {{ card.donatedto}}
                            </p>
                            <div class="flex justify-center flex-row">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </span>
</template>

<script>
import axios from "axios";


export default {
    name: "App",
    data() {
        return {
            cards: [],
            showControls: true,
        };
    },
    mounted() {
        axios.get("http://localhost:7777/api/donations").then((response) => (this.cards = response));
    },
    methods: {
        disappear() {
            
        if (document.getElementById('donatorty').value == "1") {
            document.getElementsByClassName('cpf text-base mb-1 h-6').removeAttribute('style')
            } else {
        document.getElementsByClassName('cnpj text-base mb-1 h-6').removeAttribute('style') 
            } 
        }
        
    }
}

</script>

<style scoped>
.rounded-lg {
    background-color: #FFF6EE
}
.text-base {
    color:#621200
}
.inline-block {
    color:#FFF6EE;  
    background-color: #621200;
    
}
</style>