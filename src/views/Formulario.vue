<template class="teste">
  <v-container class="pa-8" id="teste">
    <h1 class="titulo">Formulário de Doação</h1>
    <v-container class="pa-8" id="teste">
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <h3>Nome Completo</h3>
    <v-text-field background-color="#f8f7f2"
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Nome"
      required
    ></v-text-field>

    <h3>CPF</h3>
    <v-text-field background-color="#f8f7f2"
      v-model="cpf"
      :rules="cpfRules"
      label="CPF"
      required
    ></v-text-field>

    <h3>Email</h3>
    <v-text-field background-color="#f8f7f2"
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <h3>Telefone</h3>
    <v-text-field background-color="#f8f7f2"
      v-model="telefone"
      :rules="telefoneRules"
      label="Telefone"
      required
    ></v-text-field>

    <h3>Senha</h3>
    <v-text-field background-color="#f8f7f2"
      v-model="senha"
      :rules="senhaRules"
      label="Senha"
      required
    ></v-text-field>

    <v-select background-color="#f8f7f2" 
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox color="#f8f7f2" 
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      class = "white-label"
      label = "Li e estou de acordo com a política de Privacidade e Confidencialidade"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Enviar Cadastro
    </v-btn>
  </v-form>
      </v-container>

  
  
      </v-container>

  
  
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Nome é obrigatório',
        v => (v && v.length <= 500) || 'Nome precisa ter mais de 10 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail é obrigatório',
        v => /.+@.+\..+/.test(v) || 'E-mail precisa ser válido',
      ],
      telefone: '',
      telefoneRules: [
        v => !!v || 'Telefone é obrigatório',
        v => (v && v.length <= 10) || 'O telefone precisa ter mais de 10 caracteres',
      ],
      senha: '',
      senhaRules: [
        v => !!v || 'Senha é obrigatório',
        v => (v && v.length <= 10) || 'A senha precisa ter mais de 10 caracteres',
      ],
      cpf: '',
      cpfRules: [
        v => !!v || 'CPF é obrigatório',
        v => (v && v.length <= 11) || 'O CPF não é válido',
        v => (v && v.length >= 11) || 'O CPF não é válido',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
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
h3 {
  color: #f8f7f2;

}
.white-label label {
  color: white !important;
}

</style>