import './app.scss'
import Vue from 'vue'

import Hello from './components/Hello.vue'
import Anchor from './components/Anchor.vue'
import AnchorLink from './components/AnchorLink.vue'
import EventButtons from './components/EventButtons.vue'
import NumberGuess from './components/NumberGuess.vue'

new Vue({
  el: '#app',
  data: {
    arguments: [],
    message: 'スタートボタンを押してください',
    tryCountLeft: 0
  },
  components: {
    Hello,
    Anchor,
    AnchorLink,
    EventButtons,
    NumberGuess
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
    },
    onStart(tryCountLeft) {
      this.message = 'スタート'
      this.tryCountLeft = tryCountLeft
    },
    onCollect(tryCountLeft) {
      this.message = '当たり'
      this.tryCountLeft = tryCountLeft
    },
    onLower(tryCountLeft) {
      this.message = '答えは入力値より小さい'
      this.tryCountLeft = tryCountLeft
    },
    onHigher(tryCountLeft) {
      this.message = '答えは入力値より大きい'
      this.tryCountLeft = tryCountLeft
    },
    onLose(tryCountLeft) {
      this.message = 'ゲームオーバー'
      this.tryCountLeft = tryCountLeft
    }
  }
})
