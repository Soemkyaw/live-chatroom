import { ref } from "vue";
import {auth} from "../firebase/config"

let user = ref(auth.currentUser);

auth.onAuthStateChanged((u) => {
    user.value = u;
});

let getUser = () => {
    return { user };
}

export default getUser;
