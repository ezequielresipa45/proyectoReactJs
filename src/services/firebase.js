// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1YjrkLtHgWOyneGzrry5KjZiI1M5tEVA",
  authDomain: "proyecto-react-coder-resipa.firebaseapp.com",
  projectId: "proyecto-react-coder-resipa",
  storageBucket: "proyecto-react-coder-resipa.appspot.com",
  messagingSenderId: "252226908745",
  appId: "1:252226908745:web:96ecd9d19ba43621594598"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app); 
export default firestoreDB;