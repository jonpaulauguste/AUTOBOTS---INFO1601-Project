// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";  // Import Firebase Auth
import { getFirestore } from "firebase/firestore";  // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKp9EPhSPOc55d4GcQPmpNwfE5RWlZpkg", 
  authDomain: "autobots---info1601.firebaseapp.com",
  projectId: "autobots---info1601",
  storageBucket: "autobots---info1601.firebasestorage.app",
  messagingSenderId: "344675316997",
  appId: "1:344675316997:web:4f3c7468a392289104736c",
  measurementId: "G-63BCPY2NSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);  // For Authentication
const db = getFirestore(app);  // For Firestore

export { auth, db };
