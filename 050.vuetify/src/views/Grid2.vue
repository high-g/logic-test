<template>
  <v-container grid-list-md text-xs-center>
    <v-layout wrap row>
      <v-flex xs12>
        <v-card class="blue darken-4 white--text">
          <v-card-text>12</v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs11>
        <v-card class="blue darken-4 white--text">
          <v-card-text>11</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs1>
        <v-card class="blue darken-4 white--text">
          <v-card-text>1</v-card-text>
        </v-card>
      </v-flex>

      <v-flex v-for="i in 2" :key="`6${i}`" xs6>
        <v-card class="blue darken-3 white--text">
          <v-card-text>6</v-card-text>
        </v-card>
      </v-flex>

      <v-flex v-for="i in 2" :key="`5${i}`" xs5>
        <v-card class="blue darken-2 white--text">
          <v-card-text>5</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2>
        <v-card class="blue darken-2 white--text">
          <v-card-text>2</v-card-text>
        </v-card>
      </v-flex>

      <v-flex v-for="i in 3" :key="`4${i}`" xs4>
        <v-card class="blue darken-1 white--text">
          <v-card-text>4</v-card-text>
        </v-card>
      </v-flex>

      <v-flex v-for="i in 4" :key="`3${i}`" xs3>
        <v-card class="blue lighten-1 white--text">
          <v-card-text>3</v-card-text>
        </v-card>
      </v-flex>

      <v-flex v-for="i in 6" :key="`2${i}`" xs2>
        <v-card class="blue lighten-2 white--text">
          <v-card-text>2</v-card-text>
        </v-card>
      </v-flex>

      <v-flex v-for="i in 12" :key="`1${i}`" xs1>
        <v-card class="blue lighten-3 white--text">
          <v-card-text>1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>