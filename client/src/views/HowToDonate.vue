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
      <div class="grid-text">TEXT 1</div>
      <div class="grid-text">TEXT 2</div>
      <div class="grid-photo">
        <img src="../assets/imagens/mock-2.png" alt="" />
      </div>
      <div class="grid-photo">
        <img src="../assets/imagens/mock-3.png" alt="" />
      </div>
      <div class="grid-text">TEXT 3</div>
      <div class="grid-text">TEXT 4</div>
      <div class="grid-photo">
        <img src="../assets/imagens/mock-4.png" alt="" />
      </div>
      <div class="grid-photo">
        <img src="../assets/imagens/mock-5.png" alt="" />
      </div>
      <div class="grid-text">TEXT 5</div>
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
}
</style>
