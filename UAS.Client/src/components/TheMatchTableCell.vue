<template>
  <div class="table-cell">
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
    <div class="kda">
      <div class="kda-stats">3/2/12</div>
      <div class="kda-ratio">1.34</div>
    </div>
    <div class="items">
      <img src="http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/1006.png" alt="champion" />
      <img src="http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/1006.png" alt="champion" />
      <img src="http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/1006.png" alt="champion" />
      <img src="http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/1006.png" alt="champion" />
      <img src="http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/1006.png" alt="champion" />
      <img src="http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/1006.png" alt="champion" />
      <img src="http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/2055.png" alt="champion" />
    </div>
    <div class="cs">324</div>
    <div class="gold">16.5k</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.table-cell {
  display: grid;
  text-align: center;
  border-right: 1px solid $table-border;

  &:nth-last-child(2) {
    border-bottom: 1px solid $table-border;

    .player {
      border: 0;
    }

    .kda {
      border: 0;
    }
  }

  & > * {
    padding: 0.5rem 0;
  }

  img {
    height: 1.5rem;
  }

  .player {
    display: grid;
    grid-area: player;
    border-bottom: 1px solid $table-border;

    &-runes,
    &-spells {
      display: flex;
      flex-flow: column;
    }

    &-runes {
      grid-area: runes;
    }

    &-spells {
      grid-area: spells;
    }

    &-champion {
      position: relative;
      grid-area: champion;
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
      grid-area: name;
      justify-content: center;
      align-items: center;

      &__text {
        color: $text-primary;
        margin: 0;
        font-size: 0.8rem;
      }
    }
  }

  .kda {
    grid-area: kda;
    border-bottom: 1px solid $table-border;
    display: flex;
    flex-flow: column;
    justify-content: center;
    font-weight: 600;

    &-stats {
      color: $text-primary;
    }

    &-ratio {
      color: $secondary;
      font-size: 1.2rem;
    }
  }

  .items {
    grid-area: items;
    display: inline-flex;
    height: 70px;
    justify-content: center;

    img {
      width: 1.5rem;
      padding: 1px;
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
}
</style>
