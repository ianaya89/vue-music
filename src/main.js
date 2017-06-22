import Vue from 'vue'
import App from './App.vue'

Vue.filter('comma-list', (val) => {
  if (!val || !val.genres) { return '' }

  return val.join(', ')
})

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
})
