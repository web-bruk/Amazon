// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAdO27L-IsMIU_rlOBuEL8_IU4GskOSIk4",
    authDomain: "project-e92c5.firebaseapp.com",
    projectId: "project-e92c5",
    storageBucket: "project-e92c5.appspot.com",
    messagingSenderId: "428283209877",
    appId: "1:428283209877:web:6af00a252ce40f1c35d39c",
    measurementId: "G-WKQJBHQQ1N"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
