<template>
    <div class="row">
        <Header></Header>
        <div class="col s12 m12 l12">
            <form @submit.prevent="tryLogin">
                <div class="col s12 m12 l12 input-field">
                    <label for="username">Username</label>
                    <input type="text" v-model="username" autocomplete="off" id="username">
                </div>
                <div class="col s12 m12 l12 input-field">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" autocomplete="off" id="password">
                    <span class="error" v-show="error">Enter your account details</span>
                </div>
                <div class="col s12 m1 2l12 input-field">
                    <button type="submit" class="btn btn-flat paper-button white-text" style="background-color:blue;">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '../layout/Header'
import axios from 'axios' 
//import jwtDecode from 'jwt-decode'
export default {
    name:'Register',
    components:{
        Header
    },
    data(){
        return{
            username:'',
            password:'',
            error:false
        }
    },
    methods:{
        ...mapActions(['login']),
        validateForm(){
            if(this.username.trim() === '' || this.password === ''){
                return true
            }
            return false
        },
        tryLogin(){
            if(this.validateForm()){
                this.error = true
            }else{
                this.error = false
                axios.post('http://localhost:8081/',{username:this.username,password:this.password})
                .then(res => {
                    this.login(res.data)
                    this.$router.replace({name:'todos'})
                })
                .catch(err => {
                    alert(err.message)
                })
            }
        }
    }
}
</script>
<style scoped>
.error{
    color:red;
    font-size:11px;
}
</style>

