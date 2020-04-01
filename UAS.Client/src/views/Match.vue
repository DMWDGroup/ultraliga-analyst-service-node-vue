<template>
  <div class="wrapper">
    <TheMatchHeader class="section__margin" />
    <TheMatchTable class="section__margin" />
  </div>
</template>

<script>
import TheMatchHeader from "@/components/TheMatchHeader.vue";
import TheMatchTable from "@/components/TheMatchTable.vue";

export default {
  name: "home",
  components: {
    TheMatchHeader,
    TheMatchTable
  }
};
</script>
