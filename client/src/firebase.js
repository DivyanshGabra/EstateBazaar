// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-bazaar.firebaseapp.com",
  projectId: "estate-bazaar",
  storageBucket: "estate-bazaar.appspot.com",
  messagingSenderId: "102747832180",
  appId: "1:102747832180:web:043d4ceb8391e71c2a7621"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);