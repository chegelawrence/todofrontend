<template>
    <div class="row">
        <header></header>
        <div class="card" style="border-radius:5px;">
            <div class="card-content">
                <p class="card-title" style="font-size:15px;">{{ todo.title }}</p>
                <p>Completed: <span v-if="todo.completed === 0">False</span><span v-else>True</span></p>
                <p>Date created: {{ todo.date_created }}</p>
            </div>
            <div class="card-footer">
                <back-button></back-button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './layout/Header'
export default {
    name:'SingleTodoDetails',
    components:{
        'header':Header
    },
    data(){
        return {
            todo:{}
        }
    },
    created(){
        this.todo = this.$store.state.todos.filter(todo => todo.id === parseInt(this.$route.params.id)) 
    }
}
</script>
