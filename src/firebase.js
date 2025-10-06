// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFgNa6_1WZ2BDDimS2NWKe4me7e9QOYuU",
  authDomain: "proyecto-final-aca6f.firebaseapp.com",
  projectId: "proyecto-final-aca6f",
  storageBucket: "proyecto-final-aca6f.firebasestorage.app",
  messagingSenderId: "96886813491",
  appId: "1:96886813491:web:c2ee6e0d630802fa06c446"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);