import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import * as fs from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwx5oJ75gWcSiCWJgh078UYogm-pTUjBY",
  authDomain: "bchat-84801.firebaseapp.com",
  databaseURL: "https://bchat-84801-default-rtdb.firebaseio.com",
  projectId: "bchat-84801",
  storageBucket: "bchat-84801.appspot.com",
  messagingSenderId: "869281021073",
  appId: "1:869281021073:web:af38cb36a764e74ccad330",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = fs.getFirestore();
