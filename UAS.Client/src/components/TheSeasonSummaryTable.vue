<template>
  <div class="team-stats__wrapper">
    <h3 class="table__header">Statystyki drużynowe</h3>
    <div class="table__row">
      <p>Drużyna</p>
      <p>Winrate</p>
      <p>Wygrane</p>
      <p>Przegrane</p>
      <p>Czas gry</p>
      <p>GDM</p>
    </div>
    <div class="table__divider"></div>
    <div class="table__row">
      <p>Devils.one</p>
      <div class="table__row-progress-bar">
        <div class="progress-bar" style="width: 80%"></div>
        <p class="progress-bar__percentage">
          80%
        </p>
      </div>
      <p>12</p>
      <p>32</p>
      <p>23:10</p>
      <p>321</p>
    </div>
    <div class="table__row">
      <p>Devils.one</p>
      <div class="table__row-progress-bar">
        <div class="progress-bar" style="width: 50%"></div>
        <p class="progress-bar__percentage">
          50%
        </p>
      </div>
      <p>12</p>
      <p>32</p>
      <p>23:10</p>
      <p>321</p>
    </div>
    <div class="table__row">
      <p>Devils.one</p>
      <div class="table__row-progress-bar">
        <div class="progress-bar" style="width: 80%"></div>
        <p class="progress-bar__percentage">
          80%
        </p>
      </div>
      <p>12</p>
      <p>32</p>
      <p>23:10</p>
      <p>321</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.table__header {
  width: 40%;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 4px;
  border-bottom: 2px solid $text-primary;
  color: $text-primary;
  font-size: 1.5rem;
}

.table__row {
  display: grid;
  grid-template-columns: 25% 10% repeat(3, 18%) auto;
  margin: 0.5rem 0;

  &:first-child {
    color: $text-primary;
  }

  &:nth-child(even) {
    color: $text-secondary;
  }

  .table__row-progress-bar {
    border-left: 1px solid $text-secondary;
    border-right: 1px solid $text-secondary;
    position: relative;

    .progress-bar {
      background: $primary;
      height: 100%;
      // width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    .progress-bar__percentage {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      z-index: 10;
    }
  }

  p {
    font-size: 1.3rem;
    text-align: center;
    margin: 0;

    &:first-child {
      text-align: left;
    }
  }
}

.table__divider {
  height: 1px;
  width: 30%;
  margin-top: 4px;
  background-color: $text-secondary;
}
</style>
