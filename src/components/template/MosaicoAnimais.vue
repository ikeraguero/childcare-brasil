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
               "https://upload.wikimedia.org/wikipedia/commons/4/43/Pas_entre_tallers_Llotja_Sant_Andreu.JPG",

               "https://nova-escola-producao.s3.amazonaws.com/tunxSkGu84NNEkscfMQUVeRzZD62xuejkA7ZhCD79kyDMjHzpWW2b7MgT62N/menina-faz-exercicio-no-caderno-na-escola.jpg",

               "https://vejaconstrucoes.com.br/wp-content/uploads/2020/09/escola-no-bairro-gloria-joinville-hans-muller.jpg",

               "https://assets-global.website-files.com/61155c49f7b752051f9f05b0/613a5a222251daa01457b003_engajar%20alunos.jpg",

                "https://www.educacao.sp.gov.br/wp-content/uploads/2018/01/galeria7-4-700x480.jpg",

               "https://s2.glbimg.com/dzeSuxMCWpnB5HuwwAjPVxnOkcY=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/U/m/g5y7cARJKR9EXqcnGG2A/alunos.jpg",

               "https://upload.wikimedia.org/wikipedia/commons/8/80/Fachada_da_Escola_Estadual_Alberto_Giovannini%2C_Coronel_Fabriciano_MG.JPG",

               "https://www.provafacilnaweb.com.br/wp-content/uploads/2014/08/Banners-blogpost-Wordpress-14.png",

               "https://estado.rs.gov.br/upload/recortes/201706/22164124_234791_GDO.jpg" 
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