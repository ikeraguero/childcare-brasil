<template>
  <v-container class="pa-8 content-align-center">
    <div v-if="!paidFor">
      <h1>Finalize a sua doação de R${{ product.price }}</h1>
      <p>{{ product.description }}</p>
    </div>
    <div v-if="paidFor">
      <h1>Sua doação foi registrada com sucesso!</h1>
    </div>
    <div class="pay p-8" ref="paypal"></div>
  </v-container>
</template>

<script>
export default {
  name: "Hello World",

  data: function () {
    return {
      loaded: false,
      paidFor: false,
      product: {
        price: 100.0,
        description: "teste",
      },
    };
  },
  mounted: function () {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AaIk2-K08izmXx-aWrDAHLE4lRF0et7X1fFaZKbN4GBfM7h5x6H03WszIU6UmWdWU8X7f3Bz_4FXGghH";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function () {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: this.product.price,
                  },
                },
              ],
            });
          },
        })
        .render(this.$refs.paypal);
    },
  },
};
</script>
<style>
.pay {
  background-color: antiquewhite;
}
</style>
