<template>
  <div class="table-footer" :class="getSide">
    <div class="player">
      <img src="http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/Aatrox.png" alt="champion" />
      <img src="http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/Aatrox.png" alt="champion" />
      <img src="http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/Aatrox.png" alt="champion" />
      <img src="http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/Aatrox.png" alt="champion" />
      <img src="http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/Aatrox.png" alt="champion" />
    </div>
    <div class="kda">
      <div class="kda-ratio">1.34</div>
    </div>
    <div class="cs">900</div>
    <div class="gold">112.5k</div>
  </div>
</template>

<script>
export default {
  props: {
    leftSide: Boolean
  },
  computed: {
    getSide() {
      if (this.leftSide) {
        return "table-footer__left";
      } else {
        return "table-footer__right";
      }
    }
  }
};
</script>

<style lang="scss">
.table-footer {
  display: grid;
  text-align: center;

  & > * {
    padding: 0.2rem 0;
  }

  img {
    height: 1.5rem;
  }

  .player {
    display: flex;
    flex-flow: row;
    grid-area: player;
  }

  .kda {
    grid-area: kda;
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-bottom: 0.2rem;
    font-weight: 600;

    &-stats {
      color: $text-primary;
    }

    &-ratio {
      color: $secondary;
      font-size: 1.2rem;
    }
  }

  .cs {
    grid-area: cs;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $text-primary;
    font-weight: 600;
  }

  .gold {
    grid-area: gold;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $text-primary;
    font-weight: 600;
  }

  &__left {
    grid-template-columns: [player] 38% [kda] 17% [items] 21% [cs] 11% [gold] auto;
    grid-template-areas: "player kda items cs gold";
  }

  &__right {
    grid-template-columns: [gold] auto [cs] 11% [items] 21% [kda] 17% [player] 38%;
    grid-template-areas: "gold cs items kda player";

    .player {
      justify-content: flex-end;
    }
  }
}
</style>
