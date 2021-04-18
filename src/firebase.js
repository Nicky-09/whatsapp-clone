import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
    apiKey: "AIzaSyCjdDpFxlJVlB-mGUST30QQJ5DNZOXz2hI",
    authDomain: "whatsapp-clone-8c931.firebaseapp.com",
    projectId: "whatsapp-clone-8c931",
    storageBucket: "whatsapp-clone-8c931.appspot.com",
    messagingSenderId: "1083082264290",
    appId: "1:1083082264290:web:942ac282b6d4bbc81f98bb",
    measurementId: "G-CCTY67LKYL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
