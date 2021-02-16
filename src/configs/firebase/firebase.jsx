import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCZJ4Qdf2cIO7Wfj2CnkCOs-nDXmqvhpVw",
  authDomain: "my-notes-89c59.firebaseapp.com",
  projectId: "my-notes-89c59",
  storageBucket: "my-notes-89c59.appspot.com",
  messagingSenderId: "550001952020",
  appId: "1:550001952020:web:a0058bff9ed98007012e01"
}
var app = firebase.initializeApp(firebaseConfig)

const db = app.firestore()

export default {db}