<template>
  <div class="container">
    title：<input type="text" v-model="title"><br>
    explain：<input type="text" v-model="explain"><br>
    <button @click="setData">add</button>
    <ul>
      <li v-for="item in members" :key="item.key">
        {{ item.title }} | {{ item.explain }} | {{ item.created }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        explain: ''
      }
    },
    created() {
      this.$store.dispatch('member/init')
    },
    computed: {
      members() {
        return this.$store.state.member.member
      }
    },
    methods: {
      setData() {
        if(this.title && this.explain) {
          this.$store.commit('member/add', {
            title: this.title,
            explain: this.explain
          })
          this.title = ''
          this.explain = ''
          this.setBlobUrl()
        }
      },
      setBlobUrl() {

      }
    }
  }
</script>

<style>
</style>
