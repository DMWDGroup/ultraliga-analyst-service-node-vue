<template>
  <div class="table-cell" :class="getSide">
    <div class="player">
      <div class="player-runes">
        <img src="https://raw.communitydragon.org/10.4/game/assets/perks/styles/precision/overheal.png" alt="rune" />
        <img src="https://raw.communitydragon.org/10.4/game/assets/perks/styles/precision/overheal.png" alt="rune" />
      </div>
      <div class="player-spells">
        <img src="http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/SummonerBarrier.png" alt="spell" />
        <img src="http://ddragon.leagueoflegends.com/cdn/10.4.1/img/spell/SummonerFlash.png" alt="spell" />
      </div>
      <div class="player-champion">
        <img src="http://ddragon.leagueoflegends.com/cdn/10.4.1/img/champion/Aatrox.png" alt="champion" />
        <p class="level">16</p>
      </div>
      <div class="player-name">
        <p class="player-name__text">
          iHG Rybson
        </p>
      </div>
    </div>
    <div class="kda">Kda</div>
    <div class="items">Items</div>
    <div class="cs">cs</div>
    <div class="gold">gold</div>
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
        return "table-cell__left";
      } else {
        return "table-cell__right";
      }
    }
  }
};
</script>

<style lang="scss">
.table-cell {
  display: grid;
  text-align: center;

  & > * {
    padding: 0.5rem 0;
  }

  img {
    height: 1.5rem;
  }

  .player {
    display: grid;
    grid-template-columns: repeat(2, 1.5rem) 3rem auto;
    border-bottom: 1px solid $table-border;

    &-runes,
    &-spells {
      display: flex;
      flex-flow: column;
    }

    &-champion {
      position: relative;
      img {
        height: 3rem;
      }

      .level {
        color: $text-primary;
        position: absolute;
        z-index: 10;
        left: 0;
        bottom: 0;
        margin: 0.2rem;
      }
    }

    &-name {
      display: flex;
      justify-content: center;
      align-items: center;

      &__text {
        color: $text-primary;
        margin: 0;
        font-size: 0.8rem;
      }
    }
  }

  &__left {
    grid-template-columns: [player] 38% [kda] 15% [items] 23% [cs] 11% [gold] auto;
    grid-template-areas: "player kda items cs gold";

    .player {
      grid-area: player;
    }
  }

  &__right {
    grid-template-columns: [gold] auto [cs] 11% [items] 23% [kda] 15% [player] 38%;
    grid-template-areas: "gold cs items kda player";

    .player {
      grid-area: player;
    }
  }

  .kda {
    grid-area: kda;
    border-bottom: 1px solid $table-border;
  }

  .items {
    grid-area: items;
  }

  .cs {
    grid-area: cs;
  }

  .gold {
    grid-area: gold;
  }
}
</style>
