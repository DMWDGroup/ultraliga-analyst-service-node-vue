import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuOpened: false
  },
  mutations: {
    toggleMenuState(state) {
      state.menuOpened = !state.menuOpened;
    }
  },
  actions: {},
  modules: {}
});
