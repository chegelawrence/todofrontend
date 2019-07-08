<template>
    <div class="card" style="border-radius:5px;">
        <div class="card-content">
            <p class="card-title" style="font-size:15px;">{{ todo.title }}</p>
            <p>Completed: <span v-if="todo.completed == 0">False</span><span v-else>True</span></p>
        </div>
        <div class="card-footer">
            <button class="btn-flat paper-button" @click='deleteTodo(todo.id)'>Delete</button>
            <p style="margin-left:20px;color:blue;margin-bottom:-10px;cursor:pointer" @click=markComplete(todo.id)>Mark as <span v-if="todo.completed == 0">complete</span><span v-else>uncomplete</span></p>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name:"Todo",
    props:{
        todo:{
            required:true,
            type:Object
        }
    },
    methods:{
        ...mapActions(['deleteTodo','markComplete'])
    }
}
</script>
<style>
.paper-button{
    color:#fff;
    background-color:crimson;
    text-transform:none;
    margin-bottom: 10px;
    margin-left:20px;
}
</style>


