<template>
  <div>
    <button class="yes" @click="callYes">Yes</button>
    <button class="no" @click="callNo">No</button>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'YesNoComponent',
  data() {
    return {
      text: '',
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
};
</script>

<style>

</style>

