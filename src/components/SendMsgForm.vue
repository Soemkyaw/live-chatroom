<template>
    <footer>
        <div class="sentMsgForm">
            <input type="text" v-model="message" placeholder="Enter message...">
            <span class="material-icons sendIcon" @click="handleSendMsg">send</span>
            
        </div>
    </footer>
</template>

<script>
import { ref } from 'vue'
import getUser from '@/composable/getUser'
import { timestamp, db } from '@/firebase/config'
import createMsgDoc from "../composable/createMsgDoc"
export default {
    setup() {
        let message = ref('')
        let { user } = getUser()

        let {error,addDoc} = createMsgDoc("messages")

        let handleSendMsg = async() => {
            let chat = {
                message: message.value,
                displayName: user.value.displayName,
                created_at: timestamp()
            }
            await addDoc(chat)
            message.value = ""
        }
        return {message, handleSendMsg,error }
    }
}
</script>

<style>
    .sentMsgForm{
        margin: 0px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 0;
        margin-top: 10px;
    }
    .sentMsgForm input{
        width: 100%;
        padding: 15px 0;
        outline: none;
        border: 0;
    }
    .sendIcon{
        cursor: pointer;
        color: white;
        padding: 8px 15px;
        background-color: #3B71CA;
        border-radius: 10px;
        opacity: 1;
    }
    .sendIcon:hover{
        opacity: 0.8;
    }
</style>