<template>
  <v-container class="pa-8" fluid>
    <h1 class="titulo">Meu perfil</h1>
    <v-form>
      <v-container>
        <v-text-field
          dark
          class="text-white"
          color="white"
          label="Nome:"
          v-model="usuario.nome"
        ></v-text-field>

        <v-text-field
          dark
          class="text-white"
          color="#f8f8f2"
          label="Sobrenome:"
          v-model="usuario.sobrenome"
        ></v-text-field>

        <v-text-field
          dark
          class="text-white"
          color="#f8f8f2"
          label="Telefone:"
          v-model="usuario.telefone"
        ></v-text-field>

        <v-text-field
          dark
          class="text-white"
          color="#f8f8f2"
          label="CPF:"
          v-model="usuario.cpf"
        ></v-text-field>

        <v-text-field
          dark
          class="text-white"
          color="#f8f8f2"
          label="E-mail:"
          v-model="usuario.email"
        ></v-text-field>

        <!-- <v-text-field
        dark
          class="text-white"
          color="#f8f8f2"
          label="Senha:"
          v-model="usuario.senha"
        ></v-text-field> -->

        <v-btn color="#f8f8f2" @click="salvarPerfil">Salvar</v-btn>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
const db = getFirestore();
import { getAuth } from "firebase/auth";
const auth = getAuth()

export default {
  data() {
    return {
      usuario: {},
    };
  },
  async created() {
      const uid = auth.currentUser.uid
      const perfisRef = collection(db, "perfis")
      const q = query(perfisRef, where("uid", "==", uid));

      const meuPerfil = await getDocs(q);
      meuPerfil.forEach((doc) => {
        this.usuario = {...doc.data()}
        // Object.assign(this.usuario, doc.data())
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data());
});

  },
  methods: {
    async salvarPerfil() {
      const uid = auth.currentUser.uid
      try {
        const docRef = await addDoc(collection(db, "perfis"), {
          ...this.usuario,
          uid
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>

<style>
.titulo {
  text-align: center;
  font-family: "Reenie Beanie", cursive;
  font-size: 80px;
  color: #f8f7f2;
}

.text-white input {
  color: #f8f7f2 !important;
}
</style>