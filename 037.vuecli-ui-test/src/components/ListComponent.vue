<template>
  <div>
    <ul>
      <li v-for="(val, index) of list" :key="index">{{val}}</li>
    </ul>
  </div>
</template>

<script>
import utils from '../assets/js/utils';

export default {
  name: 'ListComponent',
  data() {
    return {
      list: []
    };
  },
  watch: {
  },
};
</script>

<style scoped lang="scss">

</style>

