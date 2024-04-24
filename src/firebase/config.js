import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBfduEYjuRji3z08HU-aQp9rW9edODRJAU",
  authDomain: "olxclone-c15ad.firebaseapp.com",
  projectId: "olxclone-c15ad",
  storageBucket: "olxclone-c15ad.appspot.com",
  messagingSenderId: "98382301079",
  appId: "1:98382301079:web:f69caa468a6161a13de6d2",
  measurementId: "G-YWZZ173HXZ"
};

// Initialize Firebase



export default firebase.initializeApp(firebaseConfig)