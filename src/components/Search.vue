<template lang="html">
  <div> <!-- ⚠️ Este div es importante: todos los componentes deben tener un unico elemento principal -->

    <a href="#" @click.prevent="reset">x</a>
    <input type="text" v-model="query" @keyup.enter="search" placeholder="🔎  Search here...">
    <button type="button" @click="search">Search</button>
    <small>{{ found }}</small>

    <ul>
      <artist v-for="r in results" :artist="r" :key="r.id"></artist>
    </ul>

    <h3 v-if="results.length === 0">
      No results
    </h3>
  </div>
</template>

<script>
  import Artist from './Artist.vue'
  import spotify from '../services/spotify'

  export default {
    name: 'Search',

    components: { Artist },

    data () {
      return {
        query: '',
        results: []
      }
    },

    computed: {
      found () {
        return this.results.length
          ? `${this.results.length} items` : ''
      }
    },

    // watch: {
    //   query (n, o) {
    //     console.log(n, o)
    //   }
    // },

    created () {
      if (location.pathname === '/') { return }

      // El primer caracter es '/' por lo cual vamos a omitirlo
      this.query = location.pathname.substring(1)
      this.search()
    },

    methods: {
      search () {
        // Hardcodeamos el parametro type con el valor "artits"
        spotify.search(this.query, 'artist')
          .then(res => {
            console.log(res)
            this.results = res.artists.items
          })
      },

      reset () {
        this.query = ''
        this.results = []
      }
    }
  }
</script>

<style scoped>
  ul {
    display: flex;
    flex-wrap: wrap;
  }
</style>
