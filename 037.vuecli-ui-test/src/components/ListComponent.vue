<template>
  <div>
    <table>
      <tr><th>name</th><th>age</th><th>comment</th></tr>
      <tr v-for="(item, index) in list" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.comment}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import utils from '../assets/js/utils';

export default {
  name: 'ListComponent',
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.list = utils.getLocalStrage();
  },
};
</script>

<style scoped lang="scss">
table {
  border: solid #000 1px;
  th, td {
    border: solid #000 1px;
    padding: 5px 20px;
  }
}
</style>
