import { ref } from "vue"
import { auth } from "@/firebase/config"

let error = ref(null)

let loginAccount = async(email,password) => {
    try {
        let response = await auth.signInWithEmailAndPassword(email, password);
        if (!response) {
            throw new Error("Cann't log in account. Try again...")
        }
        return response
    } catch (err) {
        error.value = "Cann't login account. Try again...";
    }
}

let useLogin = () => {
    return {error,loginAccount}
}

export default useLogin