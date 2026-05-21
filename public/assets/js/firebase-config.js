// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLXY-LQb6bjyzhB77SiC9BlwrHq5mCjaQ",
  authDomain: "typnique.firebaseapp.com",
  projectId: "typnique",
  storageBucket: "typnique.firebasestorage.app",
  messagingSenderId: "892574762988",
  appId: "1:892574762988:web:fd19de9c8606140b5d22c9",
  measurementId: "G-Z9HXJ2FDXF"
};

// Initialize Firebase (v8 style)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();