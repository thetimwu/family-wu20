import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBy9c5IspCj6Z48fkFKgLNF5LLjlHXy9Zg",
  authDomain: "family-wu-ts.firebaseapp.com",
  databaseURL: "https://family-wu-ts.firebaseio.com",
  projectId: "family-wu-ts",
  storageBucket: "family-wu-ts.appspot.com",
  messagingSenderId: "262333978865",
  appId: "1:262333978865:web:1a3d002dd83c705b817150",
  measurementId: "G-WYW0TF5QTF",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
