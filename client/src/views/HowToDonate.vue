<template>
  <div class="container">
    <div class="section-header">
      <div class="section-title">COMO DOAR</div>
      <div class="section-subtitle">
        Passo a passo para realizar a sua doação!
      </div>
    </div>
    <div class="step-by-step grid grid--2-cols">
      <div class="grid-photo grid-item">
        <img src="../assets/imagens/mock-1.png" alt="" />
      </div>
      <div class="grid-text grid-item">
        <div class="text-content">
          <p class="number">01</p>
          <p class="text-title">Tela inicial</p>
          <p class="instructions">
            Em nossa tela inicial, selecione se deseja doar para escolas ou
            crianças!
          </p>
        </div>
      </div>
      <div class="grid-text grid-item">
        <div class="text-content">
          <div class="number">02</div>
          <div class="text-title">Tela de doação</div>
          <div class="instructions">
            Na tela de doação, você deve selecionar a criança/escola para qual
            deseja doar.
          </div>
        </div>
      </div>
      <div class="grid-photo grid-item">
        <img src="../assets/imagens/mock-6.png" alt="" />
      </div>
      <div class="grid-photo grid-item">
        <img src="../assets/imagens/mock-2.png" alt="" />
      </div>
      <div class="grid-text grid-item">
        <div class="text-content">
          <div class="number">03</div>
          <div class="text-title">Formulario de doação</div>
          <div class="instructions">
            Após selecionar a opção desejada, o formulário deve ser preenchido
            com seus dados e informações sobre a doação!
          </div>
        </div>
      </div>
      <div class="grid-text grid-item">
        <div class="text-content">
          <div class="number">04</div>
          <div class="text-title">Opção de pagamento</div>
          <div class="instructions">
            Ao preencher o formulário, você poderá selecionar qual a opção de
            pagamento deseja.
          </div>
        </div>
      </div>
      <div class="grid-photo grid-item">
        <img src="../assets/imagens/mock-3.png" alt="" />
      </div>
      <div class="grid-photo grid-item">
        <img src="../assets/imagens/mock-4.png" alt="" />
      </div>
      <div class="grid-text grid-item">
        <div class="text-content">
          <div class="number">05</div>
          <div class="text-title">Tela de pagamento</div>
          <div class="instructions">
            Basta confirmar o pagamento na nossa tela de pagamento que sua
            doação será concluída com sucesso!
          </div>
        </div>
      </div>
      <div class="grid-text grid-item">
        <div class="text-content">
          <div class="number">06</div>
          <div class="text-title">Tela de sucesso</div>
          <div class="instructions">
            Após a confirmação do pagamento, você deverá ser direcionado à essa
            tela. Caso isso aconteça, significa que sua doação já foi
            processada!
          </div>
        </div>
      </div>
      <div class="grid-photo grid-item">
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
  row-gap: 4.4rem;
  column-gap: 2.4rem;
  grid-template-columns: 1fr, 1fr;
}

.container {
  padding: 4.8rem 8.2rem 4.8rem 8.2rem;
}
.grid-text {
  display: flex;
  align-items: center;
}

.text-content {
}

.number {
  font-weight: 600;
  font-size: 8.6rem;
  color: lightgray;
}

.text-title {
  font-size: 3.2rem;
  font-weight: 600;
}

.instructions {
  font-size: 2.2rem;
  color: #666;
}

.grid-photo img {
  width: 70%;
  border-radius: 9999999rem;
}

.grid-photo img::before {
  width: 80%;
  padding-bottom: 60%;
  background-color: #eea366;
  z-index: -2;
}

.grid-photo {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 35em) {
  .step-by-step {
    grid-template-columns: 1fr;
    gap: 0rem;
  }
  .grid-item:nth-child(3) {
    grid-row: 4;
  }
  .grid-item:nth-child(7) {
    grid-row: 8;
  }
  .grid-item:nth-child(11) {
    grid-row: 12;
  }
  .grid-photo {
    margin-top: 3.2rem;
  }
  .grid-photo img {
    width: 90%;
  }
}
</style>
