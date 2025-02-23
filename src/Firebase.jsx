// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBreZrXiBOtE7PtQjB3zHHzCG_FWAN6qws",
  authDomain: "what-the-move-9ee7d.firebaseapp.com",
  projectId: "what-the-move-9ee7d",
  storageBucket: "what-the-move-9ee7d.firebasestorage.app",
  messagingSenderId: "225442825601",
  appId: "1:225442825601:web:dc8dab58820c5180f49480",
  measurementId: "G-V32CW38BWN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, addDoc, collection };