<template>
  <div class="container">
    <section class="mb20">
      <h1>Hello!</h1>
      <nuxt-link to="/about">About Page</nuxt-link>
    </section>
    <section>
      <div class="mb20">
        <h2>アプリ名</h2>
        <input type="text" v-model="newItem"> <button @click="addItem">add</button>
      </div>
      <ul>
        <li v-for="todo in todos">{{ todo.item }}</li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Index'
    },
    asyncData(context) {
      return { name: 'World' }
    },
    data() {
      return {
        newItem: '',
        todos: []
      }
    },
    methods: {
      addItem() {
        const todo = {
          item: this.newItem
        }
        this.todos.push(todo)
        this.newItem = ''
      }
    }
  }
</script>

<style>
  .mb20 {
    margin-bottom: 20px;
  }
</style>