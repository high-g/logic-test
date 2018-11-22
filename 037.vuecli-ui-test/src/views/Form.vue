<template>
  <div>
    <test class="area" />
    <hr>
    <div class="area">
      <h2>test1</h2>
      <input v-model="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>
    </div>
    <div class="area">
      <h2>test2</h2>
      <textarea v-model="message2" placeholder="multiple lines"></textarea>
      <p class="preline">{{ message2 }}</p>
    </div>
    <div class="area">
      <h2>test3</h2>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
    </div>
  </div>
</template>

<script>
import test from '@/components/TestComponent.vue'

export default {
  components: {
    test
  },
  data () {
    return {
      message: '',
      message2: '',
      checked: false
    }
  }
}
</script>

<style scoped lang="scss">
.area {
  margin-bottom: 80px;
}
</style>
