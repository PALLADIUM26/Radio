// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD26rflQ9q4dFtB41A-pwJNrOEJRf4wpkQ",
  authDomain: "the-audio-project.firebaseapp.com",
  projectId: "the-audio-project",
  storageBucket: "the-audio-project.appspot.com",
  messagingSenderId: "148200881825",
  appId: "1:148200881825:web:be20aec6c47feeb50c3ae0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);