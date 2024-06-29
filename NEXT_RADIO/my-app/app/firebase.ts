// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlWbr6l5rYQWOzEnrLaw9DhjhSgLbXnAA",
  authDomain: "radio-80e19.firebaseapp.com",
  projectId: "radio-80e19",
  storageBucket: "radio-80e19.appspot.com",
  messagingSenderId: "314337928664",
  appId: "1:314337928664:web:a5aca80db36c82dbf73ead",
  measurementId: "G-46XYDKQGMM"
};

// Initialize Firebase
const app = getApps().length ? getApps() : initializeApp( firebaseConfig );
const auth = getAuth();

export { app, auth };

