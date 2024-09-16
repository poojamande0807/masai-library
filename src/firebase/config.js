// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxO43G4ERT6FFYGlwClc3LaztNdXMxJF4",
  authDomain: "masai-library-6850b.firebaseapp.com",
  projectId: "masai-library-6850b",
  storageBucket: "masai-library-6850b.appspot.com",
  messagingSenderId: "6379498273",
  appId: "1:6379498273:web:f53044f221d2fbba122c60",
  measurementId: "G-HM5MRK087L",
  databaseURL: "https://masai-library-6850b-default-rtdb.firebaseio.com/",
};
// https://masai-library-6850b-default-rtdb.firebaseio.com/
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
  
