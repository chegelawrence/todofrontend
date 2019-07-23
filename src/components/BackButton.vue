<template>
    <button @click="goBack" class="btn-flat paper-button">Go Back</button>
</template>

<script>
export default {
    name:'BackButton',
    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
}
</script>