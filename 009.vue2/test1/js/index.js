(function() {

  'use strict';

  // var vm = new Vue({
  //   el: '#app',
  //   data: {
  //     name: 'tani'
  //   }
  // });

  var vm = new Vue({
    el: '#app',
    data: {
      newItem: '',
      todos: [
        // // 'task 1',
        // // 'task 2',
        // // 'task 3'
        // {
        //   title: 'task1',
        //   isDone: false
        // },
        // {
        //   title: 'task2',
        //   isDone: false
        // },
        // {
        //   title: 'task3',
        //   isDone: true
        // }
      ]
    },
    mounted: function() {
      this.todos = JSON.parse(localStorage.getItem('test_todos')) || [];
    },
    watch: {
      // todos: function() {
      //   localStorage.setItem('test_todos', JSON.stringify(this.todos));
      //   console.log('data saved');
      // }
      todos: {
        handler: function() {
          localStorage.setItem('test_todos', JSON.stringify(this.todos));
          //console.log('data saved');
        },
        deep: true
      }
    },
    methods: {
      addItem: function(e) {
        //e.preventDefault();
        var item = {
          title: this.newItem,
          isDone: false
        };
        this.todos.push(item);
        this.newItem = '';
      },
      deleteItem: function(index) {
        if(confirm('are you sure ?')) {
          this.todos.splice(index, 1);
        }
      },
      purge: function(index) {
        if(confirm('all delete ?')) {
          this.todos = this.remaining;
        }
      }
    },
    computed: {
      remaining: function() {
        var items = this.todos.filter(function(todo) {
          return !todo.isDone;
        });
        return items;
      }
    }
  });

})();