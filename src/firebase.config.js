
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCcrIqd64La7vlGkxXVuIhtUuGo-fzAkJs",
  authDomain: "tourism-app-adfb2.firebaseapp.com",
  projectId: "tourism-app-adfb2",
  storageBucket: "tourism-app-adfb2.appspot.com",
  messagingSenderId: "498661972826",
  appId: "1:498661972826:web:93e98fd62858e0d4f53163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()