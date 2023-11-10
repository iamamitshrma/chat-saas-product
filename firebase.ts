import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyDiBXF_cvzx55VFiAgm1UADtYvSqSak5TM",
    authDomain: "chat-all-37c5d.firebaseapp.com",
    projectId: "chat-all-37c5d",
    storageBucket: "chat-all-37c5d.appspot.com",
    messagingSenderId: "857417241487",
    appId: "1:857417241487:web:8b7bf3aec576c1a463f1fa",
    measurementId: "G-VPGZW4NHNY"
  };

// we are checking if firebase app is initialized on server side.
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions};