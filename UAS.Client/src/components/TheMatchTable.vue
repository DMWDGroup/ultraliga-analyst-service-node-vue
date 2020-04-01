<template>
  <div class="match-table">
    <h2 class="patch">
      patch 9.12
    </h2>
    <div class="table-wrapper">
      <div class="table-column table-column__left">
        <TheMatchTableHeader />
        <TheMatchTableCell v-for="n in 5" :key="n" />
        <TheMatchTableFooter />
      </div>
      <div class="table-column table-column__right">
        <TheMatchTableHeader />
        <TheMatchTableCell v-for="n in 5" :key="n" />
        <TheMatchTableFooter />
      </div>
    </div>
  </div>
</template>

<script>
import TheMatchTableHeader from "@/components/TheMatchTableHeader.vue";
import TheMatchTableCell from "@/components/TheMatchTableCell.vue";
import TheMatchTableFooter from "@/components/TheMatchTableFooter.vue";

export default {
  components: { TheMatchTableHeader, TheMatchTableCell, TheMatchTableFooter },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.patch {
  font-size: 2rem;
  font-weight: 100;
  color: $text-primary;
  text-align: center;
  margin: 0.5rem;
}

.table-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 50%);
}

.table-column {
  &__left {
    .table-header {
      grid-template-columns: 38% 17% 21% 11% auto;
      grid-template-areas: "gradient kda items cs gold";
      border-right: 1px solid $table-border;

      .gradient {
        background: linear-gradient(to right, $red, transparent);
        grid-area: gradient;
      }
    }

    .table-cell {
      grid-template-columns: [player] 38% [kda] 17% [items] 21% [cs] 11% [gold] auto;
      grid-template-areas: "player kda items cs gold";
      border-right: 1px solid $table-border;

      .player {
        grid-template-columns: repeat(2, 1.5rem) 3rem auto;
        grid-template-areas: "runes spells champion name";
      }

      .items {
        flex-flow: column wrap;
      }
    }

    .table-footer {
      grid-template-columns: [player] 38% [kda] 17% [items] 21% [cs] 11% [gold] auto;
      grid-template-areas: "player kda items cs gold";
    }
  }

  &__right {
    .table-header {
      grid-template-columns: auto 11% 21% 17% 38%;
      grid-template-areas: "gold cs items kda gradient";

      .gradient {
        background: linear-gradient(to left, $blue, transparent);
        grid-area: gradient;
      }
    }

    .table-cell {
      grid-template-columns: [gold] auto [cs] 11% [items] 21% [kda] 17% [player] 38%;
      grid-template-areas: "gold cs items kda player";

      .player {
        grid-template-columns: auto 3rem repeat(2, 1.5rem);
        grid-template-areas: "name champion spells runes";
      }

      .items {
        flex-flow: column wrap-reverse;
      }
    }

    .table-footer {
      grid-template-columns: [gold] auto [cs] 11% [items] 21% [kda] 17% [player] 38%;
      grid-template-areas: "gold cs items kda player";

      .player {
        justify-content: flex-end;
      }
    }
  }
}
</style>
