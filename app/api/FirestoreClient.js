import { getFirestore, collection, query,onSnapshot, where, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAqzSF1L-GBXeX2OUV4cPkipsMKL3cg2xc",
    authDomain: "jirani-361810.firebaseapp.com",
    projectId: "jirani-361810",
    storageBucket: "jirani-361810.appspot.com",
    messagingSenderId: "249779254222",
    appId: "1:249779254222:web:edc9b3b657b9cc30d0719f"
  };
  ``
  initializeApp(firebaseConfig)

  export const db = getFirestore()