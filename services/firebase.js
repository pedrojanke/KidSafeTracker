import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCUToInFX31AM0xCZvR6Em46QXLLccoBrc",
  authDomain: "kidsafetracker.firebaseapp.com",
  projectId: "kidsafetracker",
  storageBucket: "kidsafetracker.firebasestorage.app",
  messagingSenderId: "745864374302",
  appId: "1:745864374302:android:116cb9ce455814a394260f",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export { firebase };
