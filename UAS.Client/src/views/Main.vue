<template>
  <div class="home">
    <TheMenu />
    <TheHeader :class="{ blur: menuState }" />
    <main :class="{ blur: menuState }">
      <router-view></router-view>
    </main>
    <TheFooter :class="{ blur: menuState }" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheMenu from "@/components/TheMenu.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "home",
  components: {
    TheHeader,
    TheMenu,
    TheFooter
  },
  computed: {
    menuState() {
      return this.$store.state.menuOpened;
    }
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
  & * {
    transition: all 0.2s ease-in;
  }
}

.section__margin {
  margin: 10rem 0;
}

main {
  align-self: center;
  width: 960px;
}

.blur {
  filter: blur(5px);
  transition: all 0.2s ease-in;
}
</style>
