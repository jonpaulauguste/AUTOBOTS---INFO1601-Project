// firebase.js

// Import necessary Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKp9EPhSPOc55d4GcQPmpNwfE5RWlZpkg",
  authDomain: "autobots---info1601.firebaseapp.com",
  projectId: "autobots---info1601",
  storageBucket: "autobots---info1601.appspot.com",
  messagingSenderId: "344675316997",
  appId: "1:344675316997:web:4f3c7468a392289104736c",
  measurementId: "G-63BCPY2NSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export Firebase services for use in other files
export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword };
