<template>
  <div>
    <div class="drawArea">
      <NodeComponent
        v-for="(item, index) in data_arr"
        :key="index"
        :style="randomPosition()"
      />
    </div>
  </div>
</template>

<script>
import NodeComponent from '@/components/NodeComponent.vue';

export default {
  data() {
    return {
      data_arr: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  },
  components: {
    NodeComponent,
  },
  mounted() {

  },
  methods: {
    randomPosition() {
      const randomY = Math.random() * 300;
      const randomX = Math.random() * 600;
      const str = `top:${randomY}px; left:${randomX}px;`;
      return str;
    },
  },
};
</script>

<style scoped lang="scss">
.drawArea {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
