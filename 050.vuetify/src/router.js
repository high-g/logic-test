import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Grid from './views/Grid.vue'
import Grid2 from './views/Grid2.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/grid',
      component: Grid
    },
    {
      path: '/grid2',
      component: Grid2
    }
  ]
})
