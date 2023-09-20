// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFdRgAMSqCu0X5_uTUZNMePU7vkj566-E",
  authDomain: "pixify-98f2a.firebaseapp.com",
  projectId: "pixify-98f2a",
  storageBucket: "pixify-98f2a.appspot.com",
  messagingSenderId: "921495568501",
  appId: "1:921495568501:web:609b4f51bfb10e8cb7383c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, db };