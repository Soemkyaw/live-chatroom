<template>
  <div class="messages" ref="MsgBox">
    <div class="singleMsg" v-for="msg in formattedMessages" :key="msg.id">
        <span class="time">{{ msg.created_at }}</span>
        <span class="name" :class="{ activeUser: isCurrentUser(msg.displayName)}">{{ msg.displayName }} : </span>
        <span class="chatmsg">{{ msg.message }}</span>
    </div>
  </div>
</template>

<script>
import { auth, db } from '@/firebase/config'
import { computed, onUpdated, ref } from 'vue'
import { formatDistanceToNow } from "date-fns"
export default {
    setup() {
        let allMsg = ref([])
        let MsgBox = ref(null)

        onUpdated(() => {
            MsgBox.value.scrollTop = MsgBox.value.scrollHeight
        })

        let formattedMessages = computed(() => {
            return allMsg.value.map((msg) => {
                let formatTime = formatDistanceToNow(msg.created_at.toDate())
                return {...msg,created_at:formatTime}
            })
        })
        db.collection("messages").orderBy("created_at").onSnapshot((snap) => {
            let results = []
            snap.docs.forEach(doc => {
                let document = {...doc.data(),id:doc.id}
                if (doc.data().created_at) {
                    results.push(document)
                }
            });
            allMsg.value = results
        })

        let isCurrentUser = (displayName) => {
            return auth.currentUser.displayName === displayName
        }


        return {allMsg,formattedMessages,MsgBox,isCurrentUser}
    }
}
</script>

<style>
    .messages {
        padding: 10px 20px;
        background-color: #eee;
        max-height: 460px;
        overflow: scroll;
    }
    .singleMsg {
        margin: 20px 0;
    }
    .singleMsg .time{
        display: block;
        color: #aaa;
        font-size: 13px;
    }
    .singleMsg .name{
        font-weight: bold;
        color: #333;
    }

    .messages::-webkit-scrollbar {
        width: 3px;
    }
    .messages::-webkit-scrollbar-track {
        background: #eee;
    }
    .messages::-webkit-scrollbar-thumb {
        background-color: #9FA6B2;
        border-radius: 3px;
    }
    .singleMsg .activeUser{
        color: #3B71CA;
    }
    
</style>