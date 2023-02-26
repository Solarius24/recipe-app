import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD2abuMINKNZQ3EWVMMzFzqQlf3ZFiDHYw",
  authDomain: "ninja-cooking-app-cb86a.firebaseapp.com",
  projectId: "ninja-cooking-app-cb86a",
  storageBucket: "ninja-cooking-app-cb86a.appspot.com",
  messagingSenderId: "496771172927",
  appId: "1:496771172927:web:22e70379284467526f068a"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)