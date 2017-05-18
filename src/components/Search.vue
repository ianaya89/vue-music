<template lang="html">
  <div> <!-- ⚠️ Este div es importante: todos los componentes deben tener un unico elemento principal -->
    <input type="text" v-model="query">
    <button type="button" @click="search">Search</button>

    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Search',

  data () {
    return {
      query: '',
      results: []
    }
  },

  methods: {
    search () {
      console.log(this.query)
    }
  }
}
</script>
