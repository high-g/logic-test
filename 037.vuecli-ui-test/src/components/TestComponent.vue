<template>
	<div class="blog-post">
    <div class="area">
      <h2>count</h2>
      <p>cnt: {{ cnt }}</p>
      <button @click="increment">＋</button>
      <button @click="decrement">ー</button>
    </div>
    <div class="area">
      <h2>area, volume</h2>
      <p>{{ area }}</p>
      <p>{{ volume }}</p>
      <p>{{ calcArea() }}</p>
      <button @click="widthIncrement">width加算</button>
    </div>
    <div class="area">
      <input type="text" v-model="question">
      <p>{{ now_question }}</p>
    </div>
	</div>
</template>

<script>
export default {
	data () {
		return {
      cnt: 0,
      w: 200,
      h: 400,
      v: 300,
      question: '',
      now_question: ''
    }
	},
  methods: {
    increment() {
      this.cnt++
    },
    decrement() {
      this.cnt--
    },
    widthIncrement () {
      this.w++
    },
    calcArea () {
      return this.w
    }
  },
  computed: {
    area () {
      return this.w * this.h
    },
    volume () {
      return this.w * this.h * this.v
    }
  },
  watch: {
    question: function(newQuestion, oldQuestion) {
      console.log('newQuestion, oldQuestion', newQuestion, oldQuestion);
      this.now_question = newQuestion
    }
  }
}
</script>

<style lang="scss" scoped>
.area {
  margin-bottom: 20px;
}
</style>
