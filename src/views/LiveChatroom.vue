<template>
  <div class="container" v-if="user">
    <Navbar></Navbar>
    <ChatWindow class="chatwindow"></ChatWindow>
    <SendMsgForm></SendMsgForm>
  </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import SendMsgForm from '../components/SendMsgForm'
import Navbar from '../components/Navbar'
import getUser from '@/composable/getUser';
import { useRouter } from 'vue-router';
import { watch } from 'vue';
export default {
  components: {
    ChatWindow,
    SendMsgForm, Navbar },
    setup() {
      let { user } = getUser()
      let router = useRouter()

      watch(user, () => {
        if (!user.value) {
          router.push('/')
        }
      })
      return {user}
    }
}
</script>

<style>
</style>