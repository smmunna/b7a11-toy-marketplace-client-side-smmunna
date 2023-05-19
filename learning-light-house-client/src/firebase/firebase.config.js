// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByMWTGEkznMz_tWbaq7mt5Cvz-h9rRTJQ",
  authDomain: "learning-lighthouse.firebaseapp.com",
  projectId: "learning-lighthouse",
  storageBucket: "learning-lighthouse.appspot.com",
  messagingSenderId: "1083317791238",
  appId: "1:1083317791238:web:c298e720fb0fdbd40e3187"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;