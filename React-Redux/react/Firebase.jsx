// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAMjccOVKQRc99or_6xVKU5DStEYDXOTc",
  authDomain: "react-redux-4f309.firebaseapp.com",
  projectId: "react-redux-4f309",
  storageBucket: "react-redux-4f309.appspot.com",
  messagingSenderId: "726361158826",
  appId: "1:726361158826:web:db2084e5a23aac670e4cd3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
export { auth };