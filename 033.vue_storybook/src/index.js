import Vue from 'vue'

import Hello from './components/Hello.vue'
import Anchor from './components/Anchor.vue'
import AnchorLink from './components/AnchorLink.vue'

new Vue({
  el: '#app',
  components: {
    Hello,
    Anchor,
    AnchorLink
  }
})
