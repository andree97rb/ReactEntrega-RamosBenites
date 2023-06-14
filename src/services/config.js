import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "royalcomerce-696fd.firebaseapp.com",
  projectId: "royalcomerce-696fd",
  storageBucket: "royalcomerce-696fd.appspot.com",
  messagingSenderId: "918093856834",
  appId: "1:918093856834:web:69c536f443558d1a4beddb"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);