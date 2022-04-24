import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {

  apiKey: "AIzaSyCT1nGLhH8zEmA2f3j0I4WFa4VA2S5Xey4",

  authDomain: "blog-bd882.firebaseapp.com",

  projectId: "blog-bd882",

  storageBucket: "blog-bd882.appspot.com",

  messagingSenderId: "153003780048",

  appId: "1:153003780048:web:8b817eb8c7d37d1e7afbd5",

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
