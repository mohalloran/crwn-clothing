//base import
import firebase from 'firebase/app';

//import the libraries we just need .
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBa8XTWcfBAelWoWtTS8u4rBTPi_LtF-Aw",
    authDomain: "crwn-db-36cb0.firebaseapp.com",
    projectId: "crwn-db-36cb0",
    storageBucket: "crwn-db-36cb0.appspot.com",
    messagingSenderId: "188881851911",
    appId: "1:188881851911:web:912b5414a47e292ea2fca2",
    measurementId: "G-XJD4TTSKKR"
  };

  firebase.initializeApp(config);

  //export these as will need later .
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //google auth provider from authentication library
  const provider = new firebase.auth.GoogleAuthProvider();
  //we want to always trigger the google pop up asking for permission 
  provider.setCustomParameters( {prompt: 'select_account' } );

  //we just want the google one as there are mulitp
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

