<template>
  <div class="footer">
    <h5 class="footer__content">
      Proudly made in Poland, with &#x1F49E; by
      <a target="_blank" href="https://github.com/orgs/DMWDGroup" class="footer__link">DMWD</a>.
    </h5>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  padding: 2rem 0;
  .footer__content {
    color: $text-primary;
    font-weight: 100;
    font-size: 1.2rem;
    text-align: center;

    .footer__link {
      color: $text-primary;

      &:visited {
        color: $text-primary;
      }
    }
  }
}
</style>
