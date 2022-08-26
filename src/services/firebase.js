// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import itemsData from '../data/data'



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


export async function saveProductsToFirebase() {
  const collectionVehicles = collection(firestoreDB, "vehiculos");

  for (let item of itemsData) {
    const docref = await addDoc(collectionVehicles, item);
    console.log("documento creado con id:", docref.id);
  }
}

export default firestoreDB;