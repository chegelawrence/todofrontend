<template>
    <p style="margin-left:20px;color:blue;margin-bottom:-10px;cursor:pointer" @click="$emit('markComplete',todo.id)">Mark as <span v-if="todo.completed == 0">complete</span><span v-else>uncomplete</span></p>
</template>
<script>
export default {
    name:'MarkComplete',
    props:{
        todo:{
            type:Object,
            required:true
        }
    }
}
</script>

