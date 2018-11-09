<template>
  <div class="list">
    <h1>User List</h1>
    <ListComponent/>
  </div>
</template>

<script>
import ListComponent from '@/components/ListComponent.vue';

export default {
  name: 'list',
  components: {
    ListComponent,
  },
};
</script>
