<template>
    <span>
        <div class="flex overflow-hidden whitespace-nowrap no-scrollbar relative scroll-smooth snap-x" id="container">
            <div v-for="card in cards.data" :key="card.index">
                <div class="flex px-2 m-2 snap-center">
                    <div class="rounded-lg shadow-md w-[300px] lg:w-[410px]">
                        <div class="p-6">
                            <div class="flex justify-between">
                                <h5 class="text-xl font-medium mb-2 text-base">Doação #{{ card.index }}
                                </h5>
                                <h5 class="text-xl font-medium mb-2"></h5>
                            </div>
                            <p class="text-base mb-1 h-6">
                              <b>ID: </b>{{ card.id }}
                            </p>
                            <p class="text-base mb-1 h-6">
                               <b>Doador: </b>{{ card.donatortype }} | {{ card.donator }}
                            </p>
                            <p class="text-base mb-1 h-6">
                                <b>CPF: </b>{{ card.cpf }}
                            </p>
                            <p class="text-base mb-1 h-6">
                                <b>CNPJ: </b>{{ card.cnpj }}
                            </p>
                            <p class="text-base mb-1 h-6">
                                <b>Tipo: </b>{{ card.type }}
                            </p>
                            <p class="text-base mb-1 h-6">
                                <b>Valor: </b>R${{ card.value }}
                            </p>
                            <p class="text-base mb-1 h-6">
                                <b>Materiais: </b> {{ card.materials }}
                            </p>
                            <p class="text-base mb-1 h-6">
                                <b>Para: </b> {{ card.materials }}
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