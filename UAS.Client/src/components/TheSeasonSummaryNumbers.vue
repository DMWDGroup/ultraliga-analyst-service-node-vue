<template>
  <div class="numbers-row__container">
    <div v-for="item in numbers" :key="item.heading" class="numbers-row__item">
      <h4 class="item__header">{{ item.heading }}</h4>
      <p class="item__value">{{ item.value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [
        {
          heading: "Najkrótszy mecz",
          value: "29:13"
        },
        {
          heading: "Najdłuższy mecz",
          value: "40:13"
        },
        {
          heading: "Najwięcej zabójstw",
          value: "35"
        },
        {
          heading: "Średnia ilość zabójstw",
          value: "12"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.numbers-row__container {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  margin: 4rem 0;
  color: $text-primary;

  .numbers-row__item {
    padding: 0 1rem;
  }
}

.item__header {
  border-bottom: 2px solid $text-primary;
  color: $text-primary;
  margin: 0;
  padding-bottom: 3px;
}

.item__value {
  margin: 5px 0;
  font-size: 2rem;
  text-align: center;
  font-weight: bold;
}
</style>
