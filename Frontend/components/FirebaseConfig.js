// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUZbRR3xhCksOUfrw5ArIj8lwBnkEORk4",
  authDomain: "lumi-1022.firebaseapp.com",
  projectId: "lumi-1022",
  storageBucket: "lumi-1022.firebasestorage.app",
  messagingSenderId: "511132581535",
  appId: "1:511132581535:web:d080f4e4a70e8f17c7acaa",
  measurementId: "G-GDYQNDR0TM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { storage, db, auth, analytics };
