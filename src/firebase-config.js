import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhUNKydkwPLEeXIQDv6NCW9b_HWm-tjEY",
  authDomain: "blog-react-firebase-27bba.firebaseapp.com",
  projectId: "blog-react-firebase-27bba",
  storageBucket: "blog-react-firebase-27bba.appspot.com",
  messagingSenderId: "371126650293",
  appId: "1:371126650293:web:71806c1fb3b4d54434c5fc",
  measurementId: "G-J9DGJM20PT"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);