// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBajsubMTv9g65ZAAGmlcv3oc5owg8GCP0",
  authDomain: "netflixgpt-ai-enabled.firebaseapp.com",
  projectId: "netflixgpt-ai-enabled",
  storageBucket: "netflixgpt-ai-enabled.appspot.com",
  messagingSenderId: "376067025627",
  appId: "1:376067025627:web:f28dc79d8339fec5447afe",
  measurementId: "G-XRGYXZJJ6V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
