import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQl0Fk7fpnY36G7PNfJb2-ER6MYRSW2CU",
  authDomain: "olx-number-2.firebaseapp.com",
  projectId: "olx-number-2",
  storageBucket: "olx-number-2.appspot.com",
  messagingSenderId: "574516117735",
  appId: "1:574516117735:web:18925880ff39a06de0e242",
  measurementId: "G-60QK4FNGKS"
};




export default firebase.initializeApp(firebaseConfig)