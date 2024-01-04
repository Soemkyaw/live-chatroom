import { ref } from "vue";
import {auth} from "../firebase/config"

let error = ref(null);

let createAcc = async (email, password,displayName) => {
  try {
    let response = await auth.createUserWithEmailAndPassword(email, password);
    if (!response) {
      throw new Error("Could not sign up account. Try again....");
    }
    await response.user.updateProfile({ displayName: displayName });
    return response;
  } catch (err) {
    error.value = err.message;
  }
};

let useSignup = () => {
  return { error, createAcc };
};

export default useSignup
