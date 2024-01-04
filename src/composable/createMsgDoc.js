import { db } from "@/firebase/config"
import { ref } from "vue";

let createMsgDoc = (collection) => {
    let error = ref(null)

    let addDoc = async(doc) => {
        try {
            await db.collection(collection).add(doc);
        } catch (err) {
            error.value = err.message
        }
    }

    return {error,addDoc}
}

export default createMsgDoc