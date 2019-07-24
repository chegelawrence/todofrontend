<template>
    <div class="row">
        <div class="card" style="border-radius:5px;">
            <div class="card-content">
                <p class="card-title" style="font-size:15px;">{{ todo.title }}</p>
                <p>Completed: <span v-if="todo.completed === 0">False</span><span v-else>True</span></p>
                <p>Date created: {{ todo.date_added }}</p>
            </div>
            <div class="card-footer">
                <back-button></back-button>
            </div>
        </div>
    </div>
</template>

<script>
import BackButton from './BackButton'
import { mapGetters } from 'vuex'
export default {
    name:'SingleTodoDetails',
    components:{
        'back-button':BackButton
    },
    beforeRouteEnter(to,from,next){
        //go to login if user is not logged in
        next(vm => {
            if(!vm.isLoggedIn){ vm.$router.replace({name: 'login'}) }
        })
    },
    beforeUpdate(to,from,next){
       this.todo = this.$store.state.todos.find(todo => todo.id === parseInt(to.params.id))
    },
    data(){
        return {
            todo:{}
        }
    },
    methods:{
        getTodo(){
            this.todo = this.$store.state.todos.find(todo => todo.id === parseInt(this.$route.params.id))
        }
    },
    watch:{
        '$route':'getTodo'
    },
    computed:{
        ...mapGetters(['isLoggedIn'])
    },
    created(){
        this.getTodo()
    }
}
</script>
