<template>
  <div class="season-matches">
    <SectionHeader title="mecze" description="ostatnie mecze" />
    <div class="details">
      <SeasonMatchOverview />
      <SeasonMatchOverview />
      <SeasonMatchOverview />
      <SeasonMatchOverview />
    </div>
    <button class="season-matches__button-load">
      Załaduj więcej...
    </button>
  </div>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue";
import SeasonMatchOverview from "@/components/SeasonMatchOverview.vue";

export default {
  components: { SectionHeader, SeasonMatchOverview }
};
</script>

<style lang="scss">
.details {
  margin: 4rem 0;
}

.season-matches__button-load {
  border: none;
  border-bottom: 1px solid $text-primary;
  background-color: transparent;
  color: $text-primary;
  font-size: 1.5rem;
  font-family: inherit;
  font-style: italic;
  transition: transform 0.1s ease-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 0.1s ease-in;
  }
}
</style>
