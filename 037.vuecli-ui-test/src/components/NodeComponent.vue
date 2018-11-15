<template>
  <div class="node square">{{text}}</div>
</template>

<script>
export default {
  data() {
    return {
      text: 'test',
    };
  },
};
</script>

<style>
.node {
  position: absolute;
}
.square {
  width: 40px;
  height: 40px;
  background: #f00;
}
.circle {
  width: 40px;
  height: 40px;
  border-radius: 10px;
}
</style>
