<template>
  <v-container class="pa-8 content-align-center">
    <div class="mt-20 font-medium">
      <h1>Redes Sociais do Childcare Brasil:</h1>
      <div class="icons flex justify-center space-x-24 mt-10 text-base">
        <a href="https://twitter.com" id="twitter"
          ><li>
            <Icon
              icon="entypo-social:twitter"
              color="#fff6ee"
              width="70"
              height="70"
              class="ml-1"
            />
            <div class="color">Twitter</div>
          </li></a
        >
        <a href="https://instagram.com/childcarebr/" id="instagram"
          ><li>
            <Icon
              icon="entypo-social:instagram"
              color="#fff6ee"
              width="70"
              height="70"
              class="ml-2.5"
            />
            <div class="color">Instagram</div>
          </li></a
        >
        <a href="https://facebook.com" id="facebook"
          ><li>
            <Icon
              icon="entypo-social:facebook"
              color="#fff6ee"
              width="70"
              height="70"
              class="ml-1.5"
            />
            <div class="color">Facebook</div>
          </li></a
        >
      </div>
    </div>
    <div class="mt-36">
      Deseja registrar crianças e/ou escolas em nosso site? Entre em contato
      conosco em:
    </div>
    <div class="align-itens-center">
      <u>childcarebrasil@gmail.com</u>
    </div>
  </v-container>
</template>

<script>
import { Icon } from "@iconify/vue2";

export default {
  components: {
    Icon,
  },
};
</script>
<style>
.pa-8 {
  font-size: 26px;
  font-family: "Proxima Nova", system-ui, sans-serif;
  text-align: center;
}

.icons {
  list-style: none;
}

#twitter,
#instagram,
#facebook,
.color,
.pa-8,
a:link {
  color: #fff6ee;
}
</style>
