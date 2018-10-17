import Vue from 'vue'

import Hello from './components/Hello.vue'
import Anchor from './components/Anchor.vue'
import AnchorLink from './components/AnchorLink.vue'
import EventButtons from './components/EventButtons.vue'

new Vue({
  el: '#app',
  data: {
    arguments: []
  },
  components: {
    Hello,
    Anchor,
    AnchorLink,
    EventButtons
  },
  methods: {
    onEventOne() {
      alert('Event 1')
    },
    onEventTwo(argument) {
      this.arguments = []
      this.arguments.push(argument)
    },
    onEventThree(arg1, arg2) {
      this.arguments = []
      this.arguments.push(arg1)
      this.arguments.push(arg2)
    }
  }
})
