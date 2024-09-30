// firebase.js
// Configura Firebase con le tue credenziali
const firebaseConfig = {
    apiKey: "AIzaSyB3lGuUiHG3wxrzKf6cPfD50xgt60dbqAg",
    authDomain: "conevishs.firebaseapp.com",
    databaseURL: "https://conevishs-default-rtdb.firebaseio.com",
    projectId: "conevishs",
    storageBucket: "conevishs.appspot.com",
    messagingSenderId: "920921649335",
    appId: "1:920921649335:web:4c7918cd0d8bce86cadd32",
    measurementId: "G-ZNK22L4J98"
  };


// Inizializza Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();
