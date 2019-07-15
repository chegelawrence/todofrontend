<template>
    <button class="btn-flat paper-button" @click="$emit('deleteTodo',todo.id)">Delete</button>
</template>
<script>
export default {
    name:'DeleteTodoButton',
    props:{
        todo:{
            type:Object,
            required:true
        }
    }
}
</script>

