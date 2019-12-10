<template>
  <div class="header">
    <div class="header__hamburger-wrapper">
      <button class="hamburger__button" @click.prevent="toggleMenu">
        <div class="hamburger__section"></div>
        <div class="hamburger__section"></div>
        <div class="hamburger__section"></div>
      </button>
    </div>
    <div class="header__logo-wrapper"><span class="bold">ULTRALIGA</span> ANALYST SERVICE</div>
    <div class="header__seasons-wrapper">
      <select name="seasons" id="seasons" class="seasons__select">
        <option value="1-PO" selected>1-PO</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenuState");
    }
  }
};
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
    font-weight: 100;
  }

  .header__seasons-wrapper {
    display: flex;
    flex-flow: row;
    justify-content: flex-end;
    align-items: center;

    &::before {
      display: block;
      content: "SEZON";
      font-weight: bold;
      padding-right: 5px;
      padding-left: 35px;
      background: url("~@/assets/img/Thunder.svg");
      background-repeat: no-repeat;
      background-size: contain;

      @media (max-width: 1410px) {
        content: "S:";
      }
    }
  }

  .seasons__select {
    display: block;
    background: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 0.01px;
    border: none;
    font-size: 3rem;
    font-family: inherit;
    font-weight: 100;
    color: $text-primary;

    & ::-ms-expand {
      display: none;
    }
  }
}
</style>
