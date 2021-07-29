import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDPAA3UWIxCzS3xTozSDT6XpC-1y9krjXQ",
  authDomain: "todoapp-with-oath.firebaseapp.com",
  projectId: "todoapp-with-oath",
  storageBucket: "todoapp-with-oath.appspot.com",
  messagingSenderId: "881977686353",
  appId: "1:881977686353:web:74549d6ad475e78d7cfb70"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}