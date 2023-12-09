// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN6b0fLdCmgHqeoQgK6KPqtO3oBweo3vg",
  authDomain: "notes-app-61ec5.firebaseapp.com",
  projectId: "notes-app-61ec5",
  storageBucket: "notes-app-61ec5.appspot.com",
  messagingSenderId: "38722016863",
  appId: "1:38722016863:web:03d5685cb583ab5cb2adea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");