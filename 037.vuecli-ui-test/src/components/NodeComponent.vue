<template>
  <div class="node square" @click="nodeAddEmit">{{text}}</div>
</template>

<script>
export default {
  data() {
    return {
      text: 'test',
    };
  },
  methods: {
    nodeAddEmit() {
      this.$emit('event-node-add');
    },
  },
};
</script>

<style>
.node {
  position: absolute;
  width: 60px;
  height: 60px;
}
.square {
  background: #f00;
}
.circle {
  border-radius: 10px;
}
</style>
