// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqec92cQqvgQ_v104NNUXnhIXLxbG2hFY",
  authDomain: "doctor-portal-rev.firebaseapp.com",
  projectId: "doctor-portal-rev",
  storageBucket: "doctor-portal-rev.appspot.com",
  messagingSenderId: "41842619866",
  appId: "1:41842619866:web:bf9b5f9cc6e2f89000bce3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;