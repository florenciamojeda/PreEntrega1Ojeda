
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7VoNCpJBNHS8qTAS4z0EWg4tthdUc0Bg",
  authDomain: "almendra-pet-shop.firebaseapp.com",
  projectId: "almendra-pet-shop",
  storageBucket: "almendra-pet-shop.appspot.com",
  messagingSenderId: "365253575851",
  appId: "1:365253575851:web:7d251e6e4fd967163f23ee"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db