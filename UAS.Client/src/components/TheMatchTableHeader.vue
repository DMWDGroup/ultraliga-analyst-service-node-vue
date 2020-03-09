<template>
  <div class="table-header" :class="getSide">
    <div class="gradient"></div>
    <div class="kda"><img src="@/assets/img/skull.png" alt="skull icon" /></div>
    <div class="items"><img src="@/assets/img/rucksack.png" alt="rucksack icon" /></div>
    <div class="cs"><img src="@/assets/img/sword.png" alt="sword icon" /></div>
    <div class="gold"><img src="@/assets/img/coins.png" alt="coins icon" /></div>
  </div>
</template>

<script>
export default {
  props: {
    leftSide: Boolean
  },
  computed: {
    getSide() {
      if (this.leftSide) {
        return "table-header__left";
      } else {
        return "table-header__right";
      }
    }
  }
};
</script>

<style lang="scss">
.table-header {
  display: grid;
  text-align: center;
  border-top: 1px solid $table-border;
  border-bottom: 1px solid $table-border;

  img {
    height: 2rem;
  }

  &__left {
    grid-template-columns: 38% 17% 21% 11% auto;
    grid-template-areas: "gradient kda items cs gold";

    .gradient {
      background: linear-gradient(to right, $red, transparent);
      grid-area: gradient;
    }
  }

  &__right {
    grid-template-columns: auto 11% 21% 17% 38%;
    grid-template-areas: "gold cs items kda gradient";

    .gradient {
      background: linear-gradient(to left, $blue, transparent);
      grid-area: gradient;
    }
  }

  .kda {
    grid-area: kda;
  }

  .items {
    grid-area: items;
  }

  .cs {
    grid-area: cs;
  }

  .gold {
    grid-area: gold;
  }
}
</style>
