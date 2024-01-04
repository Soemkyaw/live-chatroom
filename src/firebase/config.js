import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDA5u2a3jXnsiYr838YAbpbvlof-OTqEHE",
  authDomain: "live-chatroom-d0584.firebaseapp.com",
  projectId: "live-chatroom-d0584",
  storageBucket: "live-chatroom-d0584.appspot.com",
  messagingSenderId: "1042478101636",
  appId: "1:1042478101636:web:4fc860aafa2d56a514bed1",
};

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {db,auth,timestamp}
