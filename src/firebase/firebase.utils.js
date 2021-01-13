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

  export const createUserProfileDocument = async (userAuth, additionalData ) => {
        if(!userAuth) return;

        console.log('userAuth is ',userAuth.uid);

        //Query inside firestore for the user document with that id .
        //Creates userRef object even if it the Id does not exist inside our DB
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        
        //snapshot represents the data
        const snapShot = await userRef.get();

        //check if the data exists if not create a new entry in the firestore DB .
        if(!snapShot.exists){
            
            const {displayName, email} = userAuth;
            console.log('DisplayName in userAuth is',displayName);
            const createdAt = new Date();

            try  {
                 await userRef.set({
                       displayName: displayName,
                       email: email,
                       createdAt: createdAt,
                       ...additionalData
                 });
            } catch(error){
                  console.log('Error creating User:',error.message);
            }
        }
        
        console.log('Returning userRef:',userRef);
        return userRef;

  }


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

