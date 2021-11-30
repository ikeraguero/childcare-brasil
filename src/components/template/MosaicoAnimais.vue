<template>
  <v-row>
    <item-mosaico v-for="(imagem, i) in imagens" :key="i" :imagem="imagem" />

  </v-row>
</template>

<script>
import ItemMosaico from './ItemMosaico.vue'
export default {
    components: { ItemMosaico },
    data() {
        return {
            imagens: [
               "https://super.abril.com.br/wp-content/uploads/2018/05/filhotes-de-cachorro-alcanc3a7am-o-c3a1pice-de-fofura-com-8-semanas1.png?w=1024",

               "https://www.dicaspetz.com.br/wp-content/uploads/2017/04/comportamento-dos-gatos-1.jpg",

               "https://www.dicaspetz.com.br/wp-content/uploads/2019/08/cachorro-pode-comer-racao-de-gato-pet.jpg",

               "https://media-manager.noticiasaominuto.com/1920/1597688948/naom_5cacad8def7ed.jpg?crop_params=eyJsYW5kc2NhcGUiOnsiY3JvcFdpZHRoIjozNzI4LCJjcm9wSGVpZ2h0IjoyMDk4LCJjcm9wWCI6MCwiY3JvcFkiOjY2fSwicG9ydHJhaXQiOnsiY3JvcFdpZHRoIjoxNDkxLCJjcm9wSGVpZ2h0IjoyNjU0LCJjcm9wWCI6Njg3LCJjcm9wWSI6MTV9fQ==",

                "https://cdn.noticias.ambientebrasil.com.br/wp-content/uploads/2021/03/imagem_de_um_cachorro.png",

               "https://socientifica.com.br/wp-content/uploads/2020/12/cat-2068462_1280-scaled.jpg",

               "https://blog.cobasi.com.br/wp-content/uploads/2021/07/cheiro-que-cachorro-nao-gosta-topo.png",

               "https://www.plazahoteis.com.br/wp-content/uploads/2019/08/cuidados-gatos-adultos-ago19.jpg",

               "https://matsudapet.com.br/blog/wp-content/uploads/2019/08/shutterstock_559799125-compressed.jpg" 
            ]
        }
    }
}
</script>

<style>

.imgAnimais {
    margin: 0;
    padding: 5px !important;
}

</style>