<template>
  <div>
    <table>
      <tr>
        <td>name</td>
        <td><input type="text" v-model="name"></td>
      </tr>
      <tr>
        <td>age</td>
        <td><input type="text" v-model="age"></td>
      </tr>
      <tr>
        <td>comment</td>
        <td><input type="text" v-model="comment"></td>
      </tr>
      <tr>
        <td colspan="2"><button @click="registVal">登録</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import utils from '@/assets/js/utils'

export default {
  data() {
    return {
      name: '',
      age: '',
      comment: ''
    }
  },
  methods: {
    registVal() {
      const obj = {
        name: this.name,
        age: this.age,
        comment: this.comment
      }
      this.registProc(obj)
      this.resetVal()
    },
    registProc(obj) {
      const saveVal = utils.getLocalStrage()
      saveVal.push(obj)
      utils.setLocalStrage(saveVal)
    },
    resetVal() {
      this.name = ''
      this.age = ''
      this.comment = ''
    }
  }
}
</script>

<style scoped lang="scss">
</style>
