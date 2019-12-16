<template>
  <div class="season-summary">
    <SectionHeader title="podsumowanie" description="sezon <nazwa sezonu**>" />
    <TheSeasonSummaryTable />
    <TheSeasonSummaryNumbers />
  </div>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import TheSeasonSummaryTable from "@/components/TheSeasonSummaryTable.vue";
import TheSeasonSummaryNumbers from "@/components/TheSeasonSummaryNumbers.vue";

export default {
  components: {
    SectionHeader,
    TheSeasonSummaryTable,
    TheSeasonSummaryNumbers
  }
};
</script>

<style lang="scss" scoped></style>
