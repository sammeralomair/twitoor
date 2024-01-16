// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8QOJiwaJTal-JmypJpbU_vX2El3q1x0c",
    authDomain: "twitoor.firebaseapp.com",
    projectId: "twitoor",
    storageBucket: "twitoor.appspot.com",
    messagingSenderId: "774018258043",
    appId: "1:774018258043:web:d6d9ee8f1fe0d8d3337ede"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };