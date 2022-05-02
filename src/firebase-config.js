// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo4LbLIV7rNG0m0IKcNnITUnpyxunTDsQ",
  authDomain: "moviecafe-b796d.firebaseapp.com",
  projectId: "moviecafe-b796d",
  storageBucket: "moviecafe-b796d.appspot.com",
  messagingSenderId: "336882317554",
  appId: "1:336882317554:web:7c1f84ce17692ea187386b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();