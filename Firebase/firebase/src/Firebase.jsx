// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhHflDopqg4IoHdQA813234Fp7kAOjU5U",
  authDomain: "fir-1-59b95.firebaseapp.com",
  projectId: "fir-1-59b95",
  storageBucket: "fir-1-59b95.appspot.com",
  messagingSenderId: "1065142911030",
  appId: "1:1065142911030:web:4c1910e03da3977abb9897",
  measurementId: "G-P7JX84VJNF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);