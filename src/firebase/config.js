import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzEPOu5kEW13PvXKZzA4S1neC7xpizL5Y",
  authDomain: "photogallery-c17a4.firebaseapp.com",
  projectId: "photogallery-c17a4",
  storageBucket: "photogallery-c17a4.appspot.com",
  messagingSenderId: "340815323341",
  appId: "1:340815323341:web:323f204fd50fcf5b778984",
  measurementId: "G-73VS6QHLXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const prjectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();