<template>
    <span>
        <div class="grid gap-1 grid-cols-4 grid-rows-0 overflow whitespace-nowrap no-scrollbar relative scroll-smooth snap-x" id="container">
            <div v-for="card in cards.data" :key="card.index">
                <div class="flex px-3 m-2 snap-center">
                    <div class="rounded-lg shadow-md bg-[#15393C] w-[300px] lg:w-[410px]">
                        <a href="/">
                            
                            <router-link v-bind:to="'/escolas/perfil/' + card.id"><img class="rounded-t-lg h-80" :src="card.photo" /></router-link>
                        </a>
                        <div class="p-6">
                            <div class="flex justify-between">
                                <h5 class="text-white text-xl font-medium mb-2">
                                    {{ card.name }}
                                </h5>
                            </div>

                            <p class="text-white text-base mb-4 h-20">
                                {{ card.city }}, {{card.state}}
                            </p>
                            <div class="flex justify-center flex-row">
                                
                                <router-link
                                    v-bind:to="'/escolas/doar/' + card.id"
                                    type="button"
                                    class="inline-block px-6 py-2.5 ml-3 bg-white text-[#15393C] cursor-pointer font-semibold text-xs leading-tight uppercase rounded shadow-md"
                                    >Doar</router-link
                                >
                                <router-link
                                    v-bind:to="'/escolas/perfil/' + card.id"
                                    type="button"
                                    class="inline-block px-6 py-2.5 ml-3 bg-white text-[#15393C] cursor-pointer font-semibold text-xs leading-tight uppercase rounded shadow-md"
                                    >Informações</router-link
                                >
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
        axios.get("http://localhost:7777/api/schools").then((response) => (this.cards = response));
    },

};
</script>

<style scoped>
.card-control {
    background-color: transparent;
    border: none;
    position: absolute;
    width: 70px;
    top: calc(50% - 25px);
    color: #15393c81;
    transition: 0.5s;
}
.card-control:hover {
    color: #15393c;
}
.left {
    left: 0;
}
.right {
    right: 0;
}
.rounded-lg {
    background-color: #FFF6EE
}
.text-white {
    color:#621200
}
.inline-block {
    color:#FFF6EE;
    background-color: #621200;
    
}
</style>