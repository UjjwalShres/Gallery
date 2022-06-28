import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyCJZ_nV3V9GH4WtiFF0E6jEnH1Zl47vzOQ",
  authDomain: "firegram-d23bc.firebaseapp.com",
  projectId: "firegram-d23bc",
  storageBucket: "firegram-d23bc.appspot.com",
  messagingSenderId: "306479081211",
  appId: "1:306479081211:web:f74a4ce0a12b6ac4d7b25e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };