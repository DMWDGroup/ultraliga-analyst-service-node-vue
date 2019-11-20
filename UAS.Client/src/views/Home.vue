<template>
  <div class="home">
    <TheMenu />
    <TheHeader />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheMenu from "../components/TheMenu.vue";
import TheFooter from "../components/TheFooter.vue";

export default {
  name: "home",
  components: {
    TheHeader,
    TheMenu,
    TheFooter
  }
};
</script>

<style lang="scss">
.home {
  min-height: 100vh;
  background: $background;
  background: linear-gradient(180deg, $background 0%, darken($background, 5%) 100%);
}
</style>
