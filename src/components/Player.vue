<template>
  <main class="player-container">
    <audio
      id="player"
      :src="preview"
      controls >
      Your browser does not support the <code>audio</code> element.
    </audio>
  </main>
</template>

<script>
export default {
  name: 'Player',
  data: function () {
    return {
      preview: '/songs/gorgeous.webm'
    }
  }
}
</script>

<style scoped>

</style>