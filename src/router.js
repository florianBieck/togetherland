import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home')
    },
    {
      path: '/event/:idevent',
      name: 'event',
      props: true,
      component: () => import('./views/Event.vue')
    },
    {
      path: '/map/:idevent',
      name: 'map',
      props: true,
      component: () => import('./views/EventMap.vue')
    }
  ]
})
