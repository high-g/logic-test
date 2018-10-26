<template>
  <div>
    <myheader></myheader>
    <p v-if="msg.length > 0">{{ msg }}</p>
    <p v-else>no text</p>
    <input type="text" v-model="msg">
    <button @click="clear()">clear</button>
  </div>
</template>

<script>
import myheader from './components/myheader.vue'

export default {
  components: {
    myheader
  },
  data() {
    return {
      msg: 'Hello World'
    }
  },
  methods: {
    clear() {
      this.msg = ''
    },
  },
  created() {
    var that = this
    $.getJSON(
      'http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US&callback=?',
      {},
      function(json) {
        console.log(json)
        that.msg = json.postalcodes[0].adminName1
      }
    )
  }
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
</style>
