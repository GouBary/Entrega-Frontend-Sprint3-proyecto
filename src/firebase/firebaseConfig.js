// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArnRDIJ5bSVcYye1FMez1KDOWr7iCIyOg",
  authDomain: "proyecto--s3.firebaseapp.com",
  projectId: "proyecto--s3",
  storageBucket: "proyecto--s3.appspot.com",
  messagingSenderId: "817752209659",
  appId: "1:817752209659:web:88d0c072c7458771abd85e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const DB = getFirestore();

export default app