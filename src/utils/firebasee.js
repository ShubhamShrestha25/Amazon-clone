import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDagDlXG2qIH19ech7pGwQci5Sxdd5PVDs",
  authDomain: "clone-6cba9.firebaseapp.com",
  projectId: "clone-6cba9",
  storageBucket: "clone-6cba9.appspot.com",
  messagingSenderId: "970397216768",
  appId: "1:970397216768:web:30c3edfd8c2757a39928e5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };