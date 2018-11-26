<template>
  <div>
    <child text="感動">
      <div slot="areaA">
        <p>test</p>
        <p>ここがエレアAです。</p>
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
      this.parentCnt = val;
    }
  }
}
</script>
