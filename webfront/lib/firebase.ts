import { initializeApp } from "firebase/app";

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
