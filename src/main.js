import Vue from 'vue'
import App from './App.vue'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import SingleTodoDetails from './components/SingleTodoDetails'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import VueRouter from 'vue-router'
import { store } from './store/store'

Vue.use(VueRouter)


const routes = [
  {
    name:'login',
    path:'/',
    component:Login
  },
  {
    name:'logout',
    path:'/logout',
    component:Logout
  },
  {
    name:'register',
    path:'/register',
    component:Register
  },
  {
    name:'todos',
    path:'/todos',
    component:Todos
  },
  {
    name:'addtodo',
    path:'/add',
    component:AddTodo
  },
  {
    name:'todo',
    path:'/todo/:id',
    component:SingleTodoDetails
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
