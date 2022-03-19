// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDhpxLDipC2XhQMxE2J46nQdU_hQvFXQk",
  authDomain: "istream-da9d6.firebaseapp.com",
  projectId: "istream-da9d6",
  storageBucket: "istream-da9d6.appspot.com",
  messagingSenderId: "847681320765",
  appId: "1:847681320765:web:14d8b976b4351590eeb754",
  measurementId: "G-JX6EBM2YZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
