<template>
  <div class="notfound">
    <h1 class="notfound__title">404</h1>
    <p class="notfound__p">Not Found</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.notfound {
  height: 90vh;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  color: rgba(7, 7, 7, 0.692);
  &__p {
    font-size: 2em;
  }
  &__title {
    padding-top: 1em;
    font-size: 9em;
  }
}
</style>
