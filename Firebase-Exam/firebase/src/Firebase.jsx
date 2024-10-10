// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-fLRc92ZBA7FquAtx1JB8Nc96MmSG_Vc",
  authDomain: "fir-96708.firebaseapp.com",
  projectId: "fir-96708",
  storageBucket: "fir-96708.appspot.com",
  messagingSenderId: "477600290395",
  appId: "1:477600290395:web:839d20b1775b468435117e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);