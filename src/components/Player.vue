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
      preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/30/72/5d/30725dee-2153-3b9c-c2a6-9f09ce648a86/mzaf_7109126722350920884.plus.aac.p.m4a'
    }
  }
}
</script>

<style scoped>
.player-container {
  padding: 10px;
}
</style>