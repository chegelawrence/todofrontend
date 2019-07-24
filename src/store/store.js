import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        todos:[],
        auth:{
            logged_in:false
        }
    },
    getters:{
        allTodos:(state) => state.todos,
        isLoggedIn:(state) => state.auth.logged_in 
    },
    actions:{
        //all async operations  go here
        initTodos({ commit,state }){
            axios.defaults.headers.common['Authorization'] = `Bearer ${state.auth.access_token}`
            axios.get('http://localhost:8081/todos')
            .then(res=>{
                commit('initTodos',res.data)
            }).catch(err=>{
                err
            })
        },
        searchTodo({ commit },title){
            commit('searchTodo',title)
        },
        addTodo({ commit,state },title){
            axios.defaults.headers.common['Authorization'] = `Bearer ${state.auth.access_token}`
            axios.post('http://localhost:8081/todos',{
                title
            })
            .then(res=>{
                commit('addTodo',res.data)
            }).
            catch(err=>{
                err
                alert('Failed')
            })
        },
        deleteTodo({ commit,state },id){
            axios.defaults.headers.common['Authorization'] = `Bearer ${state.auth.access_token}`
            axios.delete(`http://localhost:8081/todos/${id}`)
            .then(res=>{
                res
                commit('deleteTodo',id)
            })
            .catch(err=>{
                err
                alert('Failed')
            })
        },
        markComplete({ commit,state },id){
            axios.defaults.headers.common['Authorization'] = `Bearer ${state.auth.access_token}`
            axios.put(`http://localhost:8081/todos/${id}`)
            .then(res=>{
                commit('markComplete',res.data)
            })
            .catch(err=>{
                err
                alert(err)
            })
        },
        showComplete({ commit }){
            commit('showComplete')
        },
        showUncomplete({ commit }){
            commit('showUncomplete')
        },
        login({ commit },access_data){
            commit('login',access_data)
        },
        logout({ commit,state }){
            axios.defaults.headers.common['Authorization'] = `Bearer ${state.auth.access_token}`
            return new Promise((resolve,reject) => {
                axios.get('http://localhost:8081/logout')
                .then(res => {
                    commit('destroyToken')
                    resolve(res)
                })
                .catch(err => {
                    commit('destroyToken')
                    reject(err)
                })
            })
        }
    },
    //operations that change the state of our store
    mutations:{
        initTodos(state,todos){
            //display according to the newest todo
            state.todos = todos.reverse()
        },
        addTodo:(state,todo)=>state.todos = [todo,...state.todos],
        deleteTodo(state,id){
            state.todos = state.todos.filter(todo => todo.id !== id)
        },
        markComplete(state,updatedTodo){
            //remove old todo and insert the updated todo
            const index = state.todos.findIndex(todo => todo.id === updatedTodo.id)
            if(index !== -1){
                //replace this todo with the updated
                //todo from the server
                state.todos.splice(index, 1, updatedTodo)
            }
        },
        showComplete(state){
            state.todos = state.todos.filter(todo => todo.completed === 1)
        },
        showUncomplete(state){
            state.todos = state.todos.filter(todo => todo.completed === 0)
        },
        searchTodo(state,title){
            state,title
            //search todo here
        },
        login(state,access_data){
            //store user access token in the browser local storage
            localStorage.setItem('access_token',access_data.access_token)
            state.auth = access_data
        },
        destroyToken(state){
            //destroy user access token and logout 
            state.todos = []
            state.auth = {}
            state.auth.logged_in = false
            localStorage.removeItem('access_token')
        }
    }
})