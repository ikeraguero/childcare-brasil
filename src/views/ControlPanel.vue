<template>
    <div>
      <h1 class="flex justify-center py-10 text-4xl text-[#15393C] font-semibold">PAINEL DE CONTROLE</h1>
        <div class="d-flex justify-space-around mt-20 ">

            <v-btn icon min-width="200" link to="/adminn/criancas">
            <v-img 
            class="posicao"
            lazy-src="@/assets/imagens/3.png"
            max-height="300px"
            max-width="350px"
            src="@/assets/imagens/1a.png" 
          ></v-img>
            </v-btn>

            <v-btn icon min-width="200" link to="/adminn/escolas">

            <v-img
            class="posicao"
            lazy-src="@/assets/imagens/4.png"
            max-height="300"
            max-width="350"
            src="@/assets/imagens/2a.png"
          ></v-img>
            </v-btn> 
          </div>
          <br>
          <div class="d-flex justify-space-around mt-16 text-3xl" height="100">
            <h1>Crianças</h1> 
            <h1>Escolas</h1>


            
          </div>
    </div>
</template>

<script>
</script>