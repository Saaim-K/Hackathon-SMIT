// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3hYuJoXZjKJe_b7i6N41uuvRbIFIUWFk",
  authDomain: "smit-hackathon-786.firebaseapp.com",
  projectId: "smit-hackathon-786",
  storageBucket: "smit-hackathon-786.appspot.com",
  messagingSenderId: "760481675946",
  appId: "1:760481675946:web:135ed926c0fdc54f3c2ed3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)