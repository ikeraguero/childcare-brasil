<template class="teste">
  <v-container class="pa-8" id="teste">
    <h1 class="titulo">Formulário de Adoção</h1>
        <v-form>
      <v-container>
        <h1 class="text-form">Informações Iniciais</h1>
        <v-text-field
        dark
          class="text-white"
          color="white"
          label="NOME COMPLETO:"
          v-model="nome"
        ></v-text-field>



        <v-text-field
        dark
          class="text-white"
          color="#f8f8f2"
          label="CPF:"
          v-model="cpf"
        ></v-text-field>

        <v-text-field
            dark
            class="text-white"
            color="#f8f8f2"
            label="PROFISSÃO:"
            v-model="email"
        ></v-text-field>
        
            <br>
            <div class="">
                <p class="p">JÁ ADOTOU ALGUM ANIMAL ANTES?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="SIM"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="NÃO"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>                
            </div>
            <br>
        <v-text-field
            dark
            class="text-white"
            color="#f8f8f2"
            label="E-MAIL:"
            v-model="email"
        ></v-text-field>

        <v-text-field
            dark
            class="text-white"
            color="#f8f8f2"
            label="TELEFONE:"
            v-model="email"
        ></v-text-field>

        <v-text-field
            dark
            class="text-white"
            color="#f8f8f2"
            label="IDADE:"
            v-model="email"
        ></v-text-field>        
        
        <h1 class="text-form">Dados de Endereço</h1>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="10"
        >
          <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="ENDEREÇO"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="2"
        >
          <v-text-field
          dark
            v-model="lastname"
            :rules="nameRules"
            label="NÚMERO"
            required
          ></v-text-field>
        </v-col>

      </v-row>
        <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="COMPLEMENTO"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
          dark
            v-model="lastname"
            :rules="nameRules"
            label="BAIRRO"
            required
          ></v-text-field>

          
          


        </v-col>
      </v-row>
    </v-container>

            <br> <br>
        <v-btn color="#f8f8f2">ENVIAR</v-btn>

      </v-container>
    </v-form>
  </v-container>
  
</template>

<script>
export default {

}
</script>

<style>

.texto{
  color: #f8f7f2;
  font-family: 'Cardo';
  font-size: 25px;
  text-align: justify; 
}
.titulo {
  text-align: center;
  font-family: 'Reenie Beanie', cursive;
  font-size: 80px;
  color: #f8f7f2;
}

p {
    color: #f8f8f2;
}
</style>