<template>
  <div class="flex justify-center max-w-3xl mx-auto py-10">
    <div class="w-full h-full">
      <div
        class="pa-8 mb-0 content-align-center"
        id="paypalpayment"
        style="display: none"
      >
        <div class="font-semibold">
          <v-container class="content-align-center">
            <div v-if="paidFor == false">
              <h1 class="test1 mb-0 flex justify-center">Quase lá!</h1>
              <p class="test1 mb-0 flex justify-center">
                Finalize a sua doação para {{ school.name }}
              </p>
              <div class="pay mt-16 bg-antiquewhite" ref="paypal"></div>
            </div>
            <div v-if="paidFor == true">
              <h1>Pagamento realizado com sucesso!</h1>
              <h1>Conclua a doação para finalizar</h1>
            </div>
            <div class="pay mt-16 bg-antiquewhite" ref="paypal"></div>
          </v-container>
        </div>
      </div>
      <div class="pa-8 content-align-center" id="message" style="display: none">
        <div class="font-semibold">Quase lá!</div>
        <div>
          Para completar sua doação para <b>{{ school.name }}</b
          >, envie os materiais informados para o seguinte endereço:
        </div>
        <div class="mt-16 font-medium">
          <i>{{ school.address }}, {{ school.city }}, {{ school.state }}</i>
        </div>
        <div class="mt-24">
          Após isso, envie o comprovante de envio para o email
          childcarebrasil@gmail.com e conclua a doação
        </div>
      </div>
      <div class="test1 mb-0 flex justify-center" id="l3">
        Você está doando para:
      </div>
      <div class="test1 mb-5 flex justify-center font-bold" id="l4">
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
          <label class="block text-white text-sm font-bold mb-0" for="username">
            <div class="test">Doar como:</div>
          </label>
          <select
            class="form-select appearance-none shadow appearance-none font-normal border rounded w-full mt-1.5 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            name="donationdonatortype"
            id="donatortype"
            @click="donatortypebar"
          >
            <option value="0"></option>
            <option value="Pessoa">Pessoa Física</option>
            <option value="Empresa">Empresa</option>
          </select>
          <label
            class="block text-sm font-bold mb-3 mt-3"
            id="person"
            style="display: none"
          >
            <div class="test">CPF</div>
            <input
              maxlength="11"
              placeholder="XXX.XXX.XXX-XX"
              name="donationcpf"
              type="text"
              class="shadow appearance-none font-normal border mt-1.5 rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            />
          </label>
          <label
            class="block text-sm font-bold mb-3 mt-3"
            id="company"
            style="display: none"
          >
            <div class="test">CNPJ</div>
            <input
              maxlength="14"
              placeholder="XX.XXX.XXX/0001-XX"
              name="donationcnpj"
              type="text"
              class="shadow appearance-none font-normal mt-1.5 border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            />
          </label>
          <label class="block text-sm font-bold mb-3 mt-3" id="donator">
            <div class="test">Nome Completo</div>
            <input
              name="donationdonator"
              placeholder="Nome e Sobrenome"
              type="text"
              class="shadow appearance-none font-normal mt-1.5 border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </label>

          <label class="block text-sm font-bold mb-3" id="email">
            <div class="test">Email para contato</div>
            <input
              name="donationemail"
              type="email"
              placeholder="email@contato.com"
              class="shadow appearance-none font-normal mt-1.5 border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </label>

          <label class="block text-sm font-bold mb-3" id="cellphone">
            <div class="test">Telefone para contato</div>
            <input
              name="donationcellphone"
              id="phone"
              maxlength="14"
              placeholder="(DD)XXXXX-XXXX"
              type="text"
              class="shadow appearance-none font-normal mt-1.5 border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </label>
          <label class="block text-white text-sm font-bold mb-0" id="state">
            <div class="test">Estado</div>
          </label>
          <select
            class="form-select appearance-none shadow appearance-none font-normal border rounded w-full mt-1.5 py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            name="donationstate"
            id="state"
          >
            <option v-for="state in states.data" :key="state.index">
              {{ state.name }}
            </option>
          </select>

          <label
            class="block text-sm font-bold mb-3"
            id="donatedto"
            style="display: none"
          >
            <div class="test"></div>
            <input
              name="donationdonatedto"
              type="text"
              v-bind:value="school.name"
              class="shadow appearance-none font-normal mt-1.5 border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </label>
          <label
            class="block text-sm font-bold mb-3"
            id="donatedto"
            style="display: none"
          >
            <div class="test"></div>
            <input
              name="donationstatus"
              type="text"
              value="Pendente"
              class="shadow appearance-none font-normal mt-1.5 border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </label>
          <label
            class="block text-sm font-bold mb-3"
            id="donatedtoid"
            style="display: none"
          >
            <div class="test"></div>
            <input
              name="donationdonatedtoid"
              type="text"
              v-bind:value="school.id"
              class="shadow appearance-none font-normal mt-1.5 border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </label>
          <label class="block text-sm font-bold mb-3 mt-3" id="city">
            <div class="test">Cidade</div>
            <input
              name="donationcity"
              placeholder="Cidade"
              type="text"
              class="shadow appearance-none font-normal mt-1.5 border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </label>
          <label class="block text-sm font-bold mb-3" id="address">
            <div class="test">Endereço</div>
            <input
              name="donationaddress"
              placeholder="Rua, número"
              type="text"
              class="shadow appearance-none font-normal mt-1.5 border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
              required
            />
          </label>
          <label class="block text-sm text-sm font-bold mb-0">
            <div class="test">Tipo de doação</div>
          </label>
          <select
            type="text"
            class="shadow appearance-none font-normal mt-1.5 border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            name="donationtype"
            id="donationtype"
            @click="donationtypebar"
          >
            <option value="0"></option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Material">Material Escolar</option>
          </select>
          <label
            class="block text-sm font-bold mb-3 mt-3"
            id="money"
            style="display: none"
          >
            <div class="test">Valor</div>
            <select
              id="valuemoney"
              placeholder="..."
              name="donationvalue"
              type="text"
              class="shadow appearance-none font-medium mt-1.5 border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            >
              <option value=""></option>
              <option value="0.26">R$1.00</option>
              <option value="2.57">R$10.00</option>
              <option value="7.71">R$30.00</option>
              <option value="12.86">R$50.00</option>
              <option value="25.72">R$100.00</option>
              <option value="64.30">R$250.00</option>
              <option value="257.18">R$1,000.00</option>
            </select>
          </label>
          <label
            class="block text-sm font-bold mb-3 mt-3"
            id="materials"
            style="display: none"
          >
            <div class="test">Materiais</div>
            <input
              placeholder="Caneta, Borracha, Caderno..."
              name="donationmaterials"
              type="text"
              class="shadow appearance-none font-normal mt-1.5 border rounded w-full py-2 px-3 text-black-900 leading-tight focus:outline-none focus:shadow-outline bg-white"
            />
          </label>
        </div>
        <div
          class="flex justify-center mt-6"
          style="display: none"
          id="submitbuttons1"
        >
          <div class="mt-6 flex justify-center">
            <button
              @click="unhideForm1"
              class="bg-white text-[#15393C] font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              type="button"
              value="Voltar"
            >
              Voltar
            </button>
            <input
              class="bg-white text-[#15393C] font-medium px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline"
              type="submit"
              value="Concluir doação"
            />
          </div>
        </div>
        <div
          class="flex justify-center"
          style="display: none"
          id="submitbuttons2"
        >
          <div class="flex justify-center">
            <button
              @click="unhideForm2"
              class="bg-white text-[#15393C] font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              type="button"
              value="Voltar"
            >
              Voltar
            </button>
            <input
              v-if="paidFor == true"
              class="bg-white text-[#15393C] font-medium py-2 px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline"
              type="submit"
              value="Concluir doação"
            />
          </div>
        </div>
      </form>
      <div class="flex justify-center" id="fakesubmit">
        <div class="mt-6 flex justify-center">
          <router-link
            to="/criancas/"
            class="bg-white text-[#15393C] font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
            type="button"
            value="Cancelar"
            >Cancelar</router-link
          >
          <button
            class="bg-white text-[#15393C] font-medium py-2 px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline"
            id="moneypayment"
            @click="hideForm2"
            style="display: none"
          >
            Prosseguir
          </button>
          <button
            class="bg-white text-[#15393C] font-medium py-2 px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline"
            id="materialpayment"
            @click="hideForm1"
            style="display: none"
          >
            Prosseguir
          </button>
          <button
            class="bg-white text-[#15393C] font-medium py-2 px-4 ml-2 rounded cursor-pointer focus:outline-none focus:shadow-outline"
            id="nothing"
            style="display: block"
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
    hideForm1() {
      document.getElementById("form").style.backgroundColor = "transparent";
      document.getElementById("formcomponents").style.display = "none";
      document.getElementById("l3").style.display = "none";
      document.getElementById("l4").style.display = "none";
      document.getElementById("fakesubmit").style.display = "none";
      document.getElementById("submitbuttons1").removeAttribute("style");
      document.getElementById("message").removeAttribute("style");
    },
    unhideForm1() {
      document.getElementById("form").style.backgroundColor = "#FFF6EE";
      document.getElementById("formcomponents").removeAttribute("style");
      document.getElementById("fakesubmit").removeAttribute("style");
      document.getElementById("l3").removeAttribute("style");
      document.getElementById("l4").removeAttribute("style");
      document.getElementById("submitbuttons1").style.display = "none";
      document.getElementById("message").style.display = "none";
    },
    hideForm2() {
      document.getElementById("form").style.backgroundColor = "transparent";
      document.getElementById("formcomponents").style.display = "none";
      document.getElementById("l3").style.display = "none";
      document.getElementById("l4").style.display = "none";
      document.getElementById("fakesubmit").style.display = "none";
      document.getElementById("submitbuttons2").removeAttribute("style");
      document.getElementById("paypalpayment").removeAttribute("style");
    },
    unhideForm2() {
      document.getElementById("form").style.backgroundColor = "#FFF6EE";
      document.getElementById("formcomponents").removeAttribute("style");
      document.getElementById("fakesubmit").removeAttribute("style");
      document.getElementById("l3").removeAttribute("style");
      document.getElementById("l4").removeAttribute("style");
      document.getElementById("submitbuttons2").style.display = "none";
      document.getElementById("paypalpayment").style.display = "none";
    },
  },
};
</script>

<style scoped>
.test {
  color: #621200;
  font-size: 17px;
}
.test1 {
  color: #fff6ee;
  font-family: "Proxima Nova", system-ui, sans-serif;
  font-size: 26px;
}

select:hover {
  cursor: pointer;
}

.pa-8 {
  color: #fff6ee;
  font-size: 26px;
  font-family: "Proxima Nova", system-ui, sans-serif;
  text-align: center;
}

form {
  background-color: #fff6ee;
}
.block {
  color: #621200;
}

#donator,
#city,
#address,
#person,
#company,
#email,
#cellphone,
#valuemoney,
#materials {
  color: black;
}
</style>
