<template>
  <div>
    <child text="感動" />
    <child text="激おこ" />
    <child text="悲劇" />
  </div>
</template>

<script>
import child from '@/components/ChildComponent.vue'

export default {
  components: {
    child
  }
}
</script>
