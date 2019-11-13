<template>
  <div class="header">
    <div class="header__hamburger-wrapper">
      <button class="hamburger__button">
        <div class="hamburger__section"></div>
        <div class="hamburger__section"></div>
        <div class="hamburger__section"></div>
      </button>
    </div>
    <div class="header__logo-wrapper"><span class="bold">ULTRALIGA</span> ANALYST SERVICE</div>
    <div class="header__seasons-wrapper">
      <select name="seasons" id="seasons">
        <option value="1-PO" selected>1-PO</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  display: grid;
  grid-template-columns: [first] 20% auto [last] 20%;
  font-size: 3rem;
  padding: 2rem 3rem;
  color: $text-primary;

  .header__hamburger-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .hamburger__button {
    display: flex;
    height: 1.5rem;
    width: 2.5rem;
    border: 0;
    padding: 0;
    margin-left: 0.5rem;
    background-color: transparent;
    justify-content: space-between;
    align-items: stretch;
    flex-flow: column;
    transition: transform 0.2s ease-outs;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transition: transform 0.1s ease-in;
    }

    .hamburger__section {
      height: 2px;
      background-color: $text-primary;
    }
  }

  .header__logo-wrapper {
    text-align: center;
  }

  .header__seasons-wrapper {
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
