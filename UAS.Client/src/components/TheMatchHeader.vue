<template>
  <div class="match-header">
    <div class="match-length">
      <p class="match-length__value">
        44:30
      </p>
    </div>
    <div class="match-overview">
      <div class="match-overview__team">
        <img class="team__logo" :src="teamLogos[0]" />
        <p class="team__name">
          IlluminarGaming
        </p>
      </div>
      <div class="match-overview__details"></div>
      <div class="match-overview__team">
        <img class="team__logo" :src="teamLogos[1]" />
        <p class="team__name">
          Piratesport
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamLogos: [
        "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/5/58/Illuminar_Gaminglogo_square.png/1200px-Illuminar_Gaminglogo_square.png",
        "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/0/01/Piratesportslogo_square.png/1200px-Piratesportslogo_square.png"
      ]
    };
  }
};
</script>

<style lang="scss">
.match-header {
  display: flex;
  flex-flow: column;
  align-items: center;

  .match-length {
    .match-length__value {
      color: $text-primary;
      font-size: 3rem;
      font-weight: 700;
    }
  }

  .match-overview {
    display: grid;
    grid-template-columns: 20% 60% 20%;
    width: 100%;

    &__team {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      .team {
        &__logo {
          display: block;
          position: absolute;
          top: 0;
          height: 100%;
          opacity: 0.3;
        }

        &__name {
          position: relative;
          top: 0;
          z-index: 10;
          color: $text-primary;
          font-size: 1rem;
        }
      }
    }
  }
}
</style>
