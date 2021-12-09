<template>
  <v-container class="fundo" fill-height fluid text-center>
    <v-container>
      <v-row>
        <v-col
          class="primary--text text-center mx-auto pb-4"
          cols="1"
          sm="4"
          offset="4"
          ><h1 class="titulo">Login</h1></v-col
        >
      </v-row>
      <v-row class="elavation-3 mx-auto">
        <v-col cols="auto">
          <v-img max-height="150" max-width="250"></v-img>
        </v-col>
        <v-col>
          <v-form>
            <v-text-field
              dark
              class="text-white"
              color="#f8f8f2"
              label="Email"
              v-model="user.email"
            ></v-text-field>
            <v-text-field
              dark
              class="text-white"
              color="#f8f8f2"
              label="Senha"
              v-model="user.password"
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show = !show"
            ></v-text-field>
            <v-btn color="#f8f8f2" @click="login">Login</v-btn>
            <v-btn class="ml-2" color="red" @click="reset">Cancelar</v-btn>
            <v-btn class="ml-2" @click="loginGoogle"
              >Login com <v-icon>mdi-google</v-icon></v-btn
            >
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar color="red" v-model="errorLogin" danger timeout="2000">
      Usuário ou senha inválidos
    </v-snackbar>
  </v-container>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export default {
  data() {
    return {
      user: {},
      show: false,
      errorLogin: false,
    };
  },
  methods: {
    reset() {
      this.user = {};
    },
    loginGoogle() {
      const provider = new GoogleAuthProvider();

      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then(() => {
          this.$router.push({ name: "Home" });

          // // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // // The signed-in user info.
          // const user = result.user;
          // // ...
        })
        .catch(() => {
          this.errorLogin = true;
          // ...
        });
    },
    login() {
      const auth = getAuth();

      signInWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then((userCredential) => {
          console.log(userCredential);
          this.$router.push({ name: "Home" });
          // const user = userCredential.user;
        })
        .catch((error) => {
          if (error.code === "auth/user-not-found") {
            createUserWithEmailAndPassword(
              auth,
              this.user.email,
              this.user.password
            );
            this.$router.push({ name: "Home" });
          }
          this.errorLogin = true;
        });
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

.fundo {
  background-color: #728b88;
}

.text-white input {
  color: #f8f7f2 !important;
}

#text-white input {
  color: #f8f7f2 !important;
}
</style>