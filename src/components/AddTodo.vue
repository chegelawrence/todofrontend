<template>
    <div class="col s12 m12 l12">
        <Header></Header>
        <h3 class="center-align">Add a new todo below</h3>
        <div class="col s12 m12 l12 card">
            <form @submit.prevent="addNewTodo(title)" class="card-content">
                <div class="input-field col s12 m12 l12">
                    <input type="text" placeholder="Enter title" @keyup="checkTitleisEmpty" style="font-family:'Google Sans';" v-model="title" id="title" autocomplete="off">
                    <span class="error" v-show="error.isError">{{ error.msg }}</span>
                </div>
                <div class="input-field col s12 m12 l12">
                    <button type="submit" class="btn">Add</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import Header from "./layout/Header"
import { mapActions,mapGetters } from 'vuex'
export default {
    name:"AddTodo",
    components:{
        Header
    },
    data(){
        return{
           title:'',
           error:{
               isError:false,
               msg:''
           }
        }
    },
    beforeRouteEnter(to,from,next){
    next(vm => {
      if(!vm.isLoggedIn){ vm.$router.replace({name:'login'})}
    })
  },
    beforeRouteLeave(to,from,next){
        if(this.title.trim() !== ''){
            const ans = window.confirm('Leave this page?Changes have not been saved')
            if(ans){ next() }else{ next(false) }
        }else{
            next()
        }
    },
    methods:{
        ...mapActions(['addTodo']),
        addNewTodo(title){
            if(this.title.trim() === ''){
                this.error.isError = true
                this.error.msg = 'Enter a title'
            }else{
                this.addTodo(title)
                this.title = ''
                this.error.isError = false
                this.error.msg = ''
                this.$router.push({name:'todos'})
            }
            
        },
        checkTitleisEmpty(){
            if(this.title.trim() === ''){
                this.error.isError = true
                this.error.msg = 'Enter a title'
            }else{
                this.error.isError = false
                this.error.msg = ''
            }
        }
    },
    computed:{
        ...mapGetters(['isLoggedIn'])
    }
}
</script>
<style scoped>
.error{
    color:red;
    font-size: 11px;
}
</style>


