// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP6fNlZAwfPIUCJpT-Y12PaQfQ6g__1Jc",
  authDomain: "mern-book-inventory-55f1c.firebaseapp.com",
  projectId: "mern-book-inventory-55f1c",
  storageBucket: "mern-book-inventory-55f1c.appspot.com",
  messagingSenderId: "727495446501",
  appId: "1:727495446501:web:ddd4c658c6950c77b5e90c",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
