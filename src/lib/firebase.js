import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chatapp-1358f.firebaseapp.com",
  projectId: "react-chatapp-1358f",
  storageBucket: "react-chatapp-1358f.appspot.com",
  messagingSenderId: "546732161965",
  appId: "1:546732161965:web:f513eb51b09c4bf7b2ff24",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
