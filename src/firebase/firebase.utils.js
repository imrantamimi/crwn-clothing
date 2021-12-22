import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBP0vBlMG8UB7rB3gdXLUfSDs4hsLZSO5U",
  authDomain: "crwn-db-eaa7c.firebaseapp.com",
  projectId: "crwn-db-eaa7c",
  storageBucket: "crwn-db-eaa7c.appspot.com",
  messagingSenderId: "10304537415",
  appId: "1:10304537415:web:44c917343bcf5fefe54262",
  measurementId: "G-GXH3Z7B3Q4",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
