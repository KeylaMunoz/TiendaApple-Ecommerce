
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBn4_jDyqmMIorOjAEG2iIKq3wyL0n9jaY",
  authDomain: "ecommerce-c969e.firebaseapp.com",
  projectId: "ecommerce-c969e",
  storageBucket: "ecommerce-c969e.appspot.com",
  messagingSenderId: "787698874725",
  appId: "1:787698874725:web:8b8a479617957535f0898c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db

