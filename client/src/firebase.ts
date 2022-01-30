import { initializeApp } from "firebase/app";

// You should paste your Firebase configuration to below

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpJxfjEYKSRiBPNbz8P2hPWPVSwTMal0A",
  authDomain: "mypossescreen-994da.firebaseapp.com",
  projectId: "mypossescreen-994da",
  storageBucket: "mypossescreen-994da.appspot.com",
  messagingSenderId: "411938907850",
  appId: "1:411938907850:web:13b577de17c1d9f8897633"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
