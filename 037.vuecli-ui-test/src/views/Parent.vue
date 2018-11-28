<template>
  <div>
    <child text="感動">
      <div slot="areaA">
        <p>test</p>
        <p>ここがエリアAです。{{ currentCount }}</p>
        <button @click="countUpStore">vuex count</button>
      </div>
      <div slot="areaB">
        <p>{{ parentCnt }}</p>
      </div>
    </child>
    <keep-alive>
      <child text="激おこ" />
    </keep-alive>
    <child text="悲劇" />
    <p>emitTest: <emitTest @eventAdd="parentAdd" /> {{ parentCnt }}</p>
  </div>
</template>

<script>
import child from '@/components/ChildComponent.vue'
import emitTest from '@/components/EmitTestComponent.vue'

export default {
  components: {
    child,
    emitTest
  },
  data () {
    return {
      parentCnt: 0
    }
  },
  methods: {
    parentAdd (val) {
      this.parentCnt = val
    },
    countUpStore () {
      this.$store.dispatch('plusCount')
    }
  },
  computed: {
    currentCount () {
      return this.$store.getters.currentCount
    }
  }
}
</script>
