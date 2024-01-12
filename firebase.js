// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5eiVxF9gQC0tu0o_bnZiuFBIMzuUi4ww",
  authDomain: "delcampo-fb2a7.firebaseapp.com",
  databaseURL: "https://delcampo-fb2a7-default-rtdb.firebaseio.com",
  projectId: "delcampo-fb2a7",
  storageBucket: "delcampo-fb2a7.appspot.com",
  messagingSenderId: "626292851045",
  appId: "1:626292851045:web:db53c43496696dcbd7e18c",
  measurementId: "G-BG69M70KRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);