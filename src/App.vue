<template>
  <Navbar />
  <div id="body">
    <Player />
  </div>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue'
import Player from './components/Player.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Navbar,
    Player
  }
}
</script>

<style lang="scss">
#body {
  min-height: calc(100vh - 200px);
}
</style>