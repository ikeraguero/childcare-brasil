<template>
  <div class="flex justify-center mx-auto py-10 content-align-center">
    <div class="w-11/12 h-full">
      <div class="container-wrapper flex pa-8 mb-0 justify-center">
        <div class="font-semibold">
          <v-container
            class="content-align-center"
            v-if="paidFor == false"
            id="paypalpayment"
            style="display: none"
          >
            <div>
              <h1 class="section-title mb-0 flex justify-center">Quase lá!</h1>
              <p class="section-subtitle mb-0 flex justify-center">
                Finalize a sua doação!
              </p>
            </div>
            <div>
              <div class="pay mt-16 bg-antiquewhite" ref="paypal"></div>
            </div>
          </v-container>
          <v-container>
            <div v-if="paidFor == true">
              <div>
                <h1 class="section-title">Pagamento realizado com sucesso!</h1>
                <h1 class="section-subtitle">
                  Conclua a doação para finalizar
                </h1>
              </div>
            </div>
          </v-container>
        </div>
      </div>

      <div class="section-title mb-0 flex justify-center" id="l3">
        Você está doando para:
      </div>
      <div
        class="section-subtitle text-center mb-5 flex justify-center font-bold"
        id="l4"
      >
        {{ school.name }}
      </div>
      <form
        class="rounded px-8 pt-16 pb-16 mb-0 mt-8"
        action="https://childcare-brasil.vercel.app/api/donationadd"
        method="post"
        id="form"
        style="display: block"
      >
        <div id="formcomponents">
          <label
            class="block text-white text-sm font-bold mb-1"
            for="donationdonatortype"
          >
            Tipo de Doador
          </label>
          <select
            class="form-select appearance-none shadow appearance-none font-normal border rounded-2xl w-full mt-1.5 py-3 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            name="donationdonatortype"
            id="donatortype"
            @click="donatortypebar"
          >
            <option value="0"></option>
            <option value="Pessoa">Pessoa Física</option>
            <option value="Empresa">Pessoa Jurídica</option>
          </select>
          <div id="person" style="display: none">
            <label
              class="cpf-label block text-white text-sm font-bold mb-1 mt-6"
            >
              CPF</label
            >
            <input
              maxlength="11"
              placeholder="XXX.XXX.XXX-XX"
              name="donationcpf"
              type="text"
              class="shadow appearance-none font-normal border mt-1.5 rounded-2xl w-full py-3 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            />
          </div>
          <div id="company" style="display: none">
            <label
              class="cnpj-label block text-white text-sm font-bold mb-1 mt-6"
            >
              CNPJ</label
            >
            <input
              maxlength="14"
              placeholder="XX.XXX.XXX/0001-XX"
              name="donationcnpj"
              type="text"
              class="shadow appearance-none font-normal mt-1.5 border rounded-2xl w-full py-3 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            />
          </div>

          <label
            class="block text-white text-sm font-bold mb-1 mt-6"
            id="donator"
          >
            Nome Completo
          </label>
          <input
            name="donationdonator"
            placeholder="Nome e Sobrenome"
            type="text"
            class="shadow appearance-none font-normal mt-1.5 border rounded-2xl w-full py-3 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            required
          />

          <label
            class="block text-white text-sm font-bold mb-1 mt-6"
            id="email"
          >
            Email</label
          >
          <input
            name="donationemail"
            type="email"
            placeholder="email@contato.com"
            class="shadow appearance-none font-normal mt-1.5 border rounded-2xl w-full py-3 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            required
          />

          <label
            class="block text-white text-sm font-bold mb-1 mt-6"
            id="cellphone"
          >
            Telefone</label
          >
          <input
            name="donationcellphone"
            id="phone"
            maxlength="14"
            placeholder="(DD)XXXXX-XXXX"
            type="text"
            class="shadow appearance-none font-normal mt-1.5 border rounded-2xl w-full py-3 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            required
          />
          <label
            class="block text-white text-sm font-bold mb-1 mt-6"
            id="state"
          >
            <div class="background"></div>
            Estado
          </label>
          <select
            class="form-select appearance-none shadow appearance-none border font-normal rounded-2xl w-full mt-1.5 py-3 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            name="donationstate"
          >
            <option v-for="state in states.data" :key="state.index">
              {{ state.name }}
            </option>
          </select>
          <label
            class="block text-sm font-bold mb-1"
            id="donatedto"
            style="display: none"
          >
            <input
              name="donationdonatedto"
              type="text"
              v-bind:value="school.name"
              class="shadow appearance-none font-normal mt-1.5 border rounded-2xl w-full py-3 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </label>
          <label
            class="block text-sm font-bold mb-1"
            id="donatedto"
            style="display: none"
          >
            <input
              name="donationstatus"
              type="text"
              value="Pendente"
              class="shadow appearance-none font-normal mt-1.5 border rounded-2xl w-full py-3 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </label>
          <label
            class="block text-sm font-bold mb-1"
            id="donatedto"
            style="display: none"
          >
            <input
              name="donationtype"
              type="text"
              value="Dinheiro"
              class="shadow appearance-none font-normal mt-1.5 border rounded-2xl w-full py-3 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </label>
          <label
            class="block text-sm font-bold mb-1"
            id="donatedtoid"
            style="display: none"
          >
            <input
              name="donationdonatedtoid"
              type="text"
              v-bind:value="school.id"
              class="shadow appearance-none font-normal mt-1.5 border rounded-2xl w-full py-3 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </label>
          <label class="block text-white text-sm font-bold mb-1 mt-6" id="city">
            Cidade</label
          >
          <input
            name="donationcity"
            placeholder="Cidade"
            type="text"
            class="shadow appearance-none font-normal mt-1.5 border rounded-2xl w-full py-3 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            required
          />
          <label
            class="block text-white text-sm font-bold mb-1 mt-6"
            id="address"
          >
            Endereço</label
          >
          <input
            name="donationaddress"
            placeholder="Rua, número"
            type="text"
            class="shadow appearance-none font-normal mt-1.5 border rounded-2xl w-full py-3 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            required
          />

          <label
            class="block text-white text-sm font-bold mb-1 mt-6"
            id="money"
          >
            Valor
          </label>
          <select
            id="valuemoney"
            placeholder="..."
            name="donationvalue"
            type="text"
            class="shadow appearance-none font-medium mt-1.5 border rounded-2xl w-full py-3 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
          >
            <option value="0.26">R$1.00</option>
            <option value="2.57">R$10.00</option>
            <option value="7.71">R$30.00</option>
            <option value="12.86">R$50.00</option>
            <option value="25.72">R$100.00</option>
            <option value="64.30">R$250.00</option>
            <option value="257.18">R$1,000.00</option>
          </select>
        </div>
        <div
          class="flex justify-center mt-6"
          style="display: none"
          id="submitbuttons1"
        >
          <div class="mt-6 flex justify-center">
            <input
              class="donation-btn bg-white font-medium px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline"
              type="submit"
              value="Concluir doação"
            />
          </div>
        </div>
        <div class="flex justify-center" id="submitbuttons2">
          <div class="flex justify-center" v-if="paidFor == true">
            <button
              class="donation-btn bg-white font-medium py-2 px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline"
              type="submit"
              value="Concluir doação"
            >
              Concluir doação
            </button>
          </div>
        </div>
      </form>
      <div class="flex justify-center" id="fakesubmit">
        <div class="mt-6 flex justify-center gap-5">
          <router-link
            to="/escolas/"
            class="donation-btn"
            type="button"
            value="Cancelar"
            >Cancelar</router-link
          >
          <button
            class="donation-btn text-white"
            id="moneypayment"
            @click="toggleForm(true, 'submitbuttons2', 'paypalpayment')"
            style="display: block"
          >
            Prosseguir
          </button>
          <button
            class="bg-white font-medium py-2 px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline"
            id="nothing"
            style="display: none"
          >
            Prosseguir
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  data() {
    return {
      states: [],
      school: [],
      showControls: true,
      loading: false,
      paidFor: false,
      product: {
        price: 1,
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

    axios
      .get("https://childcare-brasil.vercel.app/api/states")
      .then((response) => (this.states = response));
    axios
      .get(
        "https://childcare-brasil.vercel.app/api/school/" +
          this.$route.params.id
      )
      .then((response) => {
        this.school = response.data;
      });
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
                    value: document.getElementById("valuemoney").value,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            console.log(order);
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(this.$refs.paypal);
    },

    left() {
      document.getElementById("container").scrollLeft -= 320;
    },
    right() {
      document.getElementById("container").scrollLeft += 320;
    },
    age(age) {
      if (age > 1) {
        return "Anos";
      } else {
        return "Ano";
      }
    },

    donationtypebar() {
      if (document.getElementById("donationtype").value == "Dinheiro") {
        document.getElementById("nothing").style.display = "none";
        document.getElementById("money").removeAttribute("style");
        document.getElementById("materials").style.display = "none";
        document.getElementById("moneypayment").removeAttribute("style");
        document.getElementById("materialpayment").style.display = "none";
      } else {
        document.getElementById("money").style.display = "none";
        document.getElementById("moneypayment").style.display = "none";
        document.getElementById("nothing").style.display = "block";

        if (document.getElementById("donationtype").value == "Material") {
          document.getElementById("nothing").style.display = "none";
          document.getElementById("materials").removeAttribute("style");
          document.getElementById("money").style.display = "none";
          document.getElementById("materialpayment").removeAttribute("style");
          document.getElementById("moneypayment").style.display = "none";
        } else {
          document.getElementById("materials").style.display = "none";
          document.getElementById("materialpayment").style.display = "none";
          document.getElementById("nothing").style.display = "block";
        }
      }
    },
    donatortypebar() {
      if (document.getElementById("donatortype").value == "Pessoa") {
        document.getElementById("person").removeAttribute("style");
        document.getElementById("company").style.display = "none";
      } else {
        document.getElementById("person").style.display = "none";

        if (document.getElementById("donatortype").value == "Empresa") {
          document.getElementById("company").removeAttribute("style");
          document.getElementById("person").style.display = "none";
        } else {
          document.getElementById("company").style.display = "none";
        }
      }
    },
    toggleForm(hide, buttonId, paymentId) {
      document.getElementById("form").style.backgroundColor = hide
        ? "transparent"
        : "#743d31";
      document.getElementById("formcomponents").style.display = hide
        ? "none"
        : "";
      document.getElementById("l3").style.display = hide ? "none" : "";
      document.getElementById("l4").style.display = hide ? "none" : "";
      document.getElementById("fakesubmit").style.display = hide ? "none" : "";

      if (hide) {
        document.getElementById(buttonId).removeAttribute("style");
        document.getElementById(paymentId).removeAttribute("style");
      } else {
        document.getElementById(buttonId).style.display = "none";
        document.getElementById(paymentId).style.display = "none";
      }
    },
  },
};
</script>

<style scoped>
label {
  color: #fff6ee;
  font-size: 1.7rem;
  margin-top: 2rem;
  padding: 0;
  margin: 0;
}

select:hover {
  cursor: pointer;
}

.container-wrapper {
  color: #fff6ee;
  font-size: 2.6rem;
  text-align: center;
}

form {
  background-color: #743d31;
}

input,
select {
  margin-top: 0.2rem;
}

.back-btn {
  font-size: 1.8rem;
}

.donation-btn {
  background-color: #743d31;
  color: #ffff;
}

.invisible {
  display: none;
}

@media (max-width: 36em) {
  .container {
    width: 100rem !important;
  }
}
</style>
