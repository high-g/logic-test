<template>
  <div>
    <button @click="add">emit test {{ cnt }}</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cnt: 0
    }
  },
  methods: {
    add () {
      this.cnt++;
      this.$emit('eventAdd');
    }
  }
}
</script>
