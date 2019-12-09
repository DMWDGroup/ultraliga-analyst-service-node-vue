<template>
  <div class="section-header">
    <h5>{{ description }}</h5>
    <H4>{{ title }}</H4>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String
  }
};
</script>

<style lang="scss" scoped>
.section-header {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
  border-left: 4px solid $secondary;
  padding-left: 7px;
  text-transform: uppercase;

  h5,
  h4 {
    margin: 0;
  }

  h5 {
    font-size: 1.1rem;
    color: $text-secondary;
    line-height: 1rem;
    margin-bottom: 7px;
  }

  h4 {
    font-size: 2.6rem;
    color: $secondary;
    line-height: 1.9rem;
  }
}
</style>
