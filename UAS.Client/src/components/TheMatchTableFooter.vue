<template>
  <div class="table-footer">
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
export default {};
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
}
</style>
