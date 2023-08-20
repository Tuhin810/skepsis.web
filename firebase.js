// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAuth,signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCngGzCjSNHi2xj2dnj6DqyphK5xGeRKsI",
  authDomain: "skepsis-4bfd3.firebaseapp.com",
  projectId: "skepsis-4bfd3",
  storageBucket: "skepsis-4bfd3.appspot.com",
  messagingSenderId: "559921919541",
  appId: "1:559921919541:web:5f0fa17958275f96de637c",
  measurementId: "G-R2DKHW4CLW"
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const provider = new GoogleAuthProvider(app);
const storage = getStorage();
const auth = getAuth(app);

export default app;

export { db, storage ,auth,provider};