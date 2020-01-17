<template>
  <div class="numbers-row__container">
    <div v-for="item in numbers" :key="item.heading" class="numbers-row__item">
      <h4 class="item__header">{{ item.heading }}</h4>
      <ChartHalfDoughnut :chartdata="item.chartData" />
    </div>
  </div>
</template>

<script>
import ChartHalfDoughnut from "@/components/ChartHalfDoughnut.vue";

export default {
  components: {
    ChartHalfDoughnut
  },
  data() {
    return {
      numbers: [
        {
          heading: "Najkrótszy mecz",
          chartData: {
            labels: ["1", "2", "3"],
            datasets: [
              {
                backgroundColor: ["#f87979", "#ff00ff", "#0000ff"],
                data: [15, 20, 123]
              }
            ]
          }
        },
        {
          heading: "Najdłuższy mecz",
          chartData: {
            labels: ["1", "2", "3"],
            datasets: [
              {
                backgroundColor: ["#f87979", "#ff00ff", "#0000ff"],
                data: [15, 20, 123]
              }
            ]
          }
        },
        {
          heading: "Najwięcej zabójstw",
          chartData: {
            labels: ["1", "2", "3"],
            datasets: [
              {
                backgroundColor: ["#f87979", "#ff00ff", "#0000ff"],
                data: [15, 20, 123]
              }
            ]
          }
        },
        {
          heading: "Średnia ilość zabójstw",
          chartData: {
            labels: ["1", "2", "3"],
            datasets: [
              {
                backgroundColor: ["#f87979", "#ff00ff", "#0000ff"],
                data: [15, 20, 123]
              }
            ]
          }
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
