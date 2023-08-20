import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmmFIXg7lK3b5su3ToAreoEKNMdyb7yho",
  authDomain: "crown-clothing-db-e3c59.firebaseapp.com",
  projectId: "crown-clothing-db-e3c59",
  storageBucket: "crown-clothing-db-e3c59.appspot.com",
  messagingSenderId: "41513920879",
  appId: "1:41513920879:web:6e51bc3dc0267a32f7209a",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
