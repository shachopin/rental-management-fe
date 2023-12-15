import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtnSOeQLzDUsyl-DXXwZS1Bf9rNwsi3ek",
  authDomain: "rental-fe.firebaseapp.com",
  projectId: "rental-fe",
  storageBucket: "rental-fe.appspot.com",
  messagingSenderId: "671670446631",
  appId: "1:671670446631:web:882ac04ad623abbc77bc02"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };