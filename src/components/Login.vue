<template>
    <form @submit.prevent="loginAcc">
        <h3>Login</h3>
        <!-- <input type="text" v-model="displayName" placeholder="Enter display name..."> -->
        <input type="email" v-model="email" placeholder="Enter email address...">
        <input type="password" v-model="password" placeholder="Enter password...">
        <div v-if="error">
            <p class="error">{{ error }}</p>
        </div>
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '@/composable/useLogin'

export default {
    setup(props,context) {
        let email = ref('')
        let password = ref('')

        let {error, loginAccount} = useLogin()
        let loginAcc = async () => {
            let res = await loginAccount(email.value, password.value)
            if (res) {
                context.emit("enterChatroom")
            }
        }

        return {email,password,loginAcc, error }
    }
}
</script>

<style></style>