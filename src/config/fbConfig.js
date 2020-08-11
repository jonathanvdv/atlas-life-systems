import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/database'

 
 // Your web app's Firebase configuration
  var rrfConfig = {
    apiKey: "AIzaSyCeykn3-OAOhEE96oML2374DBOUju08-KM",
    authDomain: "moltres-v1.firebaseapp.com",
    databaseURL: "https://moltres-v1.firebaseio.com",
    projectId: "moltres-v1",
    storageBucket: "moltres-v1.appspot.com",
    messagingSenderId: "312752492983",
    appId: "1:312752492983:web:ecb3892cf4169482be5832",
    measurementId: "G-9J9YLY0F4Y"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(rrfConfig);
  }
  firebase.analytics();
  firebase.auth();

  export default firebase;