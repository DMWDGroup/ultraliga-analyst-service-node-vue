<template>
  <div class="match-header">
    <div class="match-length">
      <p class="match-length__value">
        44:30
      </p>
    </div>
    <div class="match-overview">
      <div class="match-overview__team">
        <img class="team__logo" :src="teams[0].logo" />
        <p class="team__name">
          IlluminarGaming
        </p>
      </div>
      <div class="match-overview__details">
        <div class="details__winner">
          <p
            v-for="team in teams"
            :key="team.logo"
            class="winner__paragraph"
            :class="{ 'winner__paragraph--winner': team.winner }"
          >
            {{ team.winner === true ? "win" : "lose" }}
          </p>
        </div>
        <div class="details__date">
          <p class="date__paragraph">{{ info.date }}</p>
          <p class="time__paragraph">{{ info.time }}</p>
        </div>
      </div>
      <div class="match-overview__team">
        <img class="team__logo" :src="teams[1].logo" />
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
      teams: [
        {
          winner: true,
          logo:
            "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/5/58/Illuminar_Gaminglogo_square.png/1200px-Illuminar_Gaminglogo_square.png"
        },
        {
          winner: false,
          logo:
            "https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/0/01/Piratesportslogo_square.png/1200px-Piratesportslogo_square.png"
        }
      ],
      info: {
        date: "24.12.2005",
        time: "12:00"
      }
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
      margin: 0;
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
          font-size: 1.5rem;
          font-weight: 700;
        }
      }
    }

    &__details {
      .details {
        &__winner {
          display: flex;
          flex-flow: row;
          justify-content: space-around;

          .winner__paragraph {
            font-size: 3.5rem;
            color: $text-primary;
            text-transform: uppercase;
            font-weight: 700;
            margin: 1rem 0;

            &--winner {
              color: $secondary;
            }
          }
        }

        &__date {
          display: flex;
          flex-flow: column;
          align-items: center;
          color: $text-primary;
          font-size: 3rem;

          p {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
