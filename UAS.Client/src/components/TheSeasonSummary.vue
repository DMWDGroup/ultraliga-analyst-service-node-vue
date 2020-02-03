<template>
  <div class="season-summary">
    <SectionHeader title="podsumowanie" description="sezon <nazwa sezonu**>" />
    <TheSeasonSummaryTable />
    <TheSeasonSummaryNumbers />
    <TheSeasonSummaryCharts />
  </div>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import TheSeasonSummaryTable from "@/components/TheSeasonSummaryTable.vue";
import TheSeasonSummaryNumbers from "@/components/TheSeasonSummaryNumbers.vue";
import TheSeasonSummaryCharts from "@/components/TheSeasonSummaryCharts.vue";

export default {
  components: {
    SectionHeader,
    TheSeasonSummaryTable,
    TheSeasonSummaryNumbers,
    TheSeasonSummaryCharts
  }
};
</script>

<style lang="scss" scoped></style>
