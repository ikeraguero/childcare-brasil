<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      color="#FFF6EE"
      fill-dot
      right
      small
    >
      <v-card>
        <v-card-title class="color">
          <v-icon
            dark
            size="42"
            class="mr-4"
          >
          </v-icon>
          <h2 class="text-h4 white--text font-weight-light">


            <div class="steps font-semibold text-center">Passo 1</div>
          </h2>
        </v-card-title>
        <v-container class="color2 font-semibold">
          <v-row class="mb-2 mt-2">
            
            Abra a página de crianças/escolas disponíveis e selecionar a que mais se encaixa com você.
            
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="#FFF6EE"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="color">
          <h2 class="text-h4 mr-4 white--text font-weight-light">




            <div class="steps font-semibold">Passo 2</div>
          </h2>
          <v-icon
            dark
            size="4"
          >
          </v-icon>
        </v-card-title>
        <v-container class="color2 font-semibold">
          <v-row class="mb-2 mt-2">
              Ao selecionar você é redirecionado á página de cadastro de doador, para realizar o cadastro de doador você deve se atentar á preencher seus dados corretamente.
            
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="#FFF6EE"
      fill-dot
      right
      small
    >
      <v-card>
        <v-card-title class="color">
          <h2 class="text-h4 mr-4 white--text font-weight-light">




            <div class="steps font-semibold">Passo 3</div>
          </h2>
          <v-icon
            dark
            size="4"
          >
          </v-icon>
        </v-card-title>
        <v-container class="color2 font-semibold">
          <v-row class="mb-2 mt-2">
            <v-col>
              Em caso de doação de materiais, junte suas doações, as empacote de uma forma que não danifique os objetos doados.
            </v-col>

          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="#FFF6EE"
      fill-dot
      left
      small
    >
      <v-card>
        <v-card-title class="color">
          <h2 class="text-h4 mr-4 white--text font-weight-light">



            <div class="steps font-semibold">Passo 4</div>
          </h2>
          <v-icon
            dark

          >
          </v-icon>
        </v-card-title>
        <v-container class="color2 font-semibold">
          <v-row class="mb-2 mt-2">
              <v-col>
                Você deve enviar o comprovante de envio por email como especificado no cadastro.
              </v-col>

          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      color="#FFF6EE"
      fill-dot
      right
      small
    >
      <v-card>
        <v-card-title class="color">
          <v-icon
            class="mr-4"
            dark
            size="42"
          >
          </v-icon>
          <h2 class="text-h4 white--text font-weight-light">




            <div class="steps font-semibold">Passo 5</div>
          </h2>
        </v-card-title>
        <v-container class="color2 font-semibold">
          <v-row class="mb-2 mt-2">
            <v-col>
              Ao receber o comprovante, nossa equipe confirma que a doação e o envio foram realizados corretamente.
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-timeline-item>
  </v-timeline>



</template>

<script>
  export default {
    data: () => ({
      items: [  
      ],
    }),
  }
</script>

<style>

.color{
  background-color: #621200
}

.color2{
  background-color: #FFF6EE;
  font-family: "Proxima Nova", system-ui, sans-serif;
  text-align: center;
  color:#621200;
}

.steps {
  font-family: "Proxima Nova", system-ui, sans-serif;
  justify-content: center;
  text-align: center;
  color: #FFF6EE;
}
</style>