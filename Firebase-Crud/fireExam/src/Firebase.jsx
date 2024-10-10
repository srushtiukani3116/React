// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqF9asECNBlx0_0_Qggw5ghDvjdtHRi2M",
  authDomain: "fir-exam-d7762.firebaseapp.com",
  projectId: "fir-exam-d7762",
  storageBucket: "fir-exam-d7762.appspot.com",
  messagingSenderId: "1048921149363",
  appId: "1:1048921149363:web:7419250f18a8ebefaa45c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);