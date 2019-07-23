<template>
    <div>
        <nav>
            <dir class="nav-wrapper">
                <ul v-if="isLoggedIn" id="nav-mobile" class="left">
                    <li>
                        <router-link to="/todos">TODOS</router-link>
                    </li>
                    <li>
                        <router-link to="/add">ADD</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'logout' }">LOGOUT</router-link>
                    </li>
                    
                </ul>
                <ul v-else id="nav-mobile" class="left">
                    <li>
                        <router-link to="/register">REGISTER</router-link>
                    </li>
                    <li>
                        <router-link to="/">LOGIN</router-link>
                    </li>
                    
                </ul>
            </dir>
        </nav>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:"Header",
    computed:{
        ...mapGetters(['isLoggedIn'])
    }
}
</script>

