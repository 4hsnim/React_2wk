// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB64OEq7gy5pCpiN7yAMjxn4brQm7Qs9k",
  authDomain: "dictionary-a3573.firebaseapp.com",
  projectId: "dictionary-a3573",
  storageBucket: "dictionary-a3573.appspot.com",
  messagingSenderId: "518555392468",
  appId: "1:518555392468:web:91fca7d6acd77b4acb1e41",
  measurementId: "G-BZ0LY0GEEZ"
};
initializeApp(firebaseConfig)
// Initialize Firebase




export const db = getFirestore();