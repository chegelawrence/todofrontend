<template>
    <div></div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:'Logout',
    methods:{
        ...mapActions(['logout']),
        destroySession(){
            this.logout().then(res=>{
                res
                this.$router.push({name:'login'})
            })
            .catch(err => {
                err
                this.$router.push({name:'login'})
            })
        }
    },
    created(){
        this.destroySession()
    }
}
</script>
