// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm5Z-OAO---VoMWip-ABiTWLiNryShfos",
  authDomain: "crp-project-4cd1b.firebaseapp.com",
  projectId: "crp-project-4cd1b",
  storageBucket: "crp-project-4cd1b.appspot.com",
  messagingSenderId: "483837884523",
  appId: "1:483837884523:web:fda9cafa468dc84fff192e",
  measurementId: "G-VKDTHT8M9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleprov=new GoogleAuthProvider()
console.log(googleprov)