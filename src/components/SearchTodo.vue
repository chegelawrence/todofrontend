<template>
    <input type="text" @keyup="searchTodo($event)" autocomplete="off" style="font-family:'Google Sans';" placeholder="Search todo by name">
</template>

<script>
export default {
    name:'SearchTodo',
    methods:{
        searchTodo(event){
            if(event.target.value.trim() !== ''){
                    this.$store.dispatch('searchTodo',event.target.value)
            }
        }
    }
}
</script>
