import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Q2lcuvVst0_9CR4CexoEwKGbBgRrLn0",
  authDomain: "netflix-clone-5c664.firebaseapp.com",
  projectId: "netflix-clone-5c664",
  storageBucket: "netflix-clone-5c664.appspot.com",
  messagingSenderId: "39602269193",
  appId: "1:39602269193:web:a4a7f4434af30a95095cd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();


export { auth };
export default db;