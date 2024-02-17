// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a9b54.firebaseapp.com",
  projectId: "mern-estate-a9b54",
  storageBucket: "mern-estate-a9b54.appspot.com",
  messagingSenderId: "282842977106",
  appId: "1:282842977106:web:97e4e92c3032432a59a08b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);