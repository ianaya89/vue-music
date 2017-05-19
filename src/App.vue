<template>
  <div id="app">
    <h1>Vuetify</h1>
    <hr>
    <search></search>
  </div>
</template>

<script>
  import Search from './components/Search.vue'

  export default {
    name: 'app',

    components: { Search }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: #42b983;
}
</style>
