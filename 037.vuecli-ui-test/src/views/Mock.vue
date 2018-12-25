<template>
  <div>
    <div class="drawArea">
      <NodeComponent
        v-for="(item, index) in data_arr"
        :key="index"
        :style="randomPosition()"
        @event-node-add="nodeAdd"
      />
    </div>
  </div>
</template>

<script>
import NodeComponent from "@/components/NodeComponent.vue"

export default {
  data() {
    return {
      data_arr: []
    }
  },
  components: {
    NodeComponent
  },
  mounted() {
    this.data_arr = [
      {
        text: "hello",
        type: "noun",
        top: 300,
        left: 600
      },
      {
        text: "うごく",
        type: "verb",
        top: 150,
        left: 400
      },
      {
        text: "テスト",
        type: "noun",
        top: 400,
        left: 100
      },
      {
        text: "大島",
        type: "noun",
        top: 100,
        left: 500
      },
      {
        text: "きれい",
        type: "adjective",
        top: 75,
        left: 300
      },
      {
        text: "言葉",
        type: "noun",
        top: 300,
        left: 10
      },
      {
        text: "ランダム",
        type: "noun",
        top: 200,
        left: 530
      },
      {
        text: "時計",
        type: "noun",
        top: 10,
        left: 450
      }
    ]
  },
  methods: {
    randomPosition() {
      const randomY = Math.random() * 300
      const randomX = Math.random() * 600
      const str = `top:${randomY}px; left:${randomX}px;`
      return str
    },
    nodeAdd() {
      this.data_arr.push(1)
    }
  }
}
</script>

<style scoped lang="scss">
.drawArea {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
