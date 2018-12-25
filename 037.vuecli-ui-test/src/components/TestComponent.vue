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
      <h2>watch</h2>
      <input type="text" v-model="question" />
      <p>{{ now_question }}</p>
    </div>
    <div class="area">
      <h2>v-bind</h2>
      <p :class="className">表示</p>
      <p :class="{ 'non-active': isHidden }">
        このエリアにnon-activeクラスが適応されると非表示になります。
      </p>
      <p :class="classObject">クラスのオブジェクト指定</p>
      <p :style="styleObject">スタイルのオブジェクト指定</p>
      <p>maxlengthのバインディングテスト<input :maxlength="max" /></p>
      <button @click="isHidden = !isHidden">表示制御</button>
    </div>
    <div class="area">
      <h2>条件付きレンダリング</h2>
      <p v-if="ifTestShow">if</p>
      <p v-else>else</p>
      <p v-show="ifTestShow">show</p>
      <p v-show="ifTestHidden">hidden</p>
      <button @click="showControl">切り替え制御</button>
    </div>
    <div class="area">
      <h2>リストレンダリング - オブジェクト</h2>
      <ul>
        <li v-for="(item, key) in list" :key="key">
          {{ item.user }}：{{ item.message }}
        </li>
      </ul>
    </div>
    <div class="area">
      <h2>リストレンダリング - 配列</h2>
      <span class="p-l10" v-for="(item, key) in arr" :key="key">{{
        item
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cnt: 0,
      w: 200,
      h: 400,
      v: 300,
      question: "",
      now_question: "",
      old_question: "",
      className: "non-active",
      isHidden: false,
      classObject: {
        active: true,
        "text-danger": true
      },
      styleObject: {
        "font-size": "20px",
        color: "#0f0"
      },
      max: 10,
      ifTestShow: true,
      ifTestHidden: false,
      list: [
        { user: "a", message: "abcdefg" },
        { user: "アボカド", message: "アボアボアボアボ" },
        { user: "ラーメン大好き人間", message: "トリパイタン！" },
        { user: "究極職人", message: "おれ完璧主義者" }
      ],
      arr: [1, "ab", 3, "jjj", 99, "ko"]
    }
  },
  methods: {
    increment() {
      this.cnt++
    },
    decrement() {
      this.cnt--
    },
    widthIncrement() {
      this.w++
    },
    calcArea() {
      return this.w
    },
    showControl() {
      this.ifTestShow = !this.ifTestShow
      this.ifTestHidden = !this.ifTestHidden
    }
  },
  computed: {
    area() {
      return this.w * this.h
    },
    volume() {
      return this.w * this.h * this.v
    }
  },
  watch: {
    question: function(newQuestion, oldQuestion) {
      this.now_question = newQuestion
      this.old_question = oldQuestion
    }
  }
}
</script>

<style lang="scss" scoped>
.area {
  margin-bottom: 60px;
}
.active {
  display: block;
}
.non-active {
  display: none;
}
.text-danger {
  color: red;
}
</style>
