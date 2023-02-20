
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAqzSF1L-GBXeX2OUV4cPkipsMKL3cg2xc",
    authDomain: "jirani-361810.firebaseapp.com",
    projectId: "jirani-361810",
    storageBucket: "jirani-361810.appspot.com",
    messagingSenderId: "249779254222",
    appId: "1:249779254222:web:edc9b3b657b9cc30d0719f"
  };
  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app();
  }
  
  const db = app.firestore();
  const auth = firebase.auth();

  
  export { db, auth };