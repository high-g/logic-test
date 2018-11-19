<template>
  <div class="list">
    <h1>User List</h1>
    <ListComponent class="display-flex justify-content-center"/>
  </div>
</template>

<script>
import ListComponent from '@/components/ListComponent.vue';

export default {
  components: {
    ListComponent,
  },
};
</script>

<style scoped lang="scss">

</style>
