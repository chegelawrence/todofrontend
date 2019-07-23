<template>
    <div class="card" style="border-radius:5px;">
        <div class="card-content">
            <p class="card-title" style="font-size:15px;">{{ todo.title }}</p>
            <p>Completed: <span v-if="todo.completed === 0">False</span><span v-else>True</span></p>
        </div>
        <div class="card-footer">
            <!--catch the deleteTodo event emitted from DeleteTodoButton  component-->
            <delete-button :todo="todo" @deleteTodo="deleteTodo(todo.id)"></delete-button>
            <span class="right" id="moreBtn"><a @click="moreDetails(todo.id)">More</a></span>
            <mark-complete :todo="todo" @markComplete="markComplete(todo.id)"></mark-complete>
            
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import DeleteTodoButton from './DeleteTodoButton'
import MarkComplete from './MarkComplete'
export default {
    name:"Todo",
    components:{
        'delete-button':DeleteTodoButton,
        'mark-complete':MarkComplete
    },
    props:{
        todo:{
            required:true,
            type:Object
        }
    },
    methods:{
        ...mapActions(['deleteTodo','markComplete']),
        moreDetails(id){
            //todo id is provided as  a parameter
            const res = `/todo/${id}`
            this.$router.push(res)
        }
    }
}
</script>
<style scoped>
.paper-button{
    color:#fff;
    background-color:crimson;
    text-transform:none;
    margin-bottom: 10px;
    margin-left:20px;
}
#moreBtn{
    margin-right:20px;
    cursor: pointer;
}
</style>


