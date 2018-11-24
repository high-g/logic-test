<template>
  <div>
    <child text="感動" />
    <child text="激おこ" />
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
