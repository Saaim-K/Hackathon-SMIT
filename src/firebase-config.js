// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPZ3DaoSA0hIj8e5I9fMwPmVj-WXXBQ-c",
    authDomain: "smit-hackathon-69.firebaseapp.com",
    projectId: "smit-hackathon-69",
    storageBucket: "smit-hackathon-69.appspot.com",
    messagingSenderId: "873470520639",
    appId: "1:873470520639:web:716ca28ed9e9298558f78a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);