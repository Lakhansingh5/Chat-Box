import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";





 const firebaseConfig = {
  apiKey: " ",
  authDomain: "chat-box-185d6.firebaseapp.com",
  projectId: "chat-box-185d6",
  storageBucket: "chat-box-185d6.appspot.com",
  messagingSenderId: "537584341192",
  appId: "1:537584341192:web:591194040eec90051995fd"
}; 

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()