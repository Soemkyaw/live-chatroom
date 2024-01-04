<template>
  <form @submit.prevent="signUpAcc">
    <h3>Sign Up</h3>
    <input type="text" v-model="displayName" placeholder="Enter display name...">
    <input type="email" v-model="email" placeholder="Enter email address...">
    <input type="password" v-model="password" placeholder="Enter password...">
    <div v-if="error">
        <p class="error">{{ error }}</p>
    </div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import { auth } from "../firebase/config"
import useSignup from '@/composable/useSignup'
export default {
    setup(props,context) {
        let displayName = ref('')
        let email = ref('')
        let password = ref('')

        let {error,createAcc} = useSignup()
        let signUpAcc = async() => {
            let res = await createAcc(email.value, password.value,displayName.value)
            if (res) {
              context.emit('enterChatroom')
            }
        }

        return {displayName,email,password,signUpAcc,error}
    }
}
</script>

<style>
    
</style>