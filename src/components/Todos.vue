<template>
  <div class="col s12 m12 l12">
    <Header></Header>
    <search-todo></search-todo>
    <filter-todos @showComplete="showComplete" @showUncomplete="showUncomplete"></filter-todos>
    <div v-for="todo in allTodos" :key="todo.id">
      <show-todo :todo="todo"></show-todo>
    </div>
  </div>
</template>

<script>
import Header from "./layout/Header"
import Todo from "./Todo"
import SearchTodo from "./SearchTodo"
import FilterTodos from './FilterTodos'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "Todos",
  components:{
    "show-todo":Todo,
    'search-todo':SearchTodo,
    'filter-todos':FilterTodos,
    Header
  },
  beforeRouteEnter(to,from,next){
    next(vm => {
      if(!vm.isLoggedIn){ vm.$router.replace({name:'login'})}
    })
  },
  methods:{
    ...mapActions(['initTodos','showComplete','showUncomplete'])
  },
  computed:mapGetters(['allTodos','isLoggedIn']),
  created(){
    this.initTodos()
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
