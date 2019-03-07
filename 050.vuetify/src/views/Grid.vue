<template>
  <v-container>
    <v-card>
      <v-card-title class="font-weight-bold pb-0">新規会員登録フォーム</v-card-title>
      <v-card-text>現在Vuetify習得に向けて学習中です。</v-card-text>
      <v-btn class="black white--text font-weight-bold">テスト</v-btn>
      <v-btn round class="font-weight-bold red lighten-5 blue--text">テスト</v-btn>
      <v-btn outline class="green">テスト</v-btn>
    </v-card>
    <v-card class="mt-3">
      <v-card-title>第二カードコンポーネント</v-card-title>
      <v-select
        class="px-5"
        solo
        type="date"
      ></v-select>
      <v-textarea
        class="mt-0"
        solo
        label="Solo textarea"
        auto-grow
        rows="2"
        value=""
        placeholder="勉強中！勉強中！"
      ></v-textarea>
    </v-card>
  </v-container>
</template>
