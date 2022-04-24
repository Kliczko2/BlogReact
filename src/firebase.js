import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDWlvHc6bPjXecV4KWL7aK9BYmpVeo3r80",
  authDomain: "blogreact-ad6cd.firebaseapp.com",
  projectId: "blogreact-ad6cd",
  storageBucket: "blogreact-ad6cd.appspot.com",
  messagingSenderId: "595068345450",
  appId: "1:595068345450:web:6f05a022c43b0436203e13"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
