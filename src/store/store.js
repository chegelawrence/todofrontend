import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        todos:[]
    },
    getters:{
        allTodos:(state)=>state.todos
    },
    actions:{
        //all async operations  go here
        initTodos({ commit }){
            axios.get('http://localhost:8081/')
            .then(res=>{
                commit('initTodos',res.data)
            }).catch(err=>{
                err
                alert('Failed to fetch data')
            })
        },
        searchTodo({ commit },title){
            commit('searchTodo',title)
        },
        addTodo({ commit },title){
            axios.post('http://localhost:8081/',{
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
        deleteTodo({ commit },id){
            axios.delete(`http://localhost:8081/${id}`)
            .then(res=>{
                res
                commit('deleteTodo',id)
            })
            .catch(err=>{
                err
                alert('Failed')
            })
        },
        markComplete({ commit },id){
            axios.put(`http://localhost:8081/${id}`)
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
        }
    }
})