<template>
  <div>
    <button @click="add">{{ text }}{{ num }}</button>
    <slot name="areaA"></slot> <slot name="areaB"></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  },
  data() {
    return {
      num: 0
    }
  },
  methods: {
    add() {
      this.num++
    }
  }
}
</script>
