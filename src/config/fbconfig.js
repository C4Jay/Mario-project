import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCflJ5EcAjCJPvxtEEfs6STdyhe3xCU66E",
    authDomain: "project4-255310.firebaseapp.com",
    databaseURL: "https://project4-255310.firebaseio.com",
    projectId: "project4-255310",
    storageBucket: "project4-255310.appspot.com",
    messagingSenderId: "736990400783",
    appId: "1:736990400783:web:6859cb746d8893fc88ee7a",
    measurementId: "G-FKT5SZB6RH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
/*   firebase.analytics(); */
  export default firebase;