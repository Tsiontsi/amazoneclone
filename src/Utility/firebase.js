import firebase from "firebase/compat/app";
//auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqIMAioCuih5urTg3bRj8n41KACbNyk50",
  authDomain: "clone-ed8b9.firebaseapp.com",
  projectId: "clone-ed8b9",
  storageBucket: "clone-ed8b9.appspot.com",
  messagingSenderId: "5488669644",
  appId: "1:5488669644:web:6464233fe1aa4b538ba369"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();