import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/questions',
      name: 'questions',
      component: () => import(/* webpackChunkName: "about" */ './views/Questions.vue')
    },
    {
      path: '/finish',
      name: 'finish',
      component: () => import(/* webpackChunkName: "about" */ './views/Finish.vue')
    },
    {
      path: '/stats',
      name: 'stats',
      component: () => import(/* webpackChunkName: "about" */ './views/Stats.vue')
    },
    {
      path: '*', // or '/index.html'
      beforeEnter: (to, from, next) => {
        next('/')
      }
    }
  ]
})
