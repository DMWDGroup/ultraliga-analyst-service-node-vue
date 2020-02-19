<template>
  <div class="match-table">
    <h2 class="patch">
      patch 9.12
    </h2>
    <div class="table-wrapper">
      <div class="table-column table-border">
        <TheMatchTableHeader :leftSide="true" />
      </div>
      <div class="table-column">
        <TheMatchTableHeader :leftSide="false" />
      </div>
    </div>
  </div>
</template>

<script>
import TheMatchTableHeader from "@/components/TheMatchTableHeader.vue";

export default {
  components: { TheMatchTableHeader },
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

.table-border {
  border-right: 1px solid $table-border;
}
</style>
