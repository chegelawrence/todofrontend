<template>
    <div>
        <button class="white-text" title="Show complete todos" @click="$emit('showComplete')">Complete</button>
        <button class="right white-text" title="Show uncomplete todos" @click="$emit('showUncomplete')">Uncomplete</button>
    </div>
</template>

<script>
export default {
    name:'FilterTodos'
}
</script>
<style scoped>
button,button:hover,button:active,button:focus{
    background-color:tomato;
    border: none;
    font-family: 'Google Sans';
    font-size: 13px;
    padding:10px;
    cursor: pointer;
}
</style>

