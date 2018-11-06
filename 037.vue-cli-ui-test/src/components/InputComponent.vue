<template>
  <div>
    <div class="table-wrap">
      <table> 
        <tr>
          <td><label for="input1">name</label><td>
          <td><input type="text" id="input1"></td>
        </tr>
        <tr>
          <td><label for="input2">age</label><td>
          <td><input type="text" id="input2"></td>
        </tr>
        <tr>
          <td><label for="input3">comment</label><td>
          <td><input type="text" id="input3"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
  },
};
</script>

<style scoped lang="scss">
.table-wrap {
  text-align: center;
}
</style>
