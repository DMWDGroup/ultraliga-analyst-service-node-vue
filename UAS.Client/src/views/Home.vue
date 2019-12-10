<template>
  <div class="home">
    <TheMenu />
    <TheHeader />
    <main>
      <TheSeasonMatches class="section__margin" />
      <TheSeasonSummary class="section__margin" />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheMenu from "@/components/TheMenu.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheSeasonMatches from "@/components/TheSeasonMatches.vue";
import TheSeasonSummary from "@/components/TheSeasonSummary.vue";

export default {
  name: "home",
  components: {
    TheHeader,
    TheMenu,
    TheFooter,
    TheSeasonMatches,
    TheSeasonSummary
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  background: $background;
  background: linear-gradient(180deg, $background 0%, darken($background, 5%) 100%);
}

.section__margin {
  margin: 10rem 0;
}

main {
  align-self: center;
  width: 960px;
}
</style>
