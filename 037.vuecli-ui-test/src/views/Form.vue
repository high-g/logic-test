<template>
  <div>
    <div class="area">
      <h1>test1</h1>
      <input v-model="message" placeholder="edit me">
      <p>Message is: {{ message }}</p>
    </div>
    <div class="area">
      <h1>test2</h1>
      <textarea v-model="message2" placeholder="multiple lines"></textarea>
      <p class="preline">{{ message2 }}</p>
    </div>
    <div class="area">
      <h1>test3</h1>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
      message2: '',
      checked: '',
    };
  },
};
</script>

<style scoped lang="scss">
.area {
  border: 1px #666 solid;
  margin-bottom: 30px;
}
</style>
