<template>
  <div class="wrapper">
    <TheSeasonMatches class="section__margin" />
    <TheSeasonSummary class="section__margin" />
  </div>
</template>

<script>
import TheSeasonMatches from "@/components/TheSeasonMatches.vue";
import TheSeasonSummary from "@/components/TheSeasonSummary.vue";

export default {
  name: "home",
  components: {
    TheSeasonMatches,
    TheSeasonSummary
  }
};
</script>
