<template>
  <nav class="navbar">
    <h1 class="navbar_title">
      Project Folklore
    </h1>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>

.navbar {
  background-color: turquoise;
  color: black;

  height: 80px;
  margin: 0px;
  &_title {
    margin: 0px;
    padding: 20px 0px;
  }
}
</style>
