// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult, setPersistence, browserSessionPersistence } from "firebase/auth";

const setup = async function() {
  const app = initializeApp({
    apiKey: "AIzaSyAK96n1YkMkJX5kUYM2SbkkOsxre07Gs18",
    authDomain: "life-of-bub.firebaseapp.com",
    databaseURL: "https://life-of-bub.firebaseio.com",
    projectId: "life-of-bub",
    storageBucket: "life-of-bub.appspot.com",
    messagingSenderId: "834895891800",
    appId: "1:834895891800:web:dc751d0577ee75ef63e92d"
  });

  const provider = new GoogleAuthProvider();
  // Start a sign in process for an unauthenticated user.
  provider.addScope('profile');
  provider.addScope('email');
  
  const auth = getAuth();
  setPersistence(auth, inMemoryPersistence)
    .then(() => {
      const provider = new GoogleAuthProvider();
      // In memory persistence will be applied to the signed in Google user
      // even though the persistence was set to 'none' and a page redirect
      // occurred.
      return signInWithRedirect(auth, provider);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });

}

setup();