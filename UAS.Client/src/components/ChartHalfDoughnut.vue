<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["chartdata"],
  data() {
    return {
      options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
      }
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>

<style></style>
