import Vue from 'vue'

import Hello from './components/Hello.vue'
import Anchor from './components/Anchor.vue'

new Vue({
  el: '#app',
  components: {
    hello: Hello,
    anchor: Anchor
  }
})
