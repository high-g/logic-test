<template>
  <div>
    <button class="yes" @click="callYes">Yes</button>
    <button class="no" @click="callNo">No</button>
    <p>{{ showText }}</p>
    <p>{{ reversedMessage }}</p>
    <div>
      <input type="text" v-model="inputMessage" maxlength="10">
      <p>{{ inputMessage }}</p>
    </div>
    <div>
      <input type="checkbox" value="taro" id="taro" v-model="checkedName">
      <label for="taro">taro</label>
      <input type="checkbox" value="jiro" id="jiro" v-model="checkedName">
      <label for="jiro">jiro</label>
      <input type="checkbox" value="saburo" id="saburo" v-model="checkedName">
      <label for="saburo">saburo</label>
      <p v-for="(value, index) in checkedName" :key="index">{{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YesNoComponent',
  data() {
    return {
      text: '',
      message: 'Hello.',
      cnt: 0,
      inputMessage: '',
      checkedName: [],
    };
  },
  methods: {
    callMe(text) {
      this.text = text;
    },
    callYes() {
      this.callMe('yes');
    },
    callNo() {
      this.callMe('no');
    },
  },
  computed: {
    showText() {
      return this.text + this.cnt;
    },
    reversedMessage() {
      return this.message.split('').reverse('').join('');
    },
  },
  watch: {
    text() {
      this.cnt += 1;
    },
  },
};
</script>

<style>

</style>

