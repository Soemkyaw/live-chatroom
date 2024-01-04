import { ref } from "vue";
import {auth} from "../firebase/config"

let error = ref(null);

let userLogout = async() => {
    try {
        await auth.signOut()
    } catch (err) {
        error.value = err.message
    }
}

let logout = () => {
  return { error,userLogout };
};

export default logout;
