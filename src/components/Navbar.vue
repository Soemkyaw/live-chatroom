<template>
  <nav class="flexing" v-if="user">
            <div class="loginUser">
                <span class="userName">Hey {{ user.displayName }}</span>
                <span class="userEmail">log in as {{ user.email }}</span>
            </div>
            <button class="logoutBtn" @click="logoutFun">Logout</button>
        </nav>
</template>

<script>
import { ref } from 'vue'
import { auth } from "../firebase/config"
import getUser from "../composable/getUser"
import logout from "../composable/logout"
export default {
    setup() {
        let {error,userLogout} = logout()
        let logoutFun = async () => {
            await userLogout()
        }
        let {user} = getUser()
        return { logoutFun, error, user }
    }
}
</script>

<style>
    nav{
        display: flex;
        /* width: 100%; */
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        border-bottom: 1px solid #eee;
    }
    .loginUser span{
        display: block;
    }
    .userName{
        font-weight: bold;
    }
    .userEmail{
        color: #9FA6B2;
    }
    .logoutBtn{
        background-color: #E4A11B;
        
    }
</style>