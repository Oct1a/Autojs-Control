import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () =>
  import ('../views/Index/Index')

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Index',
    components: Index
  },
  {
    path: '/home',
    name: 'Index',
    components: Index
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router