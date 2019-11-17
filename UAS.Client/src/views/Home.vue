<template>
  <div class="home">
    <TheHeader />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";

export default {
  name: "home",
  components: {
    TheHeader
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
