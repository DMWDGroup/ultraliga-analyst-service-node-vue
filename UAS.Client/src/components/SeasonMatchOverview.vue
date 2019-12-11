<template>
  <div class="match">
    <a href="/" target="_blank" rel="noopener noreferrer" class="match__detail-wrapper">
      <div class="match__team match__team--left">
        <p class="match__team-name">Illuminar Gaming</p>
        <div class="match__team-logo-wrapper">
          <img
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/5/58/Illuminar_Gaminglogo_square.png/1200px-Illuminar_Gaminglogo_square.png"
            alt="logo"
            class="match__team-logo"
          />
        </div>
      </div>
      <div class="match__score">1 - 0</div>
      <div class="match__team match__team--right">
        <div class="match__team-logo-wrapper">
          <img
            src="https://gamepedia.cursecdn.com/lolesports_gamepedia_en/thumb/0/01/Piratesportslogo_square.png/1200px-Piratesportslogo_square.png"
            alt="logo"
            class="match__team-logo"
          />
        </div>
        <p class="match__team-name">piratesports</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.match {
  margin-top: 2rem;

  .match__detail-wrapper {
    display: grid;
    grid-template-columns: [first] 42% auto [last] 42%;
    grid-template-rows: 5rem;
    color: $text-primary;
    text-decoration: none;
    font-weight: bold;

    .match__team {
      display: flex;
      flex-flow: row;

      .match__team-logo-wrapper {
        height: 100%;

        .match__team-logo {
          max-height: 100%;
          max-width: 100%;
        }
      }

      .match__team-name {
        text-transform: uppercase;
        font-size: 1.5rem;
      }
    }

    .match__score {
      display: flex;
      justify-content: center;
      font-size: 3.3rem;
    }
  }

  .match__team--left {
    justify-content: flex-end;

    .match__team-logo-wrapper {
      margin-left: 1.5rem;
    }
  }

  .match__team--right {
    justify-content: flex-start;

    .match__team-logo-wrapper {
      margin-right: 1.5rem;
    }
  }
}
</style>
