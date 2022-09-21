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
            Passo 1
          </h2>
        </v-card-title>
        <v-container class="color2">
          <v-row>
            <v-col
              cols="12"
              md="10"
            >
            O primeiro passo para realizar a doação é, após abrir a página de crianças disponíveis e selecionar a que mais se encaixa com você.
            </v-col>
            <v-col
              class="hidden-sm-and-down text-right"
              md="2"
            >
              <v-icon size="64">

              </v-icon>
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
            Passo 2
          </h2>
          <v-icon
            dark
            size="4"
          >
          </v-icon>
        </v-card-title>
        <v-container class="color2">
          <v-row>
            <v-col
              cols="12"
              md="8"
            >
              Ao selecionar você é redirecionado á página de cadastro de doador, para realizar o cadastro de doador você deve se atentar á preencher seus dados corretamente.
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
            Passo 3
          </h2>
        </v-card-title>
        <v-container class="color2">
          <v-row>
            <v-col
              :key="n"
              cols="12"
              md="4"
            >
            Após juntar suas doações, as empacote de uma forma que não danifique os objetos doados.
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
            Passo 4
          </h2>
          <v-icon
            dark
            size="42"
          >
          </v-icon>
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              class="hidden-sm-and-down"
              md="2"
            >
              <v-icon size="64">
              </v-icon>
            </v-col>
            <v-col
              cols="12"
              md="10"
            >
              Você deve enviar o comprovante de envio como especificado no cadastro.
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
            Passo 5
          </h2>
        </v-card-title>
        <v-container class="color2">
          <v-row>
            <v-col>
              Você deve enviar o comprovante de envio como especificado no cadastro.
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
  background-color: #FFF6EE
}
</style>