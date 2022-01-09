import { initializeApp } from "firebase/app";

// You should paste your Firebase configuration to below

//// replace this area --->
const firebaseConfig = {
  apiKey: "XXXXX",
  authDomain: "XXXXX.firebaseapp.com",
  projectId: "XXXXX",
  storageBucket: "XXXXX.appspot.com",
  messagingSenderId: "XXXXX",
  appId: "XXXXX",
};
//// <--- replace this area

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
