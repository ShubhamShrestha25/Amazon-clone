import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "clone-6cba9.firebaseapp.com",
  projectId: "clone-6cba9",
  storageBucket: "clone-6cba9.appspot.com",
  messagingSenderId: "970397216768",
  appId: "1:970397216768:web:30c3edfd8c2757a39928e5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
