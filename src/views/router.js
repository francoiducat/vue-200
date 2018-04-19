import VueRouter from 'vue-router'
import Home from './Home.vue'

const routes = [
  {name: "home", path: "/home", component: Home}
]

export default new VueRouter({
  routes
})
