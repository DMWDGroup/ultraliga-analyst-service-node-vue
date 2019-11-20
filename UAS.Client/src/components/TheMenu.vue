<template>
  <transition name="slide">
    <div v-if="menuState" class="menu">
      <div class="menu__header">
        <div class="menu__logo">
          <span class="bold">Ultraliga</span>
          Analyst Service
        </div>
        <div class="menu__button-wrapper">
          <button class="menu__button-close" @click.prevent="toggleMenu">
            X
          </button>
        </div>
      </div>
      <div class="menu__links-wrapper">
        <ul class="links">
          <li class="links__item">
            <router-link to="/" class="links__item-anchor">
              Podsumowanie
            </router-link>
          </li>
          <li class="links__item">
            <router-link to="/matches" class="links__item-anchor">
              Mecze
            </router-link>
          </li>
          <li class="links__item">
            <router-link to="/players" class="links__item-anchor">
              Zawodnicy
            </router-link>
          </li>
          <li class="links__item">
            <router-link to="/teams" class="links__item-anchor">
              Drużynki
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  computed: {
    menuState() {
      return this.$store.state.menuOpened;
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenuState");
    }
  }
};
</script>

<style lang="scss">
.menu {
  display: flex;
  flex-flow: column;
  width: 380px;
  height: 100vh;
  background-color: rgba(2, 21, 40, 1);
  color: rgba(254, 254, 255, 1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  filter: unset;
  font-size: 2rem;
  padding: 1.5rem 1rem;
  -webkit-box-shadow: -4px 0px 40px 13px rgba(2, 21, 40, 1);
  -moz-box-shadow: -4px 0px 40px 13px rgba(2, 21, 40, 1);
  box-shadow: -4px 0px 40px 13px rgba(2, 21, 40, 1);

  .menu__header {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;

    .menu__button-wrapper {
      flex-basis: 20%;
      display: flex;
      justify-content: center;

      .menu__button-close {
        background-color: transparent;
        border: 0;
        font-size: 2rem;
        color: rgba(254, 254, 255, 1);
        transition: transform 0.1s ease-in;

        &:hover {
          cursor: pointer;
          transform: scale(1.2);
          transition: transform 0.1s ease-in;
        }
      }
    }
  }

  .menu__links-wrapper {
    padding-top: 5rem;

    .links {
      margin: 0;
      padding: 0;
      list-style-type: none;
      text-align: left;

      .links__item {
        padding: 1rem 0;
        font-weight: bold;
        transition: transform 0.3s ease-in;

        &:hover {
          transform: translateX(3px);
          transition: transform 0.1s ease-in;
        }
        .links__item-anchor {
          text-decoration: none;
          color: rgba(254, 254, 255, 1);
          &:visited {
            color: inherit;
          }
        }
      }

      .router-link-active {
        font-weight: normal;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: left 0.5s, opacity 0.5s;
}
.slide-enter,
.slide-leave-to {
  left: -380px;
  opacity: 0;
}
</style>
