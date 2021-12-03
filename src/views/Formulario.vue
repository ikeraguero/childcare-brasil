<template class="teste">
  <v-container class="pa-8" id="teste">
    <h1 class="titulo">Formulário para Adoção</h1>
    <v-form>
      <v-container>
        <v-text-field
        dark
          class="text-white"
          color="white"
          label="Nome:"
          v-model="nome"
        ></v-text-field>

        <v-text-field
          dark
          class="text-white"
          color="#f8f8f2"
          label="Sobrenome:"
          v-model="sobrenome"
        ></v-text-field>

        <v-text-field
        dark
          class="text-white"
          color="#f8f8f2"
          label="Telefone:"
          v-model="telefone"
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
          label="E-mail:"
          v-model="email"
        ></v-text-field>

        <v-text-field
        dark
          class="text-white"
          color="#f8f8f2"
          label="Senha:"
          v-model="senha"
        ></v-text-field>

        <v-btn color="#f8f8f2">Salvar</v-btn>
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

</style>