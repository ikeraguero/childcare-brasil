<template>
    <v-container class="pa-8 content-align-center">
        <div>
            Quase lá!
        </div>
        <div>
            Para completar sua doação para <b>{{ child.name }}</b>, envie os materiais informados para o seguinte endereço:
        </div>
        <div>
            {{child.address}}, {{child.city}}, {{child.state}}
        </div>
        <form action="https://childcare-brasil.vercel.app/api/donationadd" method="post">
            <input class="bg-white text-[#15393C] font-medium py-2 px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline" 
            id="materialpayment" type="submit" value="Prosseguir">
        </form>
        <div class="align-itens-center">
            <u></u>
        </div>
    </v-container>
  </template>
  
  <script>
  import axios from "axios";

export default {
    name: "App",
    data() {
        return {
            child: [],
            showControls: true,

        };
    },
    mounted() {
        axios.get("https://childcare-brasil.vercel.app/api/child/" + this.$route.params.id)
        .then(response => {
            this.child = response.data
        })
    },

    
    methods: {
        left() {
            document.getElementById("container").scrollLeft -= 320;
        },
        right() {
            document.getElementById("container").scrollLeft += 320;
        },
    }
}
  </script>
  
  <style>
  .pa-8 {
    color: #FFF6EE;
    font-size: 26px;
    font-family: "Proxima Nova", system-ui, sans-serif;
    text-align: center;
  }
  </style>