<template>
  <input
    v-model="searchTerm"
    type="text"
    class="searchbox"
    placeholder="Search for any song ..."
    @input="newSearch">

    <ul>
      <li
        v-for="(item, index) in result.songs"
        :key="index"
        @click="updateAudioTrack({ trackUrl: item.previewUrl})">
        {{ item.trackName }}
      </li>
    </ul>
</template>

<script>
const waitList = {}
const DEBOUNCE_IDS = {
  SEARCH: 'SEARCH'
}

function clearDebounce (id) {
  if (waitList.id) {
    clearTimeout(waitList.id)
    delete waitList.id
  }
}

function debounce ({ id, callback, delay = 400}) {
  if (waitList.id) {
    clearTimeout(waitList.id)
  }
  waitList.id = setTimeout(() => {
    callback()
  }, delay)
}

export default {
  name: 'Search',
  data: function () {
    return {
      searchTerm: '',
      result: {
        length: 0,
        songs: []
      }
    }
  },
  methods: {
    newSearch (event) {
      const key = event.target.value
      if (key === '') {
        clearDebounce(DEBOUNCE_IDS.SEARCH)
        this.results = []
        return
      }
      this.fetchSearchResults(key)
    },
    fetchSearchResults (key) {
      debounce({
        id: DEBOUNCE_IDS.SEARCH,
        callback: () => {
          fetch(`/api/search?term=${key}&limit=20`)
            .then(res => res.json())
            .then(this.updateSearchResults)
        },
        delay: 400
      })
    },
    updateSearchResults ({ result: length, results: songs }) {
      this.result = { length, songs: songs.slice(0, 10) }
    },
    updateAudioTrack ({ trackUrl }) {
      const player = document.getElementById('player')
      player.setAttribute('src', trackUrl)
      player.load()
      player.play()
    }
  }
}
</script>

<style>
li {
  cursor: pointer;
}
</style>