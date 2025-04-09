// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAvqbN-VlyGVp64_CVKRC5VGcuA-LLxWc",
  authDomain: "paoginregister.firebaseapp.com",
  projectId: "paoginregister",
  storageBucket: "paoginregister.firebasestorage.app",
  messagingSenderId: "875357802646",
  appId: "1:875357802646:web:826dd6d97ea2346beaf2b7",
  measurementId: "G-60Q17SBQB9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
