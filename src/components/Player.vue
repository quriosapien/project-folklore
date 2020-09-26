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
      preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview128/v4/9f/83/10/9f831043-233d-029e-fb94-bdb7e4a87a87/mzaf_7265467402807303851.plus.aac.p.m4a'
    }
  }
}
</script>

<style lang="scss" scoped>
.player-container {
  padding: 10px;
  & > audio {
    &:focus {
      outline: none;
    }
  }
}
</style>