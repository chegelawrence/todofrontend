<template>
    <div class="row">
        <Header></Header>
        <div class="col s12 m12 l12">
            <form @submit.prevent="createAccount">
                <div class="col s12 m12 l12 input-field">
                    <label for="username">Username</label>
                    <input type="text" v-model="username" autocomplete="off" id="username">
                </div>
                <div class="col s12 m12 l12 input-field">
                    <label for="email">Email</label>
                    <input type="text" v-model="email" autocomplete="off" id="email">
                </div>
                <div class="col s12 m12 l12 input-field">
                    <label for="password">Password</label>
                    <input type="password" v-model="password" autocomplete="off" id="password">
                </div>
                <div class="col s12 m12 l12 input-field">
                    <label for="confirm_password">Confirm Password</label>
                    <input type="password" v-model="confirm_password" autocomplete="off" id="confirm_password">
                    <span class="error" v-show="error">One or more fields has errors</span>
                </div>
                <div class="col s12 m1 2l12 input-field">
                    <button type="submit" class="btn btn-flat paper-button white-text" style="background-color:blue;">Create account</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import Header from '../layout/Header'
import axios from 'axios'
export default {
    name:'Register',
    components:{
        Header
    },
    data(){
        return{
            username:'',
            email:'',
            password:'',
            confirm_password:'',
            error:false
        }
    },
    methods:{
        createAccount(){
            if(this.username.trim() === '' || this.password === '' || this.confirm_password === '' || this.email.trim() === '' || this.email.trim().lastIndexOf('@') === -1 || this.email.trim().lastIndexOf('.') === -1){
                this.error = true
            }else{
                const user = {username:this.username.trim(),email:this.email.trim(),password:this.password,confirm_password:this.confirm_password}
                axios.post('http://localhost:8081/register',user)
                .then(res => {
                    res
                    this.error = false
                    this.username = this.password = this.confirm_password = ''
                    this.$router.replace({name:'login'})
                })
                .catch(err => alert(err.message))
            }
        }
    }

}
</script>
<style scoped>
.error{
    color:red;
    font-size: 11px;
}
</style>

