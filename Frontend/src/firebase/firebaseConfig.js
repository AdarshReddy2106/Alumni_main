// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAC_-vTsvbB41IrjZ8rt5J7sNAYr8bDigw",
    authDomain: "alumni-d9345.firebaseapp.com",
    databaseURL: "https://alumni-d9345-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "alumni-d9345",
    storageBucket: "alumni-d9345.firebasestorage.app",
    messagingSenderId: "877246727349",
    appId: "1:877246727349:web:dc0992c6c7d8b972f42afc",
    measurementId: "G-0DV4Q4B6HX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };