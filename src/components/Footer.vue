<template>
  <footer class="footer">
    <h1 class="footer_heading">Folklore player made with Vue3 and Vite.</h1>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>

.footer {
  height: 100px;
  padding: 20px 0px;
  background-color: limegreen;
  &_heading {
    font-size: 1rem;
  }
}
</style>