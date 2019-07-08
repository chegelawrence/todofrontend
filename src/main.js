import Vue from 'vue'
import App from './App.vue'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import VueRouter from 'vue-router'
import { store } from './store/store'

Vue.use(VueRouter)


const routes = [
  {
    name:'todos',
    path:'/',
    component:Todos
  },
  {
    name:'addtodo',
    path:'/add',
    component:AddTodo
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
