<template>
  <div>
    <v-toolbar class="blue darken-1">
      <v-toolbar-side-icon @click="menu"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>

    <v-container :class="{'d-none': !viewMenu}">
      aaa
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewMenu: false
    }
  },
  methods: {
    menu() {
      this.viewMenu = !this.viewMenu
    }
  }
}
</script>