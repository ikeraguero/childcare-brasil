<template>
    <v-container class="pa-8 content-align-center">
      <div>
            Sua doação de materiais para {{ child.name }} foi registrada com sucesso!
      </div>
      <div>
            Para completá-la, envie os materiais ({{}}) para o seguinte endereço:
      </div>
      <div>
            {{child.address}}, {{child.city}}, {{child.state}}
      </div>
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
        axios.get("http://localhost:7777/api/child/" + this.$route.params.id)
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