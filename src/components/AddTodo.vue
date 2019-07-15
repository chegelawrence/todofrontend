<template>
    <div class="col s12 m12 l12">
        <Header></Header>
        <h3 class="center-align">Enter title</h3>
        <div class="col s12 m12 l12 card">
            <form @submit.prevent="addNewTodo(title)" class="card-content">
                <div class="input-field col s12 m12 l12">
                    <label for="title">Title</label>
                    <input type="text" v-model="title" id="title" autocomplete="off">
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
import { mapActions } from 'vuex'
export default {
    name:"AddTodo",
    components:{
        Header
    },
    data(){
        return{
           title:''
        }
    },
    methods:{
        ...mapActions(['addTodo']),
        addNewTodo(title){
            if(this.title.trim() === ''){
                alert('Enter a title')
            }else{
                this.addTodo(title)
                this.$router.push({name:'todos'})
            }
            
        }
    }
}
</script>

