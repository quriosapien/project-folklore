<template>
  <input
    v-model="searchTerm"
    type="text"
    class="searchbox"
    placeholder="Search for any song ..."
    @input="newSearch">
  <ul class="search-results">
    <li
      v-for="(item, index) in result.songs"
      class="search-results-items"
      :key="index"
      @click="updateAudioTrack({ trackUrl: item.previewUrl})">
      <div class="artwork">
        <img :src="item.artworkUrl60" :alt="item.artistName">
      </div>
      <div class="details">
        <p class="trackname">{{ item.trackName }}</p>
        <p class="album">Album: {{ item.collectionName }}</p>
        <p class="artist">Artist: {{ item.artistName }}</p>
      </div>
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
          fetch(`/api/search?term=${key}`)
            .then(res => res.json())
            .then(res => {
              console.log(res)
              this.updateSearchResults(res)
            })
        },
        delay: 400
      })
    },
    updateSearchResults ({ results }) {
      const songs = results.filter(x => x.kind === 'song')
      this.result = {
        length: songs.length,
        songs
      }
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

<style lang="scss">
.searchbox {
  padding: 5px 8px;
  border-radius: 8px;
  border: 1px solid lightseagreen;
  box-shadow: 0px 0px 5px 2px lightseagreen;
  width: 80%;
  max-width: 400px;
  &:focus {
    outline: none;
  }
}

.search-results {
  list-style-type: none;
  padding: 5px;
  max-width: 600px;
  margin: 20px auto;

  &-items {
    border-radius: 8px;
    box-shadow: 0px 0px 5px 2px lightgray;
    background-color: rgba(230, 230, 230, 0.4);
    display: flex;

    cursor: pointer;
    padding: 5px 10px;
    margin: 8px auto;

    font-size: 1rem;
    &:hover {
      font-weight: bold;
      background-color: lightseagreen;
    }
    .artwork {
      margin-right: 20px;
    }
    .details {
      text-align: left;
      .trackname {
        margin: 0px;
        font-weight: bold;
      }
      .album, .artist {
        margin: 0px;
        font-size: 0.9rem;
      }
    }
  }
}
</style>