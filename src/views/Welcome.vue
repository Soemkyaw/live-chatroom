<template>
  <div class="container">
    <!-- <h1>Hello</h1> -->
    <div v-if="showLoginForm">
      <Login @enterChatroom="enterChatroom"></Login>
      <p>Don't have an account? <span class="error" @click="showLoginForm=!showLoginForm">Sign up</span></p>
    </div>
    <div v-else>
      <Signup @enterChatroom="enterChatroom"></Signup>
      <p>Have an account already? <span class="error" @click="showLoginForm = !showLoginForm">Log in</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '../components/Login'
import Signup from '../components/Signup'
import { useRouter } from 'vue-router'
export default {
  components: {
    Login, Signup },
  setup() {
    let showLoginForm = ref(true)
    let router = useRouter()

    let enterChatroom = () => {
      router.push({name:"LiveChatroom"})
    }

    return {showLoginForm,enterChatroom}
  }
}
</script>

<style>

</style>