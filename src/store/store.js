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
            axios.get('http://localhost:9000/')
            .then(res=>{
                commit('initTodos',res.data)
            }).catch(err=>console.log(err))
        },
        addTodo({ commit },title){
            axios.post('http://localhost:9000/',{
                title
            })
            .then(res=>{
                commit('addTodo',res.data)
            }).
            catch(err=>{
                console.log(err)
            })
        },
        deleteTodo({ commit },id){
            axios.delete(`http://localhost:9000/${id}`)
            .then(res=>{
                commit('deleteTodo',id)
            })
            .catch(err=>console.log(err))
        },
        markComplete({ commit },id){
            axios.put(`http://localhost:9000/${id}`)
            .then(res=>{
                commit('markComplete',res.data)
            })
            .catch(err=>console.log(err))
        }
    },
    //operations that change the state of our store
    mutations:{
        initTodos(state,todos){
            state.todos = todos
        },
        addTodo:(state,todo)=>state.todos = [todo,...state.todos],
        deleteTodo(state,id){
            state.todos = state.todos.filter(todo => todo.id !== id)
        },
        markComplete(state,updatedTodo){
            //remove old todo and insert the updated todo
            const index = state.todos.findIndex(todo => todo.id === updatedTodo.id)
            if(index !== -1){
                state.todos.splice(index, 1, updatedTodo)
            }
        }
    }
})