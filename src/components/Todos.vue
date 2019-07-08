<template>
  <div class="col s12 m12 l12">
    <Header></Header>
    <div v-for="todo in allTodos" :key="todo.id">
      <show-todo :todo="todo"></show-todo>
    </div>
  </div>
</template>

<script>
import Header from "./layout/Header"
import Todo from "./Todo"
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "Todos",
  components:{
    "show-todo":Todo,
    Header
  },
  methods:{
    ...mapActions(['initTodos'])
  },
  computed:mapGetters(['allTodos']),
  created(){
    this.initTodos()
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
