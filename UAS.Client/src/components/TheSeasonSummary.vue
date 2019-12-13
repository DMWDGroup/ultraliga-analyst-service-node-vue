<template>
  <div class="season-summary">
    <SectionHeader title="podsumowanie" description="sezon <nazwa sezonu**>" />
    <TheSeasonSummaryTable />
  </div>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import TheSeasonSummaryTable from "@/components/TheSeasonSummaryTable.vue";

export default {
  components: {
    SectionHeader,
    TheSeasonSummaryTable
  }
};
</script>

<style lang="scss" scoped>
</style>
