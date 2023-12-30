<template>
  <div class="container">
    <div class="section-header">
      <div class="section-title">COMO DOAR</div>
      <div class="section-subtitle">
        Passo a passo para realizar a sua doação!
      </div>
    </div>
    <div class="step-by-step grid grid--2-cols">
      <div class="grid-photo">
        <img src="../assets/imagens/mock-1.png" alt="" />
      </div>
      <div class="grid-text">
        <div class="text-content">
          <div class="number">01</div>
          <div class="title">Tela inicial</div>
          <div class="instructions">
            Em nossa tela inicial, selecione se deseja doar para escolas ou
            crianças!
          </div>
        </div>
      </div>
      <div class="grid-text">
        <div class="text-content">
          <div class="number">02</div>
          <div class="title">Tela de doação</div>
          <div class="instructions">
            Na tela de doação, você deve selecionar a criança/escola para qual
            deseja doar.
          </div>
        </div>
      </div>
      <div class="grid-photo">
        <img src="../assets/imagens/mock-6.png" alt="" />
      </div>
      <div class="grid-photo">
        <img src="../assets/imagens/mock-2.png" alt="" />
      </div>
      <div class="grid-text">
        <div class="text-content">
          <div class="number">03</div>
          <div class="title">Formulario de doação</div>
          <div class="instructions">
            Após selecionar a opção desejada, o formulário deve ser preenchido
            com seus dados e informações sobre a doação!
          </div>
        </div>
      </div>
      <div class="grid-text">
        <div class="text-content">
          <div class="number">04</div>
          <div class="title">Opção de pagamento</div>
          <div class="instructions">
            Ao preencher o formulário, você poderá selecionar qual a opção de
            pagamento deseja.
          </div>
        </div>
      </div>
      <div class="grid-photo">
        <img src="../assets/imagens/mock-3.png" alt="" />
      </div>
      <div class="grid-photo">
        <img src="../assets/imagens/mock-4.png" alt="" />
      </div>
      <div class="grid-text">
        <div class="text-content">
          <div class="number">05</div>
          <div class="title">Tela de pagamento</div>
          <div class="instructions">
            Basta confirmar o pagamento na nossa tela de pagamento que sua
            doação será concluída com sucesso!
          </div>
        </div>
      </div>
      <div class="grid-text">
        <div class="text-content">
          <div class="number">06</div>
          <div class="title">Tela de sucesso</div>
          <div class="instructions">
            Após a confirmação do pagamento, você deverá ser direcionado à essa
            tela. Caso isso aconteça, significa que sua doação já foi
            processada!
          </div>
        </div>
      </div>
      <div class="grid-photo">
        <img src="../assets/imagens/mock-5.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [],
  }),
};
</script>

<style>
.step-by-step {
  row-gap: 2.4rem;
  column-gap: 2.4rem;
}
.grid-text {
  display: flex;
  align-items: center;
}
</style>
