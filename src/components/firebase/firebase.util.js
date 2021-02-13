import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBt0P0NaXiFdstiHXfV3wTZyBv46N7nnxg',
  authDomain: 'emark-db.firebaseapp.com',
  projectId: 'emark-db',
  storageBucket: 'emark-db.appspot.com',
  messagingSenderId: '170207910403',
  appId: '1:170207910403:web:e376e2d3290e33f9198c36',
  measurementId: 'G-2CR1YQHJS8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
