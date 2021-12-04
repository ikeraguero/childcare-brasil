<template class="teste">
  <v-container class="pa-8" id="teste">
    <h1 class="titulo">Formulário de Adoção</h1>
        <v-form>
      <v-container>
        <h1 class="text-form">Informações Iniciais</h1>

        <v-text-field
        dark
          class="text-white"
          color="white"
          label="NOME COMPLETO:"
          v-model="nome"
        ></v-text-field>



        <v-text-field
        dark
          class="text-white"
          color="#f8f8f2"
          label="CPF:"
          v-model="cpf"
        ></v-text-field>

        <v-text-field
            dark
            class="text-white"
            color="#f8f8f2"
            label="E-MAIL:"
            v-model="email"
        ></v-text-field>

        <v-text-field
            dark
            class="text-white"
            color="#f8f8f2"
            label="TELEFONE:"
            v-model="email"
        ></v-text-field>

        <v-text-field
            dark
            class="text-white"
            color="#f8f8f2"
            label="IDADE:"
            v-model="email"
        ></v-text-field>

        <v-text-field
            dark
            class="text-white"
            color="#f8f8f2"
            label="PROFISSÃO:"
            v-model="email"
        ></v-text-field>
        
            <br>
            
            <div class="">
                <p class="p">JÁ ADOTOU ALGUM ANIMAL ANTES?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Sim"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Não"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>                
            </div>
            <br>        
        
        <h1 class="text-form">Dados de Endereço</h1>

    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="10"
        >
          <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="ENDEREÇO"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="2"
        >
          <v-text-field
          dark
            v-model="lastname"
            :rules="nameRules"
            label="NÚMERO"
            required
          ></v-text-field>
        </v-col>

      </v-row>
        <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="COMPLEMENTO"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
          dark
            v-model="lastname"
            :rules="nameRules"
            label="BAIRRO"
            required
          ></v-text-field>
          </v-col>

          <v-col
          cols="12"
          md="4"
        >
          <v-text-field
          dark
            v-model="lastname"
            :rules="nameRules"
            label="CEP"
            required
          ></v-text-field>
          <br>
          <div class="">
                <p class="p">QUAL O TIPO DE CASA?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Residencial"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Comercial"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="República/Pensão"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>                
            </div>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="CIDADE"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
          dark
            v-model="lastname"
            :rules="nameRules"
            label="ESTADO"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <br>
      <v-text-field
        dark
          class="text-white"
          color="white"
          label="POR QUE VOCÊ DESEJA ADOTAR UM ANIMAL?"
          v-model="nome"
        ></v-text-field>
        </v-container>

    <h1 class="text-form">Sobre sua casa</h1>
    <br>
            
    <div class="">
                <p class="p">SE É ALUGADA, O PROPRIETÁRIO PERMITE ANIMAIS?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Sim"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Não"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Não sei"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>                
            <v-checkbox
              dark
              v-model="ex4"
              label="Minha casa é propria"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox> 
            </div>   

            <br>            
            
            <div class="">
            <p class="p">VOCÊ MORA EM:</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Casa aberta (o gatinho poderá entrar e sair livremente para passear)"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Casa fechada (não vou deixar meu gato sair)"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Casa de condomínio"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Apartamento com telas"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Apartamento sem telas"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Apartamento tipo cobertura com telas "
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Apartamento tipo cobertura sem telas "
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Apartamento no andar térreo com área externa (quintal)"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>   

            <v-checkbox
              dark
              v-model="ex4"
              label="Apartamento no andar térreo sem área externa (quintal)"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            </div>
            <br>
            
            <div class="">
            <p class="p">SE VOCÊ ASSINALOU <u>"APARTAMENTO COM TELAS"</u>, RESPONDA:</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Todas as janelas/sacadas/vitrôs e basculantes têm tela, sem exceção"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Não tenho telas em todas as janelas/sacadas/vitrôs/basculantes, somente onde o gato irá circular"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Só não tenho telas nas janelas basculantes/vitrôs"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Não tenho telas nas janelas basculantes/vitrôs, mas possuo correntes limitadoras de abertura"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            </div>
            <br>
            <h1 class="text-form">Seus animais</h1>
            <br>
            <div class="">
            <p class="p">TEM OU TEVE ANIMAIS DE ESTIMAÇÃO?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Sim"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Não"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            </div>
            <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="SE JÁ TEVE, O QUE ACONTECEU COM ELE(S)?"
            required
          ></v-text-field>
          <br>
          <h1 class="text-form">Adoção</h1>
          <br>
           <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="HÁ QUANTO TEMPO VOCÊ PLANEJA ESSA ADOÇÃO?"
            required
          ></v-text-field>
          <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="TODAS AS PESSOAS QUE MORAM COM VOCÊ CONCORDAM COM A ADOÇÃO?"
            required
          ></v-text-field>
          <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="QUEM CUIDARÁ DO ANIMAL QUANDO VOCÊ FOR VIAJAR DE FÉRIAS OU A TRABALHO?"
            required
          ></v-text-field>

          <br>

          <div class="">
            <p class="p">VOCÊ TERÁ CONDIÇÕES DE ACRESCENTAR NO SEU ORÇAMENTO OS GASTOS QUE TERÁ COM ALIMENTAÇÃO DE BOA QUALIDADE (APROX. R$100 POR MÊS), VACINAS E ATENDIMENTO VETERINÁRIO (APROX. R$200 POR ANO)?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Sim"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Não"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            </div>

            <br>

            <div class="">
            <p class="p">ALGUÉM EM CASA POSSUI ALERGIA A PELOS?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Sim"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Não"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Não sei"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            </div>
            <br>
            <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="O QUE VOCÊ FARÁ SE DESCOBRIR QUE É ALÉRGICO?"
            required
          ></v-text-field>
          <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="O QUE VOCÊ FARÁ SE DESCOBRIR QUE SEU FILHO É ALÉRGICO?"
            required
          ></v-text-field>
          <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="O QUE FARÁ SE VOCÊ COMEÇAR A SE RELACIONAR COM UMA PESSOA ALÉRGICA OU QUE NÃO GOSTE DE ANIMAIS?"
            required
          ></v-text-field>
          <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="O QUE FARÁ COM O ANIMAL SE ALGUÉM NA CASA ENGRAVIDAR?"
            required
          ></v-text-field>
          <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="O QUE FARÁ SE O ANIMAL ARRANHAR OU MORDER SEU FILHO?"
            required
          ></v-text-field>
          <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="O QUE FARÁ SE O ANIMAL FUGIR?"
            required
          ></v-text-field>
          <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="O QUE FARÁ SE NÃO PUDER MAIS CUIDAR DO ANIMAL?"
            required
          ></v-text-field>
          <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="O QUE FARÁ SE TIVER QUE MUDAR DE CIDADE OU PAÍS?"
            required
          ></v-text-field>
          <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="QUAIS MOTIVOS FARIAM VOCÊ DEVOLVER O ANIMAL?"
            required
          ></v-text-field>
          <br>
          <div class="">
            <p class="p">SE VOCÊ JÁ POSSUI UM ANIMAL E ESTÁ ADOTANDO UM NOVO, ESTÁ CIENTE QUE SERÁ NECESSÁRIA UMA ADAPTAÇÃO QUE PODE LEVAR DE 10 DIAS A 1 ANO DEPENDENDO DA PERSONALIDADE DE AMBOS?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Sim"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Não"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            </div>
            <br>
            <div class="">
            <p class="p">SE VOCÊ RESPONDEU "SIM" PARA A PERGUNTA ACIMA, TEM UM CÔMODO SEPARADO EM CASA CASO SEJA NECESSÁRIO SEPARÁ-LOS NO COMEÇO?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Sim"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Não"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            </div>
            <br>
            <div class="">
            <p class="p">ALGUNS ANIMAIS PODEM VIVER ATÉ QUASE 20 ANOS, VOCÊ ESTÁ PRONTO PARA ASSUMIR ESSE COMPROMISSO?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Sim"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Não"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            </div>
            <br>
            <div class="">
            <p class="p">VOCÊ ESTÁ CIENTE QUE, EM QUALQUER FASE DA VIDA, O GATO QUE VOCÊ ESTÁ ADOTANDO PODE ADOECER OU DESENVOLVER ALGUM PROBLEMA CRÔNICO DE SAÚDE, E COM PRECISAR DE CONSULTAS VETERINÁRIAS, EXAMES PERIÓDICOS, REMÉDIOS E POSSIVELMENTE INTERNAÇÃO? VOCÊ ESTÁ CIENTE QUE PODE TER UM CUSTO VARIÁVEL E ESTÁ FINANCEIRAMENTE PREPARADO PARA ASSUMIR ESSE COMPROMISSO?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Sim"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            
            <v-checkbox
              dark
              v-model="ex4"
              label="Não"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            </div>
            <br>
            <h1 class="text-form">Condições: você concorda...</h1>
            <br>
            <div class="">
            <p class="p">... QUE SUA CASA SEJA VISTORIADA PARA AVERIGUAÇÃO DAS RESPOSTAS ACIMA?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Sim"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            
            <v-checkbox
              dark
              v-model="ex4"
              label="Não"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            </div>
            <br>
            
            <div class="">
            <p class="p">... EM NOS DEVOLVER O ANIMAL SE POR QUALQUER MOTIVO NÃO PUDER CONTINUAR COM ELE?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Sim"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            
            <v-checkbox
              dark
              v-model="ex4"
              label="Não"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            </div>
            <br>
            
            <div class="">
            <p class="p">... A NÃO REPASSAR O ANIMAL A NINGUÉM SEM ANTES NOS CONSULTAR?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Sim"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            
            <v-checkbox
              dark
              v-model="ex4"
              label="Não"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            </div>
            <br>
            
            <div class="">
            <p class="p">... EM NOS AVISAR CASO TROQUE DE ENDEREÇO, TELEFONE, ETC?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Sim"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            
            <v-checkbox
              dark
              v-model="ex4"
              label="Não"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            </div>
            <br>
            
            <div class="">
            <p class="p">... EM ASSINAR UM CONTRATO DE ADOÇÃO NO ATO DA ENTREGA, SE RESPONSABILIZANDO PELOS CUIDADOS COM O ANIMAL E SUA SEGURANÇA?</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Sim"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            
            <v-checkbox
              dark
              v-model="ex4"
              label="Não"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>
            </div>
            <br>
            <h1 class="text-form">Comentários</h1>
            <v-text-field
          dark
            v-model="firstname"
            :rules="nameRules"
            label="ESCREVA NESTE ESPAÇO TUDO O QUE JULGAR NECESSÁRIO, INCLUSIVE QUALQUER DÚVIDA QUE VOCÊ TIVER SOBRE A ADOÇÃO:"
            required
          ></v-text-field>
          <br>
          <div class="">
            <p class="p">COMO VOCÊ CONHECEU A ANIMIGOS?:</p>
            <v-checkbox
              dark
              v-model="ex4"
              label="Indicação de amigos e familiares"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Indicação de veterinários"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Pelo Facebook"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Pelo Twitter"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Pelo Instagram"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Por matérias em jornais, revistas, rádio e TV"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Por sites de busca "
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>

            <v-checkbox
              dark
              v-model="ex4"
              label="Outros"
              color="#F8F8F2"
              value="red"
              hide-details
            ></v-checkbox>   
            </div>
            <br>
            <p class="p">IMPORTANTE: Abandonar, soltar, deixar fugir, não alimentar, acorrentar, bater, amedrontar e deixar acasalar indiscriminadamente são formas de maus tratos com pena prevista na lei. O Adote um Gatinho atuará conforme artigo 164 do Código Penal, artigo 32 da Lei Federal 9.605, de 12 de fevereiro de 1998 (Lei de Crimes Ambientais), e da Lei Municipal 13.131, de 18 de maio de 2001 (Lei de Posse Responsável), contra qualquer um que descumpra as determinações previstas, sejam estes adotantes ou não. Em caso de dúvidas, busque informações e auxílios de profissionais veterinários e nunca de curiosos ou da internet.:</p>

          


          



      
            <br> <br>
        <v-btn color="#f8f8f2">ENVIAR</v-btn>

      </v-container>
    </v-form>
  </v-container>
  
</template>

<script>
export default {

}
</script>

<style>

.texto{
  color: #f8f7f2;
  font-family: 'Cardo';
  font-size: 25px;
  text-align: justify; 
}
.titulo {
  text-align: center;
  font-family: 'Reenie Beanie', cursive;
  font-size: 80px;
  color: #f8f7f2;
}

p {
    color: #f8f8f2;
}
</style>