import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC2G2FmlWdUC2IFk57D61uJjCveBj-cizk",
  authDomain: "reactlinks-31c0e.firebaseapp.com",
  projectId: "reactlinks-31c0e",
  storageBucket: "reactlinks-31c0e.appspot.com",
  messagingSenderId: "960039513029",
  appId: "1:960039513029:web:e7852fa2e35f95d93839ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
